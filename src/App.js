import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';
import Home from './components/Home/Home';   
import Logo from './components/Logo/Logo';

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
            route: 'signin'
        }
    }
    onRouteChange = (route) =>{
        this.setState({route: route})
    }
    render() {
        return (
            <div className="App">

                <Particles className="particles"
                    params={particleOptions}
                />
                <Navigation onRouteChange={this.onRouteChange}/>
                
                {this.state.route === 'home'
                    ? <div>
                        <Logo />
                        <Register />
                    </div> 
                :  (
                    this.state.route === 'signin'
                        ? <Signin onRouteChange={this.onRouteChange} />
                        : <Register onRouteChange={this.onRouteChange} />
                    )
                    
                }
            </div>
        )
    }
}
export default App;
