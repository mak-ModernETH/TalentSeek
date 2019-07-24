import React, {Component} from 'react';
import Particles from 'react-particles-js';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Particles from 'react-particles-js';
import Home from './components/Home/Home'
 import Logo from './components/Logo/Logo';

<<<<<<< HEAD
// const particlesOptions = {
//         particles: {
//             line_linked: {
//                 shadow: {
//                     enable: true,
//                     color: "#3CA9D1",
//                     blur: 5
//                 }
//             }
//         }
// }
=======
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
>>>>>>> fc7a3dd6de414e9c4c6ec8f9db758d271ae8efae
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
<<<<<<< HEAD
                {/* <Particles
                    params={particlesOptions}
                 /> */}
=======

            <Particles className="particles" 
              params={particleOptions}
             
            />
>>>>>>> fc7a3dd6de414e9c4c6ec8f9db758d271ae8efae
                <Navigation />
                <Logo />
                <Signin />
                
            </div>
        )
    }
}
export default App;
