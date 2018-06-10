import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import { auth } from '../../firebase/index';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {cyan500} from "material-ui/styles/colors";

const font = "'Varela Round', sans-serif";

const style = {
      height: '300px',
      width: '550px',
      margin: '10%',
      textAlign: 'center',
      display: 'inline-block',
};

const PasswordChangePage = () =>
      <div className="row">
            <div className="col-lg-4">
                  <img src={require('../images/profile.jpg')} width="1500px" />
            </div>

            <div className="col-lg-4">
                  <div align="center">
                        <Paper style={style} zDepth={2} ><br />
                              <h1 style={{font, color: cyan500 ,fontSize:30 }}>Password Change</h1>
                        <PasswordChangeForm />
                        </Paper>
                  </div>
            </div>

            <div className="col-lg-4">
            </div>
      </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

class PasswordChangeForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { passwordOne } = this.state;

        auth.doPasswordUpdate(passwordOne)
            .then(() => {
                this.setState(() => ({ ...INITIAL_STATE }));
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '';

        return (
              <div>


                  <form onSubmit={this.onSubmit}>
                        <TextField
                              value={passwordOne}
                              onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                              type="password"
                              placeholder="New Password"
                        /><br />
                        <TextField
                              value={passwordTwo}
                              onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                              type="password"
                              placeholder="Confirm New Password"
                        /><br />
                        <RaisedButton primary={true} style={{fontFamily: font, margin: '5%'}} type="submit">
                              Reset
                        </RaisedButton>
                      {/*<input*/}
                          {/*value={passwordOne}*/}
                          {/*onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}*/}
                          {/*type="password"*/}
                          {/*placeholder="New Password"*/}
                      {/*/>*/}
                      {/*<input*/}
                          {/*value={passwordTwo}*/}
                          {/*onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}*/}
                          {/*type="password"*/}
                          {/*placeholder="Confirm New Password"*/}
                      {/*/>*/}
                      {/*<button disabled={isInvalid} type="submit">*/}
                          {/*Reset My Password*/}
                      {/*</button>*/}

                      { error && <p>{error.message}</p> }
                  </form>
              </div>
        );
    }
}

export default PasswordChangePage;
export {
      PasswordChangeForm
};