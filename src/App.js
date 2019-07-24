import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Signup from './components/Signup/Signup';
// import Logo from './components/Logo/Logo';

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
                <Signin />
                <Signup />
            </div>
        )
    }
}
export default App;
