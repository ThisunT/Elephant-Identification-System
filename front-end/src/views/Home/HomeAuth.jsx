import React from 'react';

import AuthUserContext from '../Authentication/AuthUserContext';
import withAuthorization from '../Authentication/withAuthorization';

import Home from "./Home";

class HomeAuth extends React.Component{

    render(){
        return(
            <AuthUserContext.Consumer>
                {authUser =>
                    <div>
                        <Home/>
                    </div>
                }
            </AuthUserContext.Consumer>
        )
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomeAuth);