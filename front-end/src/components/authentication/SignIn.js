import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import { SignUpLink } from './SignUp';
import { PasswordForgetLink } from './PasswordForget';
import { auth } from '../../firebase/index';
import * as routes from '../../constants/routes';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {redA200, cyan500} from 'material-ui/styles/colors';
import '../../App.css'
const font = "'Varela Round', sans-serif";



const style = {
    height: '65%',
    width: '40%',
    margin: '5%',
    textAlign: 'center',
    display: 'inline-block',
};


const SignInPage = ({ history }) =>
    <div align="center">
        <Paper style={style} zDepth={2}>
            <h1 style={{fontFamily: font, color: cyan500}}>Sign In</h1>
            <SignInForm history={history} />
            <PasswordForgetLink />
            <SignUpLink />
        </Paper>
    </div>

const byPropKey = (propertyName, value) => () => ({
    [propertyName]: value,
});

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null,
};

class SignInForm extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    onSubmit = (event) => {
        const {
            email,
            password,
        } = this.state;

        const {
            history,
        } = this.props;

        auth.doSignInWithEmailAndPassword(email, password)
            .then(() => {
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
            email,
            password,
            error,
        } = this.state;

        const isInvalid =
            password === '' ||
            email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <TextField
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    value={email}
                    hintText="Email Address"
                /><br />

                <TextField
                    value={password}
                    onChange={event => this.setState(byPropKey('password', event.target.value))}
                    type="password"
                    hintText="Password"
                /><br />

                <RaisedButton primary={true} disabled={isInvalid} type="submit">
                    Sign In
                </RaisedButton>

                { error && <p style={{fontFamily: font, color: redA200, margin: '5%'}} >{error.message}</p> }
            </form>
        );
    }
}

export default withRouter(SignInPage);

export {
    SignInForm,
};