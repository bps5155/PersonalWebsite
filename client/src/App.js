import React, { Fragment } from 'react';
import {BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Landing from './components/layout/landing';
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      sampledata: "sample"
    }
    this.checkLoggedInFetch = this.checkLoggedInFetch.bind(this)
  }
  checkLoggedInFetch = async () => {
    console.log("fetching")
    var response = await fetch(
        "http://localhost:5000/test", 
        {
          credentials: 'include',
          method: "post",
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          //make sure to serialize your JSON body
          body: JSON.stringify({
          })
        }
    );
    const data = await response.json();
    //put checking here
    console.log(data)
  }
  render() {
    console.log("rendering")
    this.checkLoggedInFetch()
    return (
      <div>
        hey
      </div>
    // <Router> 
    //   <Fragment>
    //     <Route exact path = '/' component = { Landing } />
    //   </Fragment>
    // </Router>
    )
  }

}
export default App;
