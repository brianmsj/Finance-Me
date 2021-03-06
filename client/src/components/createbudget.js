import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';


class CreateBudget extends React.Component {
   constructor() {
     super();
     this.state = {

     }
     this.createBudget = this.createBudget.bind(this)
   }
   createBudget() {
     this.props.dispatch(actions.newBudget())
   }

   render() {
   var monthList = ["January","February","March","April","May","June","July","August",
   "September","October","November","December"]
   var d = new Date()
   d = monthList[d.getMonth()]

     return (
     <div>
      <div className='create-budget-container'>
       <h2>You dont have a {d} budget, Create one now!</h2>
       <button onClick={this.createBudget} className='btn btn-primary btn-lg'>New</button>
      </div>
      </div>


  )
}
}

const mapStateToProps = (state, props) => ({
})


export default connect(mapStateToProps)(CreateBudget)
