import React, { Component } from 'react';
import "./chat.css";
class Chat extends React.Component {

    state ={
        displayMessage : "",
        
        questions : 
            {
                q : "Q.THE BEST SORTING ALGORITHM AMONG FOLLOWING ?",
                o : [
                    {
                        a : "Bubble Sort",
                        s : false 
                    },
                    {
                        a : "Quick Sort",
                        s : true

                    },
                    {
                        a : "Selection Sort",
                        s : false

                    },
                    {
                        a : "Insertion Sort",
                        s : false

                    }
                ]

            }
           
        
    };

    wrongAnswer = () => {
        this.setState({
            ...this.state,
            displayMessage : "OOPS TRY NEXT TIME"

        });

    }
    
    rightAnswer = () => {
        this.setState({
            ...this.state,
            displayMessage : "YOU GOT IT RIGHT"

        });

    }

    render() { 
        return(
            <div className = "chat">
                <h1 >{this.state.questions.q}</h1>
                <h3 onClick = {() => this.wrongAnswer()}>{this.state.questions.o[0].a}</h3>
                <h3 onClick = {() => this.rightAnswer()}>{this.state.questions.o[1].a}</h3>
                <h3 onClick = {() => this.wrongAnswer()}>{this.state.questions.o[2].a}</h3>
                <h3 onClick = {() => this.wrongAnswer()}>{this.state.questions.o[3].a}</h3>
                <p>{this.state.displayMessage}</p>
            </div>
        );
    }
}
 
export default Chat;