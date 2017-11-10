import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BudgetCard from './budgetCard'
import CreateBudget from './createbudget';



class BudgetLeftContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
      this.createBudgets = this.createBudgets.bind(this)
      this.getUserTemporary = this.getUserTemporary.bind(this)
    }

    componentDidMount() {
     this.props.dispatch(actions.currentMonth());
    }
    createBudgets() {
      this.props.dispatch(actions.budgetCreator());
    }
    getUserTemporary() {
      this.props.dispatch(actions.loadUser());
    }



    render() {
      var currentMonth;
      if(this.props.currentMonth == false) {
        currentMonth = <CreateBudget />
      }
      else {
        currentMonth = <p>Here is your current budget</p>
      }


      return (
      <div className='master-card-container'>
        {currentMonth}
      </div>
    )

    }
}

const mapStateToProps = (state, props) => ({
   currentMonth: state.currentMonth,
   categories: state.categories
})

export default connect(mapStateToProps)(BudgetLeftContainer)
