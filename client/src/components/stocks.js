import React from 'react';
import Login from './login';
import * as actions from '../actions/index';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';

class Stocks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    componentDidMount() {
      this.props.dispatch(actions.stockPrices())
    }
    render() {
        console.log(this.props.stocks)
        return (
        <div className='col-md-4'>
        </div>
      )
    }
}

const mapStateToProps = (state, props) => ({
  stocks: state.stocks
})

export default connect(mapStateToProps)(Stocks)
