import React from 'react';
import {connect} from 'react-redux';
import './App.css';
import Login from './Login';
import Lists from './LIsts';

function App(props) {
  const {login} = props;
  console.log("login", props)
  return (
    <div className="App">
      {!login && <Login />}
      {login && <Lists />}
    </div>
  );
}
const mapStateToProps = (state, ownProps) => ({
  login: state.isloggedIn,
  
});

export default connect(
  mapStateToProps,
  null
)(App);

