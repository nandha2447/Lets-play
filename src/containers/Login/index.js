import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {get} from 'lodash';

import { loginRequest, registerUser } from '../../reducers/login';




class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      confirmPassword: '',
      toggleLoginRegister: true,
    };
  }

  componentDidUpdate() {
    if (get(this.props, 'state.user.user.username', undefined)) {
      this.props.history.push('/interests');
    }
  }

  setRegisterPage = () => {
    this.setState({ toggleLoginRegister: false });
  };

  handleChange =(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }

  login = () => {
    const { username, password } = this.state;

    this.props.loginRequest(username, password);
  };

  registerUser = () => {
    const { username, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("Passwords don't match");
  } else {
    this.props.registerUser(username, password);
    this.setState({ toggleLoginRegister: true, username: '',password: '',confirmPassword: '' });

  }
    
  };

  render() {
    const { username, password, toggleLoginRegister, confirmPassword } = this.state;
    const isLoginDisabled = username === '' || password === '' ? true : false;
    const isRegisterDisabled = username === '' || password === '' || confirmPassword === '' ? true : false;

    console.log(this.props.state.user);

    return (
      <Grid
        container
        justify="center"
        alignItems="center"
        style={{  height: 'calc(100vh - 4px)' }}
        spacing={24}
      >
        <Paper
          style={{ height: 600, width: 600, padding: 20 }}
          elevation={0}
          square={true}
        >
          <Grid item xs={12}>
            <Typography variant="h4">Let's Play</Typography>
          </Grid>
          {toggleLoginRegister ? (
            <React.Fragment>
              <Grid
                item
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
                xs={8}
              >
                <TextField
                  name="username"
                  label="Username"
                  value={username}
                  fullWidth={true}
                  onChange={this.handleChange}
                  required={true}
                />
              </Grid>
              <Grid
                item
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
                xs={8}
              >
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                  value={password}
                  fullWidth={true}
                  onChange={this.handleChange}
                  required={true}
                />
              </Grid>

              <Grid
                item
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={0}
                xs={8}
                style={{ marginTop: 20 }}
              >
                <Button variant="contained" color="secondary" disabled={isLoginDisabled} onClick={this.login}>
                  Login
                </Button>
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={this.setRegisterPage}
                  style={{ marginLeft: 20 }}
                >
                  Register
                </Button>
              </Grid>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <Grid
                item
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
                xs={8}
              >
                <TextField
                  name="username"
                  label="Username"
                  value={username}
                  fullWidth={true}
                  onChange={this.handleChange}
                  required={true}
                />
              </Grid>
              <Grid
                item
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
                xs={8}
              >
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                  value={password}
                  fullWidth={true}
                  onChange={this.handleChange}
                  required={true}
                />
              </Grid>
              <Grid
                item
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
                xs={8}
              >
                <TextField
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  value={confirmPassword}
                  fullWidth={true}
                  onChange={this.handleChange}
                  required={true}
                />
              </Grid>
              <Grid
                item
                direction="row"
                justify="center"
                alignItems="center"
                spacing={0}
                xs={8}
                style={{ marginTop: 20 }}
              >
                <Button
                  variant="contained"
                  color="secondary" 
                  disabled={isRegisterDisabled}
                  onClick={this.registerUser}
                >
                  Register
                </Button>
              </Grid>
            </React.Fragment>
          )}
        </Paper>
      </Grid>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      state,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginRequest: (username,password) => {
          dispatch(loginRequest(username,password))
      },
      registerUser: (username,password) => {
        dispatch(registerUser(username,password))
    }
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
