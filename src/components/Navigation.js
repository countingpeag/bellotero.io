import React, { Component } from 'react';
import './Navigation.css';
import logo from './../bellotero.png';

//import { menu } from '../app.json';

class Navigation extends Component {
    /*constructor() {
        super();
        this.state = {
            menu
        }
    }*/

    render() {
        /*console.log("antes de", menu);
        const menu = this.state.menu.map((one, i) => {
            return ( 
                <div>
                
                </div>
            )
        });*/
        return (
            <div>
                <header className="App-header">
                    <div className="topnav">
                        <img src={logo} className="App-logo"/>
                        <div className="topnav-right menu">
                            <a> Home </a>
                            <a> Solutions </a>
                            <a> Stories </a>
                            <a> Partners </a>
                            <a> About </a>
                            <a> Blog </a>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Navigation;