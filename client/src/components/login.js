import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          userNameError: true,
          passwordError: true,
        };
    this.checkUserName = this.checkUserName.bind(this);
    this.checkPassword = this.checkPassword.bind(this);
    this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }
    checkUserName(event){
    if(this.userName.value.length < 6) {
       this.setState({userNameError: false});
    }
    else {
       this.setState({userNameError: true});
    }}

    checkPassword(event){
      let re = /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/
      let pw = this.password.value
      let solution = re.test(pw)
      this.setState({passwordError:solution})
    }
    onLoginSubmit(event) {
      console.log('fired')
      event.preventDefault();
      var usernombre = this.userName.value
      var passWorde = this.password.value
      this.props.dispatch(actions.login(usernombre,passWorde));

    }
    // validateEmail(value) {
    // var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    // return re.test(value);
    // }

    render() {
        let hidden = this.state.userNameError ? 'hidden': '';
        let pwHidden = this.state.passwordError ? 'hidden': '';
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
              <input required={true}
                id='password'
                ref={ref => this.password = ref}
                onChange={this.checkPassword}
                className='form-control'
                type='password'/>
              <span className={`alert-danger ${pwHidden}`}>Password must contain 8 char, 1 capital letter, 1 number, 1 special char @#$%^&* </span>
              </div>
              <button type='submit' onClick={this.onLoginSubmit} className='btn btn-primary'>Login</button>
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
const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(Login)
