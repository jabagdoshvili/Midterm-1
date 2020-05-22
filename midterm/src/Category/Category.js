import React from "react";
import Search from "../Search/Search";
import Jokes from "../Jokes/Jokes";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";





class Category extends React.Component {

    state = {
        loading: true,
        category: [],
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

        const filteredCategory = this.state.category.filter((data) => {
            return data.toLowerCase().includes(this.state.search.toLowerCase())
        })

        return <div>
            {this.state.loading || !this.state.category ? 

            <div className="loading">Loading...</div> : 

            <div className="container cards-container">
                <h1>choose category</h1>
                <Search handleInput={this.handleInput}/>
                <div className="row card-list">
                    {filteredCategory.map((data) => (
                        <div className="card"><Link to="/Login"><span>{data}</span></Link></div>
                    ))}
                </div>
            </div>
            
            }

        </div>
    }

}

export default Category;