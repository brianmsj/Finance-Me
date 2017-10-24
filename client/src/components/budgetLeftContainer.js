import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BudgetCard from './budgetCard'
import MonthScroll from './monthscroll'



class BudgetLeftContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
      this.createBudgets = this.createBudgets.bind(this)
      this.getUserTemporary = this.getUserTemporary.bind(this)
    }

    createBudgets() {
      this.props.dispatch(actions.budgetCreator());
    }
    getUserTemporary() {
      this.props.dispatch(actions.loadUser());
    }




    render() {
      let budgets;
      if(this.props.budgets.length < 1) {
        (budgets=<div><p>You have No Budgets. Create 12 months of budgets</p>
        <button onClick={this.createBudgets}>Click Here</button>
        <button onClick={this.getUserTemporary}>Get User</button>
        </div>)
      }
      else {(budgets=<MonthScroll />)}


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
