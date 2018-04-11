import React from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom';

import Navigation from './components/authentication/Navigation';
import LandingPage from './components/authentication/Landing';
import SignUpPage from './components/authentication/SignUp';
import SignInPage from './components/authentication/SignIn';
import PasswordForgetPage from './components/authentication/PasswordForget';
import HomePage from './components/authentication/Home';
import AccountPage from './components/authentication/Account';

import * as routes from './constants/routes';
import withAuthentication from './components/authentication/withAuthentication';
import {MuiThemeProvider} from "material-ui";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import './App.css'
const font = "'Varela Round', sans-serif";

const muiTheme = getMuiTheme({
    fontFamily: font
});

const App = () =>
    <Router>
        <div>
            <Navigation />

            <MuiThemeProvider muiTheme={muiTheme}>
                <Route exact path={routes.LANDING} component={() => <LandingPage />} />
                <Route exact path={routes.SIGN_UP} component={() => <SignUpPage />} />
                <Route exact path={routes.SIGN_IN} component={() => <SignInPage />} />
                <Route exact path={routes.PASSWORD_FORGET} component={() => <PasswordForgetPage />} />
                <Route exact path={routes.HOME} component={() => <HomePage />} />
                <Route exact path={routes.ACCOUNT} component={() => <AccountPage />} />
            </MuiThemeProvider>
        </div>
    </Router>

export default withAuthentication(App);