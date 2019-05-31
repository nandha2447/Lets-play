import React from 'react';
import { Grid, Paper, TextField, Button, Typography } from '@material-ui/core';

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

  setRegisterPage = () => {
    this.setState({ toggleLoginRegister: false });
  };

  handleChange =(e)=>{
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { toggleLoginRegister } = this.state;
    console.log(this.state.username);
    return (
      <Grid
        direction="row"
        justify="center"
        alignItems="center"
        style={{ height: '100%' }}
        spacing={24}
        xs={12}
      >
        <Paper
          style={{ height: 600, width: 600, padding: 20 }}
          elevation={0}
          square={true}
        >
          <Grid item xs={12}>
            <Typography variant="h4">Welcome To Let's Play</Typography>
          </Grid>
          {toggleLoginRegister ? (
            <React.Fragment>
              <Grid
                item
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
                xs={6}
              >
                <TextField
                  name="username"
                  label="Username"
                  value={this.state.username}
                  fullWidth={true}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid
                item
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
                xs={6}
              >
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                  value={this.state.password}
                  fullWidth={true}
                  onChange={this.handleChange}
                />
              </Grid>

              <Grid
                item
                direction="row"
                justify="space-around"
                alignItems="center"
                spacing={0}
                xs={6}
                style={{ marginTop: 20 }}
              >
                <Button variant="contained" color="secondary">
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
                xs={6}
              >
                <TextField
                  name="username"
                  label="Username"
                  value={this.state.username}
                  fullWidth={true}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid
                item
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
                xs={6}
              >
                <TextField
                  name="password"
                  type="password"
                  label="Password"
                  value={this.state.password}
                  fullWidth={true}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid
                item
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                spacing={0}
                xs={6}
              >
                <TextField
                  name="confirmPassword"
                  type="password"
                  label="Confirm Password"
                  value={this.state.password}
                  fullWidth={true}
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid
                item
                direction="row"
                justify="center"
                alignItems="center"
                spacing={0}
                xs={6}
                style={{ marginTop: 20 }}
              >
                <Button
                  variant="contained"
                  color="secondary" 
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

export default Login;
