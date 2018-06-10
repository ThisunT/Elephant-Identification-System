import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import { auth } from '../../firebase/index';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {blue500, cyan500} from 'material-ui/styles/colors';
import '../../App.css'

import * as routes from "../../constants/routes";

const font = "'Varela Round', sans-serif";

const style = {
      height: '300px',
      width: '550px',
      margin: '10%',
      textAlign: 'center',
      display: 'inline-block',
};


const PasswordForgetPage = () =>
      <div className="row">
            <div className="col-lg-4">
                  <img src={require('../images/profile.jpg')} width="1500px" />
            </div>

            <div className="col-lg-4">
                  <div align="center">
                        <Paper style={style} zDepth={2} ><br />
                              <h1 style={{font, color: cyan500 ,fontSize:30 }}>Password Forget</h1>
                              <PasswordForgetForm />
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
    email: '',
    error: null,
};

class PasswordForgetForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const { email } = this.state;

        auth.doPasswordReset(email)
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
            email,
            error,
        } = this.state;

        const isInvalid = email === '';

        return (
            <form onSubmit={this.onSubmit}>
                  <TextField value={this.state.email}
                             onChange={event => this.setState(byPropKey('email', event.target.value))}
                             type="text"
                             placeholder="Email Address"
                  /><br />
                  <RaisedButton primary={true} style={{fontFamily: font, margin: '5%'}} type="submit">
                        Reset
                  </RaisedButton>

                  <Link to={routes.ACCOUNT}>
                        <RaisedButton primary={true} style={{fontFamily: font, margin: '5%'}} >
                              Back
                        </RaisedButton>
                  </Link>
                {/*<input*/}
                    {/*value={this.state.email}*/}
                    {/*onChange={event => this.setState(byPropKey('email', event.target.value))}*/}
                    {/*type="text"*/}
                    {/*placeholder="Email Address"*/}
                {/*/>*/}
                {/*<button disabled={isInvalid} type="submit">*/}
                    {/*Reset My Password*/}
                {/*</button>*/}

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

const PasswordForgetLink = () =>
    <p >
        <Link style={{ fontFamily: font, color: blue500, textDecoration: 'none' }} to="/pw-forget">Forgot Password?</Link>
    </p>

export default PasswordForgetPage;

export {
    PasswordForgetForm,
    PasswordForgetLink,
};