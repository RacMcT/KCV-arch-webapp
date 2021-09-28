import React from 'react';
import { getUser, removeUserSession } from '../utils/Common';
 
function Dashboard(props) {
  const user = getUser();
 
  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  return (
    <div>
      <h2>Welcome to the Koshkonong Creek Village Site Digital Archaeology Experience!</h2>
      <br /><br />
      <input type="button" onClick={handleLogout} value="Logout" />
    </div>
  );
}
 
export default Dashboard;