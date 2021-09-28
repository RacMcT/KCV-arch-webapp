import React from 'react';
import Dashboard from '../components/Dashboard';
import Login from '../components/Login';
// import Users from '../components/users';

function Home() {
  return (
    <div>
      <Login/>
      <Dashboard/>
      {/* <Users/> */}
     <h1> Welcome to Rachel's Capstone Home Page!- testing if it's all working?!</h1>
    
    </div>
  );
}

export default Home;

