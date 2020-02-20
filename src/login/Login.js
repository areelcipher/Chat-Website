import React, {Component} from 'react'

import {Link} from 'react-router-dom'
import Navbar from "../navbar/Navbar";
import './Login.css'

const firebase = require('firebase')

class Login extends Component {
    constructor() {
        super()
        this.state = {
            email: null,
            password: null,
            loginError: ''
        }
    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <form onSubmit={(e) => this.submitLogin(e)}>
                        <div className={'card-panel white'} id={'form-card'}>
                            <h4>Sign In!</h4>
                            <div className={'row'}>
                                <div className={'col s12'}>
                                    <div className={'row'}>
                                        <div className="input-field col s12">
                                            <input id="login-email-input" type="email"
                                                   className="validate" onChange={(e) => this.userTyping('email', e)} />
                                            <label htmlFor="login-email-input">Enter Your Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col s12'}>
                                    <div className={'row'}>
                                        <div className="input-field col s12">
                                            <input id="login-password-input" type="password"
                                                   className="validate" onChange={(e) => this.userTyping('password', e)} />
                                            <label htmlFor="login-password-input">Enter Your Password</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button id="submit" className={'btn'} type="submit">Sign In</button>
                            {
                                this.state.loginError ?
                                    <p className={'error-text'}>
                                        Incorrect Login Information
                                    </p> :
                                    null
                            }
                            <div className={'already'}>
                                <h6>Don't have an account?</h6>
                                <Link to={'/signup'}><h6>Sign Up</h6></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
    userTyping = (type, e) => {
        switch (type) {
            case 'email':
                this.setState({
                    email: e.target.value
                })
                break;
            case 'password':
                this.setState({
                    password: e.target.value
                })
                break;
            default:
                break;
        }
    }

    // To firebase
    submitLogin = (e) => {
        e.preventDefault();

        firebase
            .auth()
            .signInWithEmailAndPassword(this.state.email, this.state.password)
            .then(() => {
                this.props.history.push('/dashboard')
            }, err => {
                this.setState({loginError: 'Server Error'})
                console.log(err)
            })
    }
}

export default Login;