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
      this.createBudgets = this.createBudgets.bind(this)
    }

    createBudgets() {
      console.log('action fired budgets')
      this.props.dispatch(actions.budgetCreator());
    }


    render() {
      let budgets;
      if(this.props.dummyBudgets.length < 1) {
        (budgets=<div><p>You have No Budgets. Create 12 months of budgets</p>
        <button onClick={this.createBudgets}>Click Here</button></div>)
      }

      return (
      <div className='master-card-container'>
        {budgets}
      </div>
    )

    }
}

const mapStateToProps = (state, props) => ({
    dummyBudgets: state.dummyBudgets
})

export default connect(mapStateToProps)(BudgetLeftContainer)
