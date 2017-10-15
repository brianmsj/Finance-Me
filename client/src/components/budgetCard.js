import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';


class BudgetCard extends React.component {
    constructor(props) {
      super();
      this.state = {
      };

    }



    render() {
      <div>
       Budget Card Page
      </div>

    }
}

const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(BudgetCard)
