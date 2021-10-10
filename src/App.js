import React, { Component } from 'react';
import Uname from './components/Uname';
import Chat from './components/chat';

import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

class App extends React.Component {
  state = {
    uname : "",
    email : "",
    
  }

  setUserNameAndEmail = (uname,email) => {
    // 
      this.setState({
        uname : uname,
        email : email

      });
    
  }

  render() { 
    return(
      <Router>
        <Route path = "/" exact  >
          <Uname  setUserNameAndEmail = { this.setUserNameAndEmail}>

          </Uname>

        </Route>
        <Route path = "/chatbot">
          <Chat >

          </Chat>
        </Route>
      </Router>

    );
  }
}
 
export default App;