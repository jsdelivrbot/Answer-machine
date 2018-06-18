import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import Answer from "./components/Answer";
import _ from 'lodash'

class App extends React.Component {
    constructor() {
      super()
      this.state = {
          text: "",
          body: null
      }
    }

    textChangeEvent = (event) => {
        const value = event.target.value;
        this.setState({
            text: value 
        }, () => {
          const {text} = this.state
          this.getResults(text)
        })
    }

    getResults = _.debounce((searchTerm) => {
        fetch(`http://api.duckduckgo.com/?q=${searchTerm}&format=json`, {
            mode: "cors"
        })
        .then(data => data.json())
        .then(body => {
            console.log(body);
            this.setState({
                "body": body
            })
        })
        .catch(error => {
            console.log("There was an error");
            this.setState({
                "body": null
            })
        })
    }, 750)

    render() {
        return (
            <div>
                <h1 className="title">Answer machine</h1>
                <SearchBar textChangeEvent={this.textChangeEvent} text={this.state.text}/>
                {this.state.body !== null && <Answer answer={this.state.body}/>}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));

