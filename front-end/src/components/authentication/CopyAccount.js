import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import Paper from 'material-ui/Paper';
import '../../App.css';
import {cyan500} from 'material-ui/styles/colors';

const font = "'Varela Round', sans-serif";

const style = {
      height: '375px',
      width: '40%',
      margin: '10%',
      textAlign: 'center',
      display: 'inline-block',
};

const AccountPage = () =>
      <AuthUserContext.Consumer>
            {authUser =>
                  <div align="center">

                        <h1 style={{fontFamily: font, color: cyan500 ,fontSize:30 }}> My Account: {authUser.email}</h1>

                        <Paper style={style} zDepth={2} >
                              <h1 style={{fontFamily: font, color: cyan500 ,fontSize:30 }}>Change Password</h1>
                              <PasswordForgetForm />
                        </Paper>

                        <Paper style={style} zDepth={2} >
                              <h1 style={{fontFamily: font, color: cyan500 ,fontSize:30 }}>Reset Password</h1>
                              <PasswordChangeForm />

                        </Paper>
                  </div>

            }
      </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);