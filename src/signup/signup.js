import React, {Component} from 'react';

import Navbar from "../navbar/Navbar";
import {Link} from 'react-router-dom'
import './Signup.css'

const firebase = require('firebase');


class Signup extends Component {
    constructor() {
        super()
        this.state = {
            email: null,
            password: null,
            confirmPassword: null,
            signupError: ''
        }

    }
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <div>
                    <form onSubmit={(e) => this.submitSignup(e)}>
                        <div className={' card-panel white'} id={'form-card'}>
                            <h4>Sign Up!</h4>
                            <div className={'row'}>
                                <div className={'col s12'}>
                                    <div className={'row'}>
                                        <div className="input-field col s12">
                                            <input id="signup-email-input" type="email"
                                                   className="validate" onChange={(e) => this.userTyping('email', e)} />
                                            <label htmlFor="signup-email-input">Email</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col s12'}>
                                    <div className={'row'}>
                                        <div className="input-field col s12">
                                            <input id="signup-password-input" type="password"
                                                   className="validate" onChange={(e) => this.userTyping('password', e)} />
                                            <label htmlFor="signup-password-input">Create A Password</label>
                                        </div>
                                    </div>
                                </div>
                                <div className={'col s12'}>
                                    <div className={'row'}>
                                        <div className="input-field col s12">
                                            <input id="signup-confirm-password-input" type="password"
                                                   className="validate" onChange={(e) => this.userTyping('passwordConfirmation', e)} />
                                            <label htmlFor="signup-confirm-password-input">Confirm Your Password</label>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button id="submit" className={'btn'} type="submit">Sign Up</button>
                            {
                                this.state.signupError ?
                                    <p className={'error-text'}>
                                        {this.state.signupError}
                                    </p> :
                                    null
                            }
                            <div className={'already'}>
                                <h6>Already have an account?</h6>
                                <Link to={'/login'}><h6>Log In</h6></Link>
                            </div>
                        </div>
                    </form>
                </div>
            </React.Fragment>
        )
    }
    formIsValid = () => this.state.password === this.state.confirmPassword;

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
            case 'passwordConfirmation':
                this.setState({
                    confirmPassword: e.target.value
                })
                break;
            default:
                break;
        }
    }

    //To firebase
    submitSignup = (e) => {
        e.preventDefault()
        if(!this.formIsValid()) {
            this.setState({
                signupError: 'Passwords do not match!'
            });
            return
        }

        firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then(authRes => {
                const userObj = {
                    email: authRes.user.email
                };
                firebase
                    .firestore()
                    .collection('users')
                    .doc(this.state.email)
                    .set(userObj)
                    .then(() => {
                        this.props.history.push('/dashboard')
                    }, dbError => {
                        console.log(dbError);
                        this.setState({ signupError: 'Failed to add user' })
                    })
            }, authError => {
                console.log(authError);
                this.setState({ signupError: 'Failed to add user' })
            })
    }
}

export default Signup;