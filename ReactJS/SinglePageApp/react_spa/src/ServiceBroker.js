import React, { Component } from "react";
import superagent from "superagent";
 
export default class ServiceBroker extends Component {
  constructor(props){
    super(props)
    this.state = {
        urls: [{
            "getCodeAndTechTabs": "https://mpnhxztdhi.execute-api.us-west-2.amazonaws.com/default/getCodeAndTechTabs"
        }]
    }
  }  

 
  getCodeAndTechTabs(callback){
      
     // console.log(this.state.urls.getCodeAndTechTabs);
      const url="https://mpnhxztdhi.execute-api.us-west-2.amazonaws.com/default/getCodeAndTechTabs";
      superagent
        .get(url)
        .query(null)
        .set('Accept', 'application/json')
        .end((error, response) => {
            if(response && response.text){
                try{
                    var data = JSON.parse(response.text);

                    let defaultlinks= [
                        {
                           "name": "cloudopsguru"  ,
                           "link": 'http://www.cloudopsguru.com'
                        },
                        {
                            "name": "github"  ,
                            "link": 'https://www.github.com.com/shivaramani'
                         }
                    ];

                    let respo = {
                        menutabs: data.tabs,
                        defaultlinks: defaultlinks
                    }
                    callback(respo);

                }
                catch(Exception){

                    let defaultlinks = [
                        {
                           "name": "cloudopsguru"  ,
                           "link": 'http://www.cloudopsguru.com'
                        },
                        {
                            "name": "github"  ,
                            "link": 'https://www.github.com.com/shivaramani'
                         }
                    ];

                    callback(defaultlinks);
                }
            }
        })
  }

}

    