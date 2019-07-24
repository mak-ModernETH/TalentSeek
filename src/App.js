import React, {Component} from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Particles from 'react-particles-js';
// import Logo from './components/Logo/Logo';

const particleOptions ={
                    particles: {
                     number:{

                        value:80,
                        density:{
                            enable:true,
                            value_area:800
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

            <Particles className="particles" 
              params={particleOptions}
             
            />
                <Navigation />
                <Signin />
                
            </div>
        )
    }
}
export default App;
