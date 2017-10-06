import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div class='col-5'>
         <form>
         <div class='form-group'>
          <label for="username">Username</label>
          <input id='username' class='form-control' type='text'></input>
         </div>
         <input type='text'></input>
         <input type='submit' value='Log In'></input>
         </form>
        </div>
      )
    }
}

export default Login;
