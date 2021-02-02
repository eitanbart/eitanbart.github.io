import React from 'react';
import './SearchBar.css'
export class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.handleTermChange=this.handleTermChange.bind(this);
        this.handleSearch=this.handleSearch.bind(this);
        this.state={};
    }
    handleTermChange({target}){
        this.setState({term:target.value})
    }

    handleSearch(e){
        this.props.onSearch(this.state.term);
    }

    render(){
        return (
            <div className="SearchBar">
                <input onChange={this.handleTermChange} placeholder="Enter A Song, Album, or Artist" />
                <button onClick={this.handleSearch} className="SearchButton">SEARCH</button>
            </div>
        )
    }

}