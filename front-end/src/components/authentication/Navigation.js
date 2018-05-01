import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import {Link} from 'react-router-dom';
import * as routes from '../../constants/routes';
import AuthUserContext from './AuthUserContext';
import SignOutButton from './SignOut';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import '../../App.css'
import {white} from 'material-ui/styles/colors';
import DrawerSimpleExample from "./DrawerSimpleExample";



const font = "'Varela Round', sans-serif";

const muiTheme = getMuiTheme({
    fontFamily: font
});
/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */
function handleIconClick() {
    alert("Hello! I am an alert box!!");
}



const Navigation = ({authUser}) =>
    <AuthUserContext.Consumer>
        {authUser => authUser
            ? <NavigationAuth/>
            : <NavigationNonAuth/>
        }
    </AuthUserContext.Consumer>


//function(event: object) => void




const NavigationNonAuth = () => (
    <MuiThemeProvider muiTheme={muiTheme}>
        <div>
            <AppBar
                title="Elephant Recognizer"
                style={{fontFamily: font}}
                iconElementRight={
                    <div>
                        <Link to={routes.LANDING}><FlatButton style={{fontSize: '30%', color: white}} label="Landing"/></Link>
                        <Link to={routes.SIGN_IN}><FlatButton style={{fontSize: '30%', color: white}} label="Sign In"/></Link>
                    </div>
                }
                showMenuIconButton={false}
            />
        </div>
    </MuiThemeProvider>
);

class NavigationAuth extends Component {
    constructor(props){
        super(props);

        this.state = {
            open: false
        };

        this.toggleDrawer = this.toggleDrawer.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    toggleDrawer(value=!this.state.open) {
        this.setState({
            open:value
        });
    }

    handleClose(){
        this.setState({open: false})
    }

    render (){
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar

                        title="Elephant Recognizer"

                        onLeftIconButtonClick={this.toggleDrawer.bind(this)}
                        isInitiallyOpen={true}
                        iconElementRight={
                            <div>
                                <Link to={routes.LANDING}><FlatButton style={{fontSize: '30%', color: white}} label="Landing"/></Link>
                                <Link to={routes.HOME}><FlatButton style={{fontSize: '30%', color: white}} label="Home"/></Link>
                                <Link to={routes.ACCOUNT}><FlatButton style={{fontSize: '30%', color: white}} label="Account"/></Link>
                                <SignOutButton/>
                            </div>
                        }
                    />



                </div>
            </MuiThemeProvider>
        );
    }
}
export default Navigation;


