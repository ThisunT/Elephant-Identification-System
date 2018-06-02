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
import {Drawer, MenuItem} from "material-ui";



const font = "'Varela Round', sans-serif";

const muiTheme = getMuiTheme({
    fontFamily: font
});
/**
 * This example uses an [IconButton](/#/components/icon-button) on the left, has a clickable `title`
 * through the `onClick` property, and a [FlatButton](/#/components/flat-button) on the right.
 */



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
    constructor(props) {
        super(props);
        this.state = {
            "open": false,
            "show": null
        };
    }



    handleToggle = () => this.setState({open: !this.state.open});

    // showBar = () => {
    //     this.setState({show: 'bar' , open: false});
    //
    // };
    // showFoo = () => {
    //     routes.ACCOUNT
    // };
    render (){
        // let content = null;
        //
        // switch (this.state.show){
        //     case 'foo':
        //         content = (<Foo/>);
        //         break;
        //     case 'bar':
        //         content = (<Bar/>);
        //         break;
        //     default:
        //         content = <h1>Hiiii</h1>
        // }
        return (
            <MuiThemeProvider muiTheme={muiTheme}>
                <div>
                    <AppBar

                        title="Elephant Recognizer"

                        onLeftIconButtonClick={this.handleToggle}
                        // isInitiallyOpen={true}
                        iconElementRight={
                            <div>
                                <Link to={routes.LANDING}><FlatButton style={{fontSize: '30%', color: white}} label="Landing"/></Link>
                                <Link to={routes.HOME}><FlatButton style={{fontSize: '30%', color: white}} label="Home"/></Link>
                                <Link to={routes.ACCOUNT}><FlatButton style={{fontSize: '30%', color: white}} label="Account"/></Link>
                                <SignOutButton/>
                            </div>
                        }

                    />
                    <Drawer
                        docked={false}
                        width={220}
                        open={this.state.open}
                        onRequestChange={(open) => this.setState({open})}>
                        <AppBar title="Menu"/>
                        {/*<MenuItem onClick={this.showFoo}>Show Foo </MenuItem>*/}
                        {/*<MenuItem onClick={this.showBar}>Show Bar</MenuItem>*/}
                        <Link to={routes.HOME} style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>Home</MenuItem></Link>
                        <Link to={routes.ACCOUNT} style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>Account</MenuItem></Link>
                        <Link to={routes.PASSWORD_FORGET} style={{ textDecoration: 'none' }}><MenuItem onClick={this.handleClose}>Settings</MenuItem></Link>



                    </Drawer>
                    {/*{content}*/}




                </div>
            </MuiThemeProvider>
        );
    }
}
export default Navigation;


