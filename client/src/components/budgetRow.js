import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class BudgetRow extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      };

    }



    render() {
      return (
      <div className='card-container'>
      <div className='inline-budget-row'>
       <input type='text' placeholder='budget item'></input>
       <input className='inline-budget-second' type='text' placeholder='budget item'></input>
      </div>
      </div>

    )

    }
}

const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(BudgetRow)
