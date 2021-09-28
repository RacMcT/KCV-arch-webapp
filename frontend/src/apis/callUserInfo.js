import React from "react";


function callUserInfo() {
    fetch("http://localhost:8080/users")
        .then(res => res.json())
        
        .then(res => this.setState({ userInfo: res }))
        .catch(err => console.log(err));
  };
callUserInfo();



export default callUserInfoAPI;