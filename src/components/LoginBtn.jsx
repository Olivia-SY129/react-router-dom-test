import { withRouter } from 'react-router-dom';

export default withRouter(function LoginBtn(props) {
  console.log(props);
  function login() {
    setTimeout(() => {
      props.history.push('/');
    }, 1000);
  }
  return (
    <button onClick={login}>Sign In</button>
  )
})