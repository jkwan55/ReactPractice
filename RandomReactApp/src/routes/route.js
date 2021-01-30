import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import './route.css';
import Home from './Home.js';
import '../App.css';
import Add from  './add.js'

export default function ChangePage(){
    return(
        <Router>
            <div>
                <ul>
                    <nav className='nav'>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/add'>Add</Link>
                        </li>
                        <li>
                            <Link to='/dashboard'>Dashboard</Link>
                        </li>
                        <div className='nav-right'>
                            <li>
                                <Link to='./login'>Log In</Link>
                            </li>
                        </div>
                    </nav>
                </ul>
                <hr />
                <div>
                <Switch>
                    <Route exact path='/'>
                        <p className ='ws'>{}</p>
                        <Home />
                    </Route>
                    <Route exact path='/add'>
                        <Add />
                    </Route>
                    <Route exact path='/dashboard'>
                        <Dashboard />
                    </Route>
                    <Route exact path='/login'>
                        <Login />
                    </Route>
                </Switch>
                </div>
            </div>
        </Router>
    )
}

class Dashboard extends React.Component{
    render(){
        return <h1>Dashboard!</h1>
    }
}

class Login extends React.Component{
    render(){
        return <h1>Login page</h1>
    }
}