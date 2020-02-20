import React, {Component} from 'react';

import './ChatList.css'

const firebase = require('firebase')

class ChatList extends Component {
    render() {
        const message = this.props.chats.map((_chat, index) => {
            return <li className={'collection-item avatar'} id={'green-text'} onClick={() => this.selectChat(index)} key={index}>
                <div className={'circle'}>
                                <span id={'icon'}>
                                    <h5>{_chat.users.filter(_user => _user !== this.props.userEmail)[0].split('')[0].toUpperCase()}</h5>
                                </span>
                </div>
                <span className="title" id={'title'}>{_chat.users.filter(_user => _user !== this.props.userEmail)[0]}</span>
                <p>{_chat.messages[_chat.messages.length - 1].message.substr(0, 30)}</p>
            </li>
        })
        if(this.props.chats.length > 0) {
            return(
                <div className={'chat-list'} id={'chat-list'}>
                    <a className="waves-effect waves-light btn" id={'btn-one'} onClick={this.newChat}>new chat</a>
                    <ul className={'collection'}>
                        {message}
                    </ul>
                    <a className="waves-effect waves-light btn" id={'btn-two'} onClick={this.signOut}><i className="material-icons right">power_settings_new</i>Sign Out</a>
                </div>
            )
        } else {
            return (
                <div className={'chat-list'}>
                    <a className="waves-effect waves-light btn" id={'btn'} onClick={this.newChat}>new chat</a>
                    <ul className={'collection'}>
                        {null}
                    </ul>
                </div>
            )
        }
    }

    newChat = () => {
        console.log('New chat click')
    }
    selectChat = (index) => {
        console.log('select chat', index)
    }
    signOut = () => firebase.auth().signOut()

}

export default ChatList;