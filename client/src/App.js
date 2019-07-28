




import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';

import Dashboard from './components/Dashboard/Dashboard';

const particleOptions = {
    particles: {
        number: {
            value: 80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
}
class App extends Component {
    constructor() {
        super()
        this.state = {
            input: '',
            route: 'signin',
            isSignedIn: false,
            user: {
                id: '',
                name: '',
                email: '',
                joined: ''
            }
        }
    }
    loadUser = (data) => {
        this.setState({user: {
            id: data.id,
            name: data.name,
            email: data.email,
            joined: data.joined
        }})
    }
    // componentDidMount() {
    //     fetch('http://localhost:3001/')
    //     .then(response => response.json())
    //     .then(console.log)
    // }
    onRouteChange = (route) =>{
        if(route === 'signin'){
            this.setState({isSignedIn: false})
        }else if(route === 'home') {
            this.setState({isSignedIn: true})
        }
        this.setState({route: route})
    }
    render() {
        return (
            <div className="App">

                <Particles className="particles"
                    params={particleOptions}
                />
                <Navigation isSignedIn={this.state.isSignedIn} onRouteChange={this.onRouteChange}/>
                {this.state.route === 'home'
                    ? <div>
                        {/* <Logo /> */}
                        <Dashboard />
                    </div> 
                :  (
                    this.state.route === 'signin'
                        ? <Signin onRouteChange={this.onRouteChange} />
                        : <Register loadUser={this.loadUser} onRouteChange={this.onRouteChange} />
                    )
                    
                }
            </div>
        )
    }
}
export default App;

//*/
