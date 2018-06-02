import React from 'react';

import AuthUserContext from './AuthUserContext';
import { PasswordForgetForm } from './PasswordForget';
import PasswordChangeForm from './PasswordChange';
import withAuthorization from './withAuthorization';
import {database} from '../../firebase/index';

const AccountPage = () =>
    <AuthUserContext.Consumer>
        {authUser =>
            <div>
                <h1>Hi: {authUser.uid}</h1>
                <PasswordForgetForm />
                <PasswordChangeForm authUser={authUser}/>
            </div>
        }
    </AuthUserContext.Consumer>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);