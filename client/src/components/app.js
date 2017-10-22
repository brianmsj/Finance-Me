import React from 'react';
import { connect } from 'react-redux';
import BudgetLeftContainer from './budgetLeftContainer';



class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }


    render() {

        return (
        <div>
          <BudgetLeftContainer />
        </div>
      )
    }
}

const mapStateToProps = (state, props) => ({
  token: state.token,
  loggedIn: state.loggedIn

})

export default connect(mapStateToProps)(App)
