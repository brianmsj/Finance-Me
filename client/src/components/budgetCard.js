import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BudgetRow from './budgetRow'


class BudgetCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      };

    }



    render() {
      return (
      <div className='card-container'>
       <div className='card-title'>This is a card</div>
       <BudgetRow />
       <BudgetRow />
       <BudgetRow />
       <BudgetRow />
      </div>

    )

    }
}

const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(BudgetCard)
