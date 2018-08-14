import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "material-ui/styles/withStyles";
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";

import profile from "assets/img/faces/christian.jpg";

import profilePageStyle from "assets/jss/material-kit-react/views/profilePage.jsx";
import AdminPage from "./Admin/AdminPage";
import Camera from "@material-ui/icons/es/Camera";
import Palette from "@material-ui/icons/es/LocationOn";
import NavPills from "../../components/NavPills/NavPills";
import IconButton from "../../components/CustomButtons/IconButton";
import Settings from "@material-ui/icons/es/Settings";
import logo from '../../assets/img/wait.svg';
import CustomDropdown from "../../components/CustomDropdown/CustomDropdown";
import Link from "react-router-dom/es/Link";

class ProfilePage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            username:null,
            admin:null,
            about:null,
            processes:null,
            locations:null,
            institute:null
        }
    }

    componentDidMount(){
        this.props.username
            .then((user) => {
                this.setState({username: user.username, admin: user.admin, about: user.about, processes: user.processes, locations: user.locations, institute: user.institute});
            });
    }

    render() {
        console.log(this.state.admin);
        const { classes } = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );

        if(this.state.admin===null){
            return(
                <div>
                    <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <div>
                            <div className={classes.container}>
                                <img src={logo} align="center" style={{marginLeft: '40%'}} className="App-logo" alt="logo" />
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            if(this.state.admin){
                return (
                    <AdminPage user={this.state}/>
                );
            }
            else {
                return(
                    <div>
                        <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
                        <div className={classNames(classes.main, classes.mainRaised)}>
                            <div>
                                <div>
                                    <CustomDropdown
                                        left
                                        caret={false}
                                        buttonText={
                                            <img
                                                src={Settings}
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
                                            <Link to={"/profile_edit"}><p style={{color: 'black', borderColor:'white'}} >Edit</p></Link>,
                                            <Link to={"/password_change"}><p style={{color: 'black', borderColor:'white'}} >Change Password</p></Link>
                                        ]}
                                    />
                                </div>
                                <div className={classes.container} style={{marginTop:'-3%'}}>
                                    <GridContainer justify="center">
                                        <GridItem xs={12} sm={12} md={6}>
                                            <div className={classes.profile}>
                                                <div>
                                                    <img src={localStorage.getItem("photo")?localStorage.getItem("photo"):profile} alt="..." className={imageClasses} />
                                                </div>
                                                <div className={classes.name}>
                                                    <h3 className={classes.title}>{localStorage.getItem("Name")?localStorage.getItem("Name"): this.state.username}</h3>
                                                </div>
                                            </div>
                                        </GridItem>
                                    </GridContainer>
                                    <div className={classes.description}>
                                        <p>
                                            An artist of considerable range, Chet Faker — the name taken
                                            by Melbourne-raised, Brooklyn-based Nick Murphy — writes,
                                            performs and records all of his own music, giving it a warm,
                                            intimate feel with a solid groove structure.{" "}
                                        </p>
                                    </div>
                                    <GridContainer justify="center">
                                        <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                                            <NavPills
                                                alignCenter
                                                color="primary"
                                                tabs={[
                                                    {
                                                        tabButton: "Saved Processes",
                                                        tabIcon: Camera,
                                                        tabContent: (
                                                            <GridContainer justify="center">
                                                                <GridItem xs={12} sm={12} md={4}>
                                                                    <h1>Item1</h1>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={4}>
                                                                    <h1>Item2</h1>
                                                                </GridItem>
                                                            </GridContainer>
                                                        )
                                                    },
                                                    {
                                                        tabButton: "Locations",
                                                        tabIcon: Palette,
                                                        tabContent: (
                                                            <GridContainer justify="center">
                                                                <GridItem xs={12} sm={12} md={4}>
                                                                    <h1>Item1</h1>
                                                                </GridItem>
                                                                <GridItem xs={12} sm={12} md={4}>
                                                                    <h1>Item2</h1>
                                                                </GridItem>
                                                            </GridContainer>
                                                        )
                                                    }
                                                ]}
                                            />
                                        </GridItem>
                                    </GridContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default withStyles(profilePageStyle)(ProfilePage);