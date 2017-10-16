import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BudgetRow from './budgetRow'


class BudgetCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        showInput: false


      };
    this.changeToInput = this.changeToInput.bind(this)
    this.changeToText = this.changeToText.bind(this)
    }


    changeToInput() {
      this.setState({showInput: true})

    }
    changeToText() {
      this.setState({showInput: false})

    }


    render() {


      let showInput;
      if(!this.state.showInput) {showInput=<p
        className='card-headers-inline title-para'
        id='divone'
        onClick={this.changeToInput}>{this.props.categories.toUpperCase()}
        </p>}
      else {showInput=<input
        className='card-headers-inline title-input'
        autoFocus
        onBlur={this.changeToText}
        ref={ref => this.category = ref}
        type='text'></input>}
      return (
      <div className='card-container'>
      <div className='card-headers'>
        {showInput}
        <p id='planned' className='card-headers-inline'>PLANNED</p>
        <p id='received'className='card-headers-inline'>SPENT</p>
      </div>
       <BudgetRow />
      </div>

    )

    }
}

const mapStateToProps = (state, props) => ({
})

export default connect(mapStateToProps)(BudgetCard)
