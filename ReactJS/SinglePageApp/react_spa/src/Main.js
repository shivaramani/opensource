import React, { Component } from "react";
import {
    Route,
    HashRouter
  } from "react-router-dom";

import Home from "./Home";
import Menu1 from "./Menu1";
import Contact from "./Contact";
import superagent from "superagent";
import Management from "./Management";
import { timingSafeEqual } from "crypto";
 
export default class Main extends Component {
  constructor(props){
    super(props)
    this.state = {
        menutabs: [],
        defaultLinks:[]
    }
  }  

  componentDidMount(){
      this.getCodeAndTechTabs();
  }

  getCodeAndTechTabs(){
      const url="https://mpnhxztdhi.execute-api.us-west-2.amazonaws.com/default/getCodeAndTechTabs";
      superagent
        .get(url)
        .query(null)
        .set('Accept', 'application/json')
        .end((error, response) => {
            if(response && response.text){
                try{
                    var data = JSON.parse(response.text);

                    if(data && data.tabs){
                        this.setState({
                            menutabs : data.tabs
                        })
                    }

                    this.setState({
                        defaultlinks:[
                            {
                               "name": "cloudopsguru"  ,
                               "link": 'http://www.cloudopsguru.com'
                            },
                            {
                                "name": "github"  ,
                                "link": 'https://www.github.com.com/shivaramani'
                             }
                        ]
                    })

                }
                catch(Exception){
                    this.setState({
                        defaultlinks:[
                            {
                               "name": "cloudopsguru"  ,
                               "link": 'http://www.cloudopsguru.com'
                            },
                            {
                                "name": "github"  ,
                                "link": 'https://www.github.com.com/shivaramani'
                             }
                        ]
                    })
                }
            }
        })
  }

  render() {
    return (
        <HashRouter>
            {/* <div>
                <h1><center>Single Page React Router Example</center></h1>
                <ul className="header">
                    <li><NavLink exact to="/">Home</NavLink></li>
                    <li><NavLink to="/Menu1">Menu 1</NavLink></li>
                    <li><NavLink to="/contact">Contact</NavLink></li>
                </ul>
                <div className="content">
                    <Route exact path="/" component={Home}/>
                    <Route path="/menu1" component={Menu1}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </div> */}

           <div>
               <Management Menutabs={this.state.menutabs} Defaultlinks={this.state.defaultlinks} />

                {/* <Home Menutabs={this.state.menutabs} />
                <Menu1 Menutabs={this.state.menutabs} />
                <Contact Menutabs={this.state.menutabs} /> */}

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

    