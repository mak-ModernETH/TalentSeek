import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import Landing from './components/Landing/Landing';

const particlesOptions = {
        particles: {
            line_linked: {
                shadow: {
                    enable: true,
                    color: "#3CA9D1",
                    blur: 5
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
    render() {
        return(
            <div className="App">
                <Particles
                    params={particlesOptions}
                 />
                <Navigation />
                <Logo />
                {/* <Landing /> */}
                <Signin />
                
            </div>
        )
    }
}
export default App;
