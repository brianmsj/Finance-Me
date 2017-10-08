import React from 'react';
import Login from './login';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div>
         <button type="button" className="btn btn-primary btn-lg" data-toggle="modal" data-target="#flipFlop">
          Login
         </button>
         <Login />
        </div>
      )
    }
}

export default App;
