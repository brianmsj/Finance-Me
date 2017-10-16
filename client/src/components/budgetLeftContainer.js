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
      return (
      <div>
      </div>

    )

    }
}

const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(BudgetLeftContainer)
