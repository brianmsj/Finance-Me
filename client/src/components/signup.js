import React from 'react';


class SignUp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div className='main-form col-5'>
         <h1 className='login-title'>Sign Up</h1>
         <form>
         <div className='form-group'>
          <label htmlFor="firstname">First Name</label>
          <input id='firstname' className='form-control' type='text'></input>
         </div>
         <div className='form-group'>
          <label htmlFor='lastname'>Last Name</label>
          <input id='lastname' className='form-control' type='text'></input>
         </div>
         <div className='form-group'>
          <label htmlFor='newusername'>UserName</label>
          <input id='newusername' className='form-control' type='text'></input>
         </div>
         <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input id='email' className='form-control' type='text'></input>
         </div>
         <div className='form-group'>
          <label htmlFor='signuppassword'>Password</label>
          <input id='signuppassword' className='form-control' type='text'></input>
         </div>
         <div className='form-group'>
          <label htmlFor='signuppassword'>Re-Enter Password</label>
          <input id='signuppassword' className='form-control' type='text'></input>
         </div>
         <input className='btn btn-primary' type='submit' value='Sign Up'></input>
         </form>
        </div>
      )
    }
}

export default SignUp;
