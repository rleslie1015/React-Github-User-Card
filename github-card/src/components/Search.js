import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state= {
            search: ''
        }
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault();
        this.props.changeUserName(this.state.search)
        this.setState({ search: '' })
    }
    render(){
        return (
        <form onSubmit={this.handleSubmit}>
            <input type="text"
                name="search"
                placeholder="search"
                value={this.state.search}
                onChange={this.handleChange}
                />
                <button> Search for a user </button>
        </form>
        )
    }
}
export default Search;