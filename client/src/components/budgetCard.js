import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BudgetRow from './budgetRow'


class BudgetCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        showInput: false,
      };
    this.changeToInput = this.changeToInput.bind(this)
    this.printHello = this.printHello.bind(this)
    }
    changeToInput() {
      this.setState({showInput: !this.state.showInput})

    }
    printHello() {
      return 'hello world'
    }


    render() {
      const categories = ['Savings','Housing','Transportation']
      let showInput;
      if(!this.state.showInput) {showInput=<p id='divone' onClick={this.changeToInput}></p>}
      else {showInput=<input autoFocus onBlur={this.changeToInput} placeholder='div ONE' type='text'></input>}
      return (
      <div className='card-container'>
        {showInput}
       <BudgetRow />
      </div>

    )

    }
}

const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(BudgetCard)
