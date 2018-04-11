import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { auth } from '../../firebase/index';

import * as routes from '../../constants/routes';

import {pink500, cyan500, blue500} from 'material-ui/styles/colors';
import '../../App.css'
import {TextField, RaisedButton, Paper,} from "material-ui";
const font = "'Varela Round', sans-serif";

const style = {
    height: '75%',
    width: '40%',
    margin: '5%',
    textAlign: 'center',
    display: 'inline-block',
};


const SignUpPage = ({ history }) =>
    <div align="center">
        <Paper style={style} zDepth={2}>
            <h1 style={{fontFamily: font, color: cyan500}}>Sign Up</h1>
            <SignUpForm history={history} />
        </Paper>
    </div>

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null,
};

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

class SignUpForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            username,
            email,
            passwordOne,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doCreateUserWithEmailAndPassword(email, passwordOne)
            .then(authUser => {
                this.setState(() => ({ ...INITIAL_STATE }));
                history.push(routes.HOME);
            })
            .catch(error => {
                this.setState(byPropKey('error', error));
            });

        event.preventDefault();
    }

    render() {
        const {
            username,
            email,
            passwordOne,
            passwordTwo,
            error,
        } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo ||
            passwordOne === '' ||
            email === '' ||
            username === '';

        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    floatingLabelText="Username"
                    value={username}
                    onChange={event => this.setState(byPropKey('username', event.target.value))}
                    type="text"
                    hintText="Username"
                /><br />
                <TextField
                    floatingLabelText="Email Address"
                    value={email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    hintText="Email Address"
                /><br />
                <TextField
                    floatingLabelText="Password"
                    value={passwordOne}
                    onChange={event => this.setState(byPropKey('passwordOne', event.target.value))}
                    type="password"
                    hintText="Password"
                /><br />
                <TextField
                    floatingLabelText="Confirm Password"
                    value={passwordTwo}
                    onChange={event => this.setState(byPropKey('passwordTwo', event.target.value))}
                    type="password"
                    hintText="Confirm Password"
                /><br />
                <RaisedButton primary={true} style={{fontFamily: font, margin: '5%'}} disabled={isInvalid} type="submit">
                    Sign Up
                </RaisedButton>

                { error && <p>{error.message}</p> }
            </form>
        );
    }
}

const SignUpLink = () =>
    <p style={{ fontFamily: font, color: blue500, textDecoration: 'none' }}>
        Don't have an account?
        {'   '}
        <Link style={{color: pink500, textDecoration: 'none' }} to={routes.SIGN_UP}>Sign Up</Link>
    </p>

export default withRouter(SignUpPage);

export {
    SignUpForm,
    SignUpLink
};