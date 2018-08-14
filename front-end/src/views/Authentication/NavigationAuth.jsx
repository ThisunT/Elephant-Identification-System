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
import {auth} from "../../firebase";

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
                    rightLinks={
                        <List className={classes.list}>
                            <ListItem className={classes.listItem}>
                                <CustomDropdown
                                    left
                                    caret={false}
                                    buttonText={
                                        <img
                                            src={localStorage.getItem("photo")?localStorage.getItem("photo"):profileImage}
                                            className={classes.img}
                                            alt="profile"
                                        />
                                    }
                                    buttonProps={{
                                        className:
                                        classes.navLink + " " + classes.imageDropdownButton,
                                        color: "transparent"
                                    }}
                                    dropdownList={[
                                        <Link to={"/profile"}><p style={{color: 'black'}} >Me</p></Link>,
                                        {divider: true},
                                        <p  style={{padding:'0px'}} onClick={this.onSignOutClicked}>Sign Out</p>,
                                    ]}
                                />
                            </ListItem>
                        </List>
                    }
                    fixed
                    color="transparent"
                    changeColorOnScroll={{
                        height: 300,
                        color: "white"
                    }}
                    {...rest}
                />
            </div>
        );
    }
}

export default withStyles(navbarsStyle)(NavigationAuth);