import axios from 'axios';
import { setUserSession } from '..utils/Common';

axios.post('http://localhost:8080/login', { username: username.value, password: password.value }).then(response => {
  setLoading(false);
  setUserSession(response.data.token, response.data.user);
  props.history.push('/dashboard');
}).catch(error => {
  setLoading(false);
  if (error.response.status === 401) setError(error.response.data.message);
  else setError("Something went wrong. Please try again later.");
});



export default LoginAPI;