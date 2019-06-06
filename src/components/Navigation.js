import React, { Component } from 'react';
import './Navigation.css';
import logo from './../bellotero.png';

//import { menu } from '../app.json';

class Navigation extends Component {
   
    render() {
        return (
            <div>
                <header className="App-header">
                    <div className="topnav">
                        <img src={logo} alt="text" className="App-logo"/>
                        <div className="topnav-right menu">
                            <a href="www.google.com"> Home </a>
                            <a href="www.google.com"> Solutions </a>
                            <a href="www.google.com"> Stories </a>
                            <a href="www.google.com"> Partners </a>
                            <a href="www.google.com"> About </a>
                            <a href="www.google.com"> Blog </a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navigation;