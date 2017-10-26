import React from 'react'
import {connect} from 'react-redux'



class MonthScroll extends React.Component {
    constructor(props) {
      super(props)
      this.state = {

      }
    }


   render() {
       const months = this.props.budgets
       if(!this.props) {
         return (
           <div>...Loading</div>
         )
       }
       let monthScroller = months.map((data,index)=> {
            return (
              <div className='month-box' key={index}>
                <p className='month-text'>{data.month.slice(0,3)}</p>
                <p className='year-text'>{(new Date()).getFullYear()}</p>
              </div>
            )

       })
      return (
        <div>
          <div className='year-container'>
           <h3>{(new Date()).getFullYear()} Budgets</h3>
          </div>
          <div className='month-container'>
          {monthScroller}
          </div>
        </div>
      )
  }
}

const mapStateToProps = (state,props) => ({
      budgets: state.budgets
})
export default connect(mapStateToProps)(MonthScroll)
