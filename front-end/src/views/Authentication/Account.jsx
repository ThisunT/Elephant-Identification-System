import React from 'react';

import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization';

import ProfilePage from "../ProfilePage/ProfilePage";
import {auth, database} from "../../firebase";

class AccountPage extends React.Component{
    render(){
        return(
            <AuthUserContext.Consumer>
                {authUser =>
                    <div>
                        <ProfilePage user={authUser.uid} username={database.onceGetUsers(auth.getUser().uid)} />
                    </div>
                }
            </AuthUserContext.Consumer>
        )
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);