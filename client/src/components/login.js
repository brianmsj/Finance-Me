import React from 'react';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userNameError: true
        };
    this.checkUserName = this.checkUserName.bind(this);
    }
    checkUserName(event){
    if(this.userName.value.length < 6) {
       this.setState({userNameError: false});
    }
    else {
       this.setState({userNameError: true});
    }



}
    // validateEmail(value) {
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(value);
    // }

    render() {
        let hidden = this.state.userNameError ? 'hidden': '';
        console.log(hidden)
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
              <input
                required={true}
                ref={ref => this.userName = ref}
                onChange={this.checkUserName}
                id='username'
                className='form-control'
                type='text'
                />
              <span className={`alert-danger ${hidden}`}>Username must be 6 characters</span>
              </div>
              <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input required={true}id='password' className='form-control' type='text'/>
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
