import React from "react";
import ReactDOM from "react-dom";
import SearchBar from "./components/SearchBar";
import Answer from "./components/Answer";

class App extends React.Component {
    state = {
        text: "",
        body: null
    }

    textChangeEvent = (event) => {
        const value = event.target.value;
        this.setState({
            text: value 
        })

        this.getResults(event)
    }

    getResults = (event) => {
        fetch(`http://api.duckduckgo.com/?q=${event.target.value}&format=json`, {
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
    }

    render() {
        return (
            <div>
                <h1>Answer machine</h1>
                <SearchBar textChangeEvent={this.textChangeEvent} text={this.state.text}/>
                {this.state.body !== null && <Answer answer={this.state.body}/>}
            </div>
        );
    }
}

ReactDOM.render(<App/>, document.querySelector(".container"));

