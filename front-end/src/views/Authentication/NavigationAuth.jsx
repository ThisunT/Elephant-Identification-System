import navbarsStyle from "../../assets/jss/material-kit-react/views/componentsSections/navbarsStyle";
import withStyles from "material-ui/styles/withStyles";
import Header from "../../components/Header/Header";
import List from "@material-ui/core/es/List/List";
import ListItem from "@material-ui/core/es/ListItem/ListItem";
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import React from "react";
import profileImage from "assets/img/faces/avatar.jpg";
import { Link } from "react-router-dom";
import Button from "../../components/CustomButtons/Button";
import Home from "@material-ui/icons/es/Home";
import {auth} from "../../firebase";
import HeaderLinks from "../../components/Header/HeaderLinks";

class NavigationAuth extends React.Component {

    onSignOutClicked = function(event){
        auth.doSignOut();
        localStorage.clear();
        event.preventDefault();
    };




    render() {
        const {classes, ...rest } = this.props;
        return (
            <div>
                <Header
                    brand="Elphas"
                    rightLinks={<HeaderLinks onSignOutClicked={this.onSignOutClicked}/>}
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 200,
                        color: "white"
                    }}
                    {...rest}
                />
            </div>
        );
    }
}

export default withStyles(navbarsStyle)(NavigationAuth);