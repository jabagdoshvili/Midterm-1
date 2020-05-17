import React from "react";
import Category from "../Category/Category";
import Jokes from "../Jokes/Jokes";
import Login from "../login/login";
import Search from "../Search/Search";
import "bootstrap/dist/css/bootstrap.min.css";


class Results extends React.Component {

    state = {
        loading: true,
        category: "",
        joke: "",
        search: ""
    }

    async componentDidMount() {
        const url = "https://api.chucknorris.io/jokes/categories";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ category: data, loading:false })
    }

    handleInput = (e) => {
        console.log(e.target.value)
        this.setState({ search: e.target.value })
    }

    render() {

        // let filteredCategory = this.state.category.filter((data) => {
        //     return data.toLowerCse().includes(this.state.search.toLowerCase())
        // })

        return <div>
            {this.state.loading || !this.state.category ? 

            <div className="loading">Loading...</div> : 

            <div className="container cards-container">
                <h1>choose category</h1>
                <Search handleInput={this.handleInput}/>
                <div className="row card-list">
                    {this.state.category.map((data) => (
                        <div className="card"><a href="">{data}</a></div>
                    ))}
                </div>
            </div>
            
            }

        </div>
    }

}

export default Results;
