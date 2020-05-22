import React from "react";


class Jokes extends React.Component {

    state = {
        joke: null,
        icon: ""
    }

    async componentDidMount() {

        const joke = "https://api.chucknorris.io/jokes/random";
        const responsejoke = await fetch(joke);
        const jokes = await responsejoke.json();
        this.setState({ joke: jokes.value})
        this.setState({ icon: jokes.icon_url})
    }


    render() {
        return <div>

            <div className="container cards-container">
                <div className="row joke-list">
                    <div className="card">
                        <div className="card-icon">
                            <img src={this.state.icon} />
                        </div>
                        <p>{this.state.joke}</p>
                    </div>
                </div>
            </div>
            
            

        </div>
    }

}

export default Jokes;