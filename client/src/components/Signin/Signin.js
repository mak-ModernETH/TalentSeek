import React from 'react';
import './Signin.css';
import {
    // Button,
    // Modal,
    // ModalHeader,
    // ModalBody,
    // Form,
    // FormGroup,
    // Label,
    // Input,
    // NavLink,
    Alert
} from 'reactstrap';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: '',
            err_email: '',
            err_pass: ''
        }
    }
    onEmailChange = (event) => {
        this.setState({ signInEmail: event.target.value})
    }
    onPasswordChange = (event) => {
        this.setState({ signInPassword: event.target.value})
    }
    onSubmitSignIn = () => {
        fetch('http://localhost:3000/api/users/login', {
            method: 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
        
        //
        .then(response => response.json())
        
                .then(data => {
                    if (data.success === true) {
                        this.props.onRouteChange('home');
                    }
                    
                    
                    //handling alert message for invalid input
                    data.email ? (
                        this.setState({ err_email: data.email })
                    ) : this.setState({ err_email: data.emailnotfound })
                    
                    data.password  ? (
                        this.setState({ err_pass: data.password })
                    ) : this.setState({ err_pass: data.passwordincorrect })
                    
                    
                    
                })
                
        /*/
        .then(response => {
            
            if(response.status === 200){
                // this.setState({err_email: response.status})
                this.props.onRouteChange('home');
            }
        })
            
        //*/
    }
    render() {
        
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure tc">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Sign In</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input 
                                className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100 required" 
                                type="email"
                                placeholder="email@moderneth.com" 
                                name="email-address" 
                                id="email-address"
                                onChange={this.onEmailChange}
                                />
                                {this.state.err_email ? (
                                    <label className="alert pa0 ma0 lh-copy f6 ">{this.state.err_email}</label>
                                ) : null}
                            </div>
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password">Password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100" 
                                type="password" 
                                name="password" 
                                id="password"
                                onChange={this.onPasswordChange}
                                />
                                {this.state.err_pass ? (
                                    <label className=" alert pa0 ma0 lh-copy f6 ">{this.state.err_pass}</label>
                                ) : null}
                            </div>
                            <div>
                                
                            </div>
                            
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit" value="signin" />
                        </div>
                        <div className="lh-copy mt3">
                            {/* <p onClick={() => onRouteChange('register')} className="f6 link dim black db pointer">Register</p> */}
                            <a href="#0" className="f6 link dim black db">Forgot your password?</a>
                        </div>
                    </div>
                </main>
            </article>

        )
    }
}

export default Signin;