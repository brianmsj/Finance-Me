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
      let token = sessionStorage.getItem('jwtToken')
    }
    render() {
        let login;
        if(this.state.data===null) {login=<div><button type="button" className="btn btn-primary btn-lg"
                         data-toggle="modal" data-target="#flipFlop">Login</button><Login /></div>}

        return (
        <div>
         {login}
         <BudgetLeftContainer />
        </div>
      )
    }
}

export default App;
