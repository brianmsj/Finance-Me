import React from 'react';
import Login from './login';
import BudgetCard from './budgetCard'
import BudgetLeftContainer from './budgetLeftContainer'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
      var data = sessionStorage.getItem('jwtToken');
      if(!data) {
        console.log('no data here')
      }
      else {
        console.log('data is here')
      }
    }
    render() {

        return (
        <div>
         <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#flipFlop">
          Login
         </button>
         <Login />
         <BudgetLeftContainer />
        </div>
      )
    }
}

export default App;
