import React, { Component } from 'react';
import './App.css';
import SmurfForm from './SmurfForm';
import SmurfLists from './SmurfLists';
import { connect } from 'react-redux';
import { getSmurfs } from '../actions';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  componentDidMount() {
    this.props.getSmurfs();
  }
  render() {
    return (
      <div className='App'>
        <SmurfForm />
        <SmurfLists />
      </div>
    );
  }
}

export default connect(
  null,
  { getSmurfs }
)(App);
