import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class CreateBudget extends React.Component {
   constructor() {
     super();
     this.state = {

     }
   }

   render() {
   var monthList = ["January","February","March","April","May","June","July","August",
   "September","October","November","December"]
   var d = new Date()
   d = monthList[d.getMonth()]

     return (
     <div>
      <div>
       <h2>You dont have a {d} budget, Create one now!</h2>
       <button className='btn-primary'>New</button>
      </div>
     </div>

  )
}
}

const mapStateToProps = (state, props) => ({
})


export default connect(mapStateToProps)(CreateBudget)
