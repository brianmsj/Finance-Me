import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class BudgetRow extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          amount: 0.00
      };

    }


    render() {
      return (
      <div className='card-container-row'>
      <div className='inline-budget-row'>
       <input className='inline-budget-first'type='text' placeholder='budget item'></input>
       <input className='inline-budget-second' type='text'></input>
       <div className='inline-budget-third'>
       <p>{`$${this.state.amount.toFixed(2)}`}</p>
       </div>
      </div>
      </div>

    )

    }
}

const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(BudgetRow)
