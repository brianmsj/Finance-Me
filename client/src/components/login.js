import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div className='main-form col-5'>
         <h1 className='login-title'>Login to FinanceMe</h1>
         <form>
         <div className='form-group'>
          <label htmlFor="username">Username</label>
          <input id='username' className='form-control' type='text'></input>
         </div>
         <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input id='password' className='form-control' type='text'></input>
         </div>
         <input className='btn btn-primary' type='submit' value='Log In'></input>
         </form>
         <p>Not registered? Sign Up Here</p>
        </div>
      )
    }
}

export default Login;
