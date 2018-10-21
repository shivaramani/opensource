import React, { Component } from "react";
import {
    Route,
    HashRouter
  } from "react-router-dom";

import Home from "./Home";import Menu1 from "./Menu1";
import Contact from "./Contact";
import superagent from "superagent";
import Management from "./Management";
import ServiceBroker from "./ServiceBroker";
import { timingSafeEqual } from "crypto";
 
export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
        menutabs: [],
        defaultLinks:[]
    }
    this.ServiceBroker = new ServiceBroker();
    this.updateState = this.updateState.bind(this);
  }  

  updateState = function(response){
      if(response)
      {
        this.setState({
            menutabs: response.menutabs,
            defaultLinks: response.defaultLinks
          })
      }
      
  }

  componentDidMount(){
      this.ServiceBroker.getCodeAndTechTabs(this.updateState);
  }

  render() {
    return (
        <HashRouter>
           <div>
               <Management Menutabs={this.state.menutabs} Defaultlinks={this.state.defaultlinks} />

                 <Route path="/" render={(props) => (
                    <Home {...props} />
                )} />
                <Route path="/menu1" render={(props) => (
                    <Menu1 {...props} MenuTabs={this.state.menutabs} DefaultLinks = {this.state.defaultlinks} />
                )} />

                <Route path="/contact" render={(props) => (
                    <Contact {...props} />
                )} />
            </div>
      </HashRouter>
    );
  }
}

    