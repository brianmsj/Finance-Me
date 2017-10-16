import React from 'react';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import BudgetCard from './budgetCard'



class BudgetLeftContainer extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
          categories: ['Savings','Food','Vacation','Giving'],
          itemCount: 1
                  };
      this.addCategory = this.addCategory.bind(this);
    }

    addCategory() {
      var arrayvar = this.state.categories.slice()
      arrayvar.push(`New ${this.state.itemCount}`)
      this.setState({itemCount: this.state.itemCount+1})
      this.setState({categories: arrayvar})

    }

    render() {
      console.log(this.state.categories)
          let containers = this.state.categories.map((data,index) => {
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
})

export default connect(mapStateToProps)(BudgetLeftContainer)
