import React, { Component } from 'react';
import "./Uname.css";
import {Link} from "react-router-dom";
class Uname extends React.Component {
    state = {
        uname : "",
        email : "",

    };

    onUnameChangeHandler = (e) =>{
       e.preventDefault();
       this.setState({
           ...this.state,
           uname : e.target.value
       });
    }
    
    onEmailChangeHandler = (e) =>{
        e.preventDefault();
        this.setState({
            ...this.state,
            email : e.target.value
        });
     }

     onSubmitHandler = () =>{
         
      this.props.setUserNameAndEmail(this.state.uname,this.state.email);

     }

    render() { 
        return <div className = "uname">
            <label htmlFor="">Enter your UserName</label>
            <input onChange = {(e) => this.onUnameChangeHandler(e)} placeholder = "USER NAME"></input>

            
            <label htmlFor="">Enter your EMAIL</label>
            <input onChange = {(e) => this.onEmailChangeHandler(e)} placeholder = "EMAIL"></input>
            <Link to = "/chatbot">
            <button  onClick = {() => this.onSubmitHandler()}>Submit</button>
            </Link>

        </div>;
    }
}
 
export default Uname;