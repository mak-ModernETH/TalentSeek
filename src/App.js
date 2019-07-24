import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
<<<<<<< HEAD
import Particles from 'react-particles-js';
import Home from './components/Home/Home'
// import Logo from './components/Logo/Logo';
=======
import Logo from './components/Logo/Logo';
import Landing from './components/Landing/Landing';
>>>>>>> c61d1c186da2f02d5e436eed75e31a83239c1b1f

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
                <Navigation />
<<<<<<< HEAD
                <Home />
=======
                <Logo />
                {/* <Landing /> */}
                <Signin />
>>>>>>> c61d1c186da2f02d5e436eed75e31a83239c1b1f
                
            </div>
        )
    }
}
export default App;
