import React from 'react';
import Login from './login';
import SignUp from './signup'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {

        return (
        <div>
         <Login />
         <SignUp />
        </div>
      )
    }
}

export default App;
