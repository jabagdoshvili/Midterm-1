import React from "react";


class Search extends React.Component {

    

    render() {
        return(
            <div className="container">
                <input onChange={this.props.handleInput} type="text" placeholder="FILTER"  className="form-control" />
            </div>
        )
    }

}

export default Search;