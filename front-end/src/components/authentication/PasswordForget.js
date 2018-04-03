import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase/index';

import {blue500} from 'material-ui/styles/colors';
import '../../App.css'
const font = "'Varela Round', sans-serif";


const PasswordForgetPage = () =>
    <div>
        <h1>PasswordForget</h1>
        <PasswordForgetForm />
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
                <input
                    value={this.state.email}
                    onChange={event => this.setState(byPropKey('email', event.target.value))}
                    type="text"
                    placeholder="Email Address"
                />
                <button disabled={isInvalid} type="submit">
                    Reset My Password
                </button>

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