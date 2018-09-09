import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
  } from "react-router-dom";

import Home from "./Home";
import Menu1 from "./Menu1";
import Contact from "./Contact";
 
export default class Management extends Component {
  constructor(props){
    super(props)
  }  

  
  render() {
    return (
        <HashRouter>
            <div>
                <h1><center>Single Page React Router Example</center></h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/Menu1">Menu 1</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
            </div>
      </HashRouter>
    );
  }
}
 