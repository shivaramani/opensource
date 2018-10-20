import React, { Component } from "react";
import { Route } from 'react-router-dom'
import {withRouter} from 'react-router-dom';
import  { Redirect } from 'react-router-dom'

class Contact extends Component {

  constructor(props){
    super(props);
    this.menuNavigateOnClick = this.menuNavigateOnClick.bind(this);
    this.menuNavigateRedirectOnClick = this.menuNavigateRedirectOnClick.bind(this);
  }

  // This does not work
  menuNavigateRedirectOnClick = () => {
      return <Redirect to='/Menu1?productId=1' />    
  }

  menuNavigateOnClick = function(e){
    this.props.history.push('/Menu1?productId=1')
  }

  render() {
    return (
      <div>
        <h2>Contact Me?</h2>
        <p>Follow me at <a href="javascript:window.open('http://www.codeandtech.com');">codeandtech</a>
        </p>
          <div>
              <Route render={({ history}) => (
                  <button
                    type='button'
                    onClick={() => { history.push('/Menu1') }}
                  >
                    Menu History anonymous
                  </button>
                )} />
               &nbsp;                
                <Route render={({ history}) => (
                  <button
                    type='button'
                    onClick={this.menuNavigateOnClick}>
                    Menu History on Click
                  </button>
                )} />
                <br/> <br/> Not working <br/>
                <Route render={({ history}) => (
                  <button
                  type='button'
                  onClick={this.menuNavigateRedirectOnClick}>
                  Menu Redirect 
                  </button>
                )} />
               &nbsp;   
          </div>
      </div>
    );
  }
}
 
export default withRouter(Contact);