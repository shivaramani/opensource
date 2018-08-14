   import React, { Component } from "react";
import { render } from 'react-dom';
import superagent from 'superagent'; 

export default class Menu1 extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      tabs: [],
      links:[
          {
             "name": "cloudopsguru"  ,
             "link": 'http://www.cloudopsguru.com'
          },
          {
              "name": "github"  ,
              "link": 'https://www.github.com.com/shivaramani'
           }
      ]
    }
  }

  componentWillReceiveProps(nextProps){
    this.setState({
      tabs: nextProps.MenuTabs,
      links: nextProps.DefaultLinks
    })
  }

  componentWillMount(){
    this.setState({
      tabs: this.props.MenuTabs,
      links: this.props.DefaultLinks
    })
  }

  render() {

    var tabs = this.props.MenuTabs;

    if(tabs.length == 0){
      return(
        <div>
          <div>
            <h2>Menu 1</h2>
            <p>Contents from Menu1</p>
            <ol>
              <li>List item from menu 1</li>
              <li>More items from menu 1</li>
              <li>More item</li>
            </ol>
          </div>
        </div>            
      );
    }

    return (
      <div>
        <div>
          <h2>Menu 1</h2>
          {
            
          }
        </div>

        <div>
          <div className="blankRow"></div>
          <div className="div-table">
            <div className="div-table-row">
                <div className="div-table-col">Menu</div>
                <div className="div-table-col">Type</div>
                <div className="div-table-col">Link</div>
            </div>
            <div className="blankRow"></div>
            <div>
                {                  
                  tabs.map((mnu) => {
                      const blank = ""
                      return(
                          <div className="div-table-row">
                              <div className="div-table-col" value={mnu.menu}>{mnu.menu}</div>
                              <div className="div-table-col" value={mnu.type}>{mnu.type}</div>
                                
                                {
                                  (
                                    typeof mnu.link !== 'undefined') && (
                                      <div className="div-table-col" onClick={() => { window.open(mnu.link, "_blank"); return false; } } value={mnu.link}><span className="cursorHand">click here </span></div>
                                  )
                                }
                                {
                                  (
                                    !mnu.link ) && (
                                      <div className="div-table-col">{mnu.link}</div>
                                  )
                                }
                          </div>
                      )
                    }
                  )
                }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
 