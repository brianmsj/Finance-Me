import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BudgetCard from './budgetCard'
import BudgetRow from './budgetRow'


class BudgetLeftContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
              };

    }

    render() {
      const categories = ['Savings','Food','Vacation','Giving']
      const containers = categories.map((data,index) => {
          return (
            <div key={index}>
              <BudgetCard categories={data}/>
            </div>
          )
      })
      return (
      <div className='master-card-container'>
       {containers}
       <button type="button" className="btn btn-default btn-md">
         <span className="glyphicon glyphicon-plus-sign"></span>Add Item
       </button>
      </div>
    )

    }
}

const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(BudgetLeftContainer)
