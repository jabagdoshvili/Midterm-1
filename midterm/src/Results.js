import React from "react";
import Category from "./Category";
import Login from "./login/login";
import "bootstrap/dist/css/bootstrap.min.css";


class Results extends React.Component {

    state = {
        loading: true,
        category: null,
        joke: null
    }

    async componentDidMount() {
        const url = "https://api.chucknorris.io/jokes/categories";
        const joke = "https://api.chucknorris.io/jokes/random";
        const response = await fetch(url);
        const responsejoke = await fetch(joke);
        const data = await response.json();
        const jokes = await responsejoke.json();
        this.setState({ category: data, loading:false })
        this.setState({ joke: jokes.value, loading:false })
    }



    render() {
        return <div>
            {this.state.loading || !this.state.category ? 
            <div>Loading...</div> : 


            <div className="container">
                <h1>აირჩიე ხურმობის კატეგორია</h1>

                <input type="text" placeholder="გაფილტვრა"  className="form-control"  />

                <div className="row">
                    {this.state.category.map((data) => (
                        <div className="col-lg-3 card"><a href="">{data}</a></div>
                    ))}
                </div>
                <div className="row">
                    <h2>შემთხვევით ხუმრობა</h2>
                    <div className="col-lg-12 joke-card">{this.state.joke}</div>
                </div>
                <div className="row">
                    <Login />
                </div>
            </div>
            
            }
        </div>
    }

}

export default Results;
