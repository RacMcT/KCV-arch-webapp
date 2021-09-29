import React, { Component } from "react";
import callUserInfoAPI from "../apis/callUserInfo"

class Users extends Component {
    constructor(props) {
        super(props);
        this.state = { userInfo: [] };
    }

// put the fetch call outside the component and only put in through props via either redux or take it outside a componet
// can create an api folder with all the api's to the backend- will still be a fetch, but the component itself doesn't have the fetch()
// comoponent- everything they need to display/know comes from their props

    
        callUserInfoAPI
    //     fetch("http://localhost:8080/users")
    //         .then(res => res.json())
            
    //         .then(res => this.setState({ userInfo: res }))
    //         .catch(err => console.log(err));
     

    componentDidMount() {
        this.callUserInfo();
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Frontend Talking With Backend</h1>
                </header>
                <p className="App-intro">{this.state.userInfo}</p> 
              {/* write map to map/loop through array of userInfo to display it! */}
            </div>
        );
    }
}

export default Users

