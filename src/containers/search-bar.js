// implement as a container because search bar need to act with redux for api calls

import React, {Component} from 'react';

export default class SearchBar extends Component {
    constructor(props) {
        super(props);
        
        this.state = {term: ''};
        
        this.onInputChange = this.onInputChange.bind(this);
    }
    
    onInputChange(event) {
        console.log(event.target.value);
        this.setState({term: event.target.value});
    }
    
    render() {
        return(
            <form className="input-group">
                <input
                    className="form-control" 
                    placeholder="Give a five day forecast in your favoriate cities"
                    value={this.state.term}                 
                    onChange={this.onInputChange} />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Submit</button>
                </span>
            </form>
        );
    }
}