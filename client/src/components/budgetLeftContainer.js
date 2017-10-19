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
      this.addCategory = this.addCategory.bind(this);
    }
    addCategory() {
      var item = {
        category: "New"
      }
      this.props.dispatch(actions.addCategory(item))
    }

    render() {
          let category = this.props.category
          let containers = category.map((data,index) => {
          return (
            <div key={index}>
              <BudgetCard categories={data}/>
            </div>
          )
      })
      return (
      <div className='master-card-container'>
       {containers}
       <button onClick={this.addCategory} type="button" className="btn btn-default btn-md">
         <span className="glyphicon glyphicon-plus-sign"></span>Add Item
       </button>
      </div>
    )

    }
}

const mapStateToProps = (state, props) => ({
  category: state.category

})

export default connect(mapStateToProps)(BudgetLeftContainer)
