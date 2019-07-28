import React, { Component } from 'react';
import './App.css';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Particles from 'react-particles-js';
import Logo from './components/Logo/Logo';
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
/*//////////////////////////////////////////
if (localStorage.jwtToken) {
    setAuthToken(localStorage.jwtToken);
    const decoded = jwt_decode(localStorage.jwtToken);
    store.dispatch(setCurrentUser(decoded));

    const currentTime = Date.now() / 1000;
    if (decoded.exp < currentTime) {
        store.dispatch(logoutUser());
        window.location.href = '/login'
    }
}
class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <div>
                        <Navbar />
                        <Route exact path="/" component={Home} />
                        <div className="container">
                            <Route exact path="/register" component={Register} />
                            <Route exact path="/login" component={Login} />
                        </div>
                    </div>
                </Router>
            </Provider>
        );
    }
}

export default App;
/*//////////////////////////////////////////
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
                        <Logo />
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
