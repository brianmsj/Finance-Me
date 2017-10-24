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
              <p>{data.month}</p>
              </div>
            )

       })
      return (
        <div>
          {monthScroller}
        </div>
      )
  }
}

const mapStateToProps = (state,props) => ({
      budgets: state.budgets
})
export default connect(mapStateToProps)(MonthScroll)
