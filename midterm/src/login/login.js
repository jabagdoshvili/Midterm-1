import React from "react";


class Login extends React.Component {


    render() {
        return(
            <div className="container">
                <form>
                    <h1>რეგისტრაცია</h1>
                    <input type="text" 
                        placeholder="ელ-ფოსტა"
                        />
                    <input type="password" 
                        placeholder="პაროლი"
                        />
                    <button>რეგისტრაცია</button>
                </form>
            </div>
        )
    }

}

export default Login;