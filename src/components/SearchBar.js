import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input placeholder="Search for..." value={this.props.text} onChange={this.props.textChangeEvent}/>
        );
    }
}

export default SearchBar;