import React from 'react';
import { connect } from 'react-redux';
import BudgetLeftContainer from './budgetLeftContainer';
import * as Cookies from 'js-cookie';



class App extends React.Component {
    render() {
        return (
        <div>
          {this.props.children}
        </div>
      )
    }
}
export default connect()(App)
