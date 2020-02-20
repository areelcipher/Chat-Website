import React, {Component} from 'react'

import ChatList from "../chat-list/ChatList";
import Navbar from "../navbar/Navbar";

const firebase = require('firebase')

class Dashboard extends Component {
    constructor() {
        super()
        this.state = {
            selectedChat: null,
            newChatFormVisible: false,
            email: null,
            chats: []
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div className={'chat-body'}>
                    <ChatList history={this.props.history}
                              newChatBnFn={this.newChatBtnClicked}
                              selectchatFn={this.selectChat}
                              chats={this.state.chats} userEmail={this.state.email}
                              selectedChatIndex={this.state.selectedChat}/>
                </div>

            </React.Fragment>
        )
    }

    selectChat = (chatIndex) => {
        console.log('Selected a chat', chatIndex);
    }

    newChatBtnClicked = () => this.setState({ newChatFormVisible: true, selectedChat: null });

    componentDidMount() {
        firebase
            .auth()
            .onAuthStateChanged(async _usr => {
                if(!_usr)
                    this.props.history.push('/login');
                else {
                    await firebase
                        .firestore()
                        .collection('chats')
                        .where('users', 'array-contains', _usr.email)
                        .onSnapshot(async res => {
                            const chats = res.docs.map(_doc => _doc.data())
                            await this.setState({
                                email: _usr.email,
                                chats: chats
                            });
                    })
                }
            })
    }
}

export default Dashboard;