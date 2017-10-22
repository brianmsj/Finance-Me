import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BudgetCard from './budgetCard'



class BudgetLeftContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }

    }


    render() {
      console.log(this.props.budgets)
      let budgets;
      if(this.props.budgets.length < 1) {
        (budgets=<div><p>You have No Budgets. Create 12 months of budgets</p><button>
        Click Here</button></div>)
      }

      return (
      <div className='master-card-container'>
        {budgets}
      </div>
    )

    }
}

const mapStateToProps = (state, props) => ({
    budgets: state.budgets
})

export default connect(mapStateToProps)(BudgetLeftContainer)
