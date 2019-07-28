import React from 'react';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            password2: '',
            name: '',

            err_email: '',
            err_pass: '',
            err_pass2: '',
            err_name: ''
        }
    }
    onNameChange = (event) => {
        this.setState({ name: event.target.value })
    }
    onEmailChange = (event) => {
        this.setState({ email: event.target.value })
    }
    onPasswordChange = (event) => {
        this.setState({ password: event.target.value })
    }
    onPasswordChange2 = (event) => {
        this.setState({ password2: event.target.value })
    }
    onSubmitSignIn = () => {
        fetch('http://localhost:3000/api/users/register', {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password,
                password2: this.state.password2,
                name: this.state.name
            })
        })
            .then(response => response.json())
            .then(user => {
                if (user._id) {
                    this.props.loadUser(user)
                    this.props.onRouteChange('home');
                }
                //handling alert message for invalid input
               
                this.setState({ err_name: user.name })
                this.setState({ err_email: user.email })
                
                this.setState({ err_pass: user.password })
               
                this.setState({ err_pass2: user.password2 })

            })
    }

    render() {
        return (
            <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
                <main className="pa4 black-80">
                    <div className="measure tc">
                        <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
                            <legend className="f1 fw6 ph0 mh0">Register</legend>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Full Name</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-white hover-black w-100"
                                    type="text"
                                    name="name"
                                    id="name"
                                    onChange={this.onNameChange}
                                />
                                {this.state.err_name ? (
                                    <label className=" alert pa0 ma0 lh-copy f6 ">{this.state.err_name}</label>
                                ) : null}
                            </div>
                            <div className="mt3">
                                <label className="db fw6 lh-copy f6" htmlFor="email-address">Email</label>
                                <input className="pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100"
                                    type="email"
                                    name="email-address"
                                    id="email-address"
                                    onChange={this.onEmailChange}
                                />
                                {this.state.err_email ? (
                                    <label className=" alert pa0 ma0 lh-copy f6 ">{this.state.err_email}</label>
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
                            <div className="mv3">
                                <label className="db fw6 lh-copy f6" htmlFor="password2">confirm password</label>
                                <input className="b pa2 input-reset ba bg-transparent hover-bg-dark-gray hover-white w-100"
                                    type="password"
                                    name="password2"
                                    id="password2"
                                    onChange={this.onPasswordChange2}
                                />
                                {this.state.err_pass2 ? (
                                    <label className=" alert pa0 ma0 lh-copy f6 ">{this.state.err_pass2}</label>
                                ) : null}
                            </div>
                            
                            {/* <label className="pa0 ma0 lh-copy f6 pointer"><input type="checkbox" /> Remember me</label> */}
                        </fieldset>
                        <div className="">
                            <input
                                onClick={this.onSubmitSignIn}
                                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                                type="submit" value="Register" />
                        </div>
                    </div>
                </main>
            </article>
        )
    }
}

export default Register;