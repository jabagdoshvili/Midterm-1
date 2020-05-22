import React from "react";
import { Link } from "react-router-dom";


class Login extends React.Component {

    constructor() {
        super();
        this.state = {
            mail: localStorage.getItem("mail") || ""
        };
    }

    onChange = event => {
        const mail = event.target.value;
        localStorage.setItem("mail", mail);
        this.setState({ mail });
    };

    render() {
        return(
            <div className="container login-section">
                <h1>Login First</h1>
                <input value={this.state.mail} onChange={this.onChange} type="mail" placeholder="Mail" />;
                <button className="log-button"><Link to="/Jokes">LOG IN</Link></button>
            </div>
        )
    }

}

export default Login;