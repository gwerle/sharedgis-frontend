import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login/Login';
import * as actions from '../components/Login/store/actions';
import * as thunks from '../components/Login/store/thunks';

// Mapping
const mapStateToProps = (state) => {
  return {};
};
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
  thunks: bindActionCreators(thunks, dispatch),
});

// Component
let LoginContainer;
LoginContainer = (props) => <Login {...props} />;

// Redux
LoginContainer = connect(mapStateToProps, mapDispatchToProps)(LoginContainer);

export default LoginContainer;
