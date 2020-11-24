import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from './components/layout/landing';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      message: ''
    }
    this.messagePost = this.messagePost.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  messagePost = async () => {
    console.log("fetching")
    var response = await fetch(
        "/postMessage", 
        {
          credentials: 'include',
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
            message: this.state.message
          })
        }
    );
    const data = await response.json();
    //put checking here
    console.log("data: ")
    console.log(data)
  }
  handleChange(event) {
    this.setState((state) => { 
      return({
        message: event.target.value
      })
    })

  }
  render() {
    console.log("rendering")
    console.log(this.state.message)

    // this.messagePost()
    return (
      <div>
     <input type="text" id="inputText" value = {this.state.message} name="inputText" onChange = {this.handleChange}/>
        <button onClick = { this.messagePost} id="dbButton">post message </button>
    <Router> 
      <Fragment>
        <Route exact path = '/' component = { Landing } />
      </Fragment>
    </Router>
    </div>
    )
  }

}
export default App;
