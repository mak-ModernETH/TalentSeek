import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Logo from './components/Logo/Logo';
import Landing from './components/Landing/Landing';

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
                <Logo />
                {/* <Landing /> */}
                <Signin />
                
            </div>
        )
    }
}
export default App;
