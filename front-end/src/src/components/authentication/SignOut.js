import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import { auth } from '../../firebase/index';
import {MuiThemeProvider} from "material-ui";
import '../../App.css'
const font = "'Varela Round', sans-serif";

const SignOutButton = () =>
    <MuiThemeProvider>
        <FlatButton
            style={{fontFamily: font}}
            onClick={auth.doSignOut}
        >
            Sign Out
        </FlatButton>
    </MuiThemeProvider>

export default SignOutButton;