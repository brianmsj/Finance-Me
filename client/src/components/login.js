import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
          <div>
          <div className="modal fade" id="flipFlop" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
            <h4 className="modal-title" id="modalLabel">Login</h4>
          </div>
            <div className="modal-body">
            <form>
              <div className='form-group'>
              <label htmlFor='username'>UserName</label>
              <input id='username' className='form-control' type='text'/>
              </div>
              <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input id='password' className='form-control' type='text'/>
              </div>
            </form>
            </div>
          <div className="modal-footer">
          <p>Not Registered?</p>
          <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#second" data-dismiss="modal">Sign Up</button>
          </div>
          </div>
          </div>
          </div>
          <div className="modal fade" id="second" tabindex="-1" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
            <div className="modal-content">
            <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
            <h4 className="modal-title" id="modalLabel">Sign Up</h4>
          </div>
            <div className="modal-body">
            <form>
              <div className='form-group'>
              <label htmlFor='firstname'>First Name</label>
              <input id='firstname' className='form-control' type='text'/>
              </div>
              <div className='form-group'>
              <label htmlFor='lastname'>Last Name</label>
              <input id='lastname' className='form-control' type='text'/>
              </div>
              <div className='form-group'>
              <label htmlFor='chooseUser'>Choose Username</label>
              <input id='chooseUser' className='form-control' type='text'/>
              </div>
              <div className='form-group'>
              <label htmlFor='email'>E-mail</label>
              <input id='email' className='form-control' type='text'/>
              </div>
              <div className='form-group'>
              <label htmlFor='signUpPassword'>Password</label>
              <input id='signUpPassword' className='form-control' type='text'/>
              </div>
              <div className='form-group'>
              <label htmlFor='reTypePassword'>Re-Type Password</label>
              <input id='reTypePassword' className='form-control' type='text'/>
              </div>
              <button type='button' className='btn btn-primary'>Sign Up</button>
            </form>
            </div>
          <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-toggle="modal" data-target="#second" data-dismiss="modal">Close</button>
          </div>
          </div>
          </div>
          </div>
          </div>
      )
    }
}

export default Login;
