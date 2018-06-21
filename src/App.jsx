import React, { Component } from 'react';
import { connect } from 'react-redux'
import './App.css';

import FormDemo from './components/FormDemo.jsx'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FormDemo />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state
}

function mapDispatchToProps(dispatch) {
  return {
    changeName (value) {
      dispatch({
        type: 'CHANGE_NAME',
        name: value
      })
    },
    changeEmail (value) {
      dispatch({
        type: 'CHANGE_EMAIL',
        email: value
      })
    },
    changeMessage (value) {
      dispatch({
        type: 'CHANGE_MESSAGE',
        message: value
      })
    }
  }
}

export default connect()(App)