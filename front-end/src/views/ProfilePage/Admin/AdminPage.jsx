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
import Camera from "@material-ui/icons/es/Camera";
import Palette from "@material-ui/icons/es/LocationOn";
import NavPills from "../../../components/NavPills/NavPills";
import Settings from "@material-ui/icons/es/Settings";
import CustomDropdown from "../../../components/CustomDropdown/CustomDropdown";
import Link from "react-router-dom/es/Link";
import {database} from "../../../firebase/index";
import CustomTabs from "../../../components/CustomTabs/CustomTabs";
import Face from "@material-ui/icons/es/Face";
import Chat from "@material-ui/icons/es/Chat";
import Build from "@material-ui/icons/es/Build";
import People from "@material-ui/icons/es/People";
import Refresh from "@material-ui/icons/es/Refresh";
import Paper from "@material-ui/core/es/Paper/Paper";
import Table from "@material-ui/core/es/Table/Table";
import TableHead from "@material-ui/core/es/TableHead/TableHead";
import TableRow from "@material-ui/core/es/TableRow/TableRow";
import TableCell from "@material-ui/core/es/TableCell/TableCell";
import TableBody from "@material-ui/core/es/TableBody/TableBody";

const styles = {
    textCenter: {
        textAlign: "center"
    }
};

class AdminPage extends React.Component {
    constructor(props){
        super(props);

        this.state={
            username:null,
            admin:null,
            about:null,
            processes:null,
            peoples: null,
            locations:null,
            institute:null
        }
    }

    componentDidMount(){
        this.setState(this.props.user);
        const snapshotToArray = Object.entries(this.props.user.processes).map(e => e[1]);
        this.setState({
            processes: snapshotToArray
        })
        const snapshotToArray2 = Object.entries(database.getUsers()).map(e => e[1]);
        this.setState({
            peoples: snapshotToArray2

        })
    }


    render() {
        const {classes} = this.props;
        const imageClasses = classNames(
            classes.imgRaised,
            classes.imgRoundedCircle,
            classes.imgFluid
        );
        console.log(this.state.peoples);

        if (this.state.username !== null) {
            return (
                <div>
                    <Parallax small filter image={require("assets/img/profile-bg.jpg")} />
                    <div className={classNames(classes.main, classes.mainRaised)}>
                        <div>
                            <div style={{marginLeft:'90%'}}>
                                <CustomDropdown
                                    left
                                    caret={false}
                                    buttonText={
                                        <Settings/>
                                    }
                                    buttonProps={{
                                        className:
                                        classes.navLink + " " + classes.imageDropdownButton,
                                        color: "transparent"
                                    }}
                                    dropdownList={[
                                        <Link to={"/profile_edit"}><p style={{color: 'black', textShadow: '1px 1px 1px white'}} >Edit</p></Link>,
                                        <Link to={"/password_change"}><p style={{color: 'black', textShadow: '1px 1px 1px white'}} >Change Password</p></Link>
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
                                                <h5>{this.state.institute}</h5>
                                            </div>
                                        </div>
                                    </GridItem>
                                </GridContainer>

                                <div className={classes.description}>
                                    <p>
                                        {this.state.about}
                                    </p>
                                </div>
                                <div className="row">
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
                                                            {this.state.processes
                                                                    .map(process => {
                                                                    return(
                                                                        <div className="center">
                                                                            <h5>{process}</h5>
                                                                            <br/>
                                                                        </div>
                                                                    )
                                                                })
                                                            }]
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
                                                },
                                                {
                                                    tabButton: "Users",
                                                    tabIcon: People,
                                                    tabContent: (
                                                        <GridContainer justify="center">
                                                            <Paper className={classes.root}>
                                                                <Table className={classes.table}>
                                                                    <TableHead>
                                                                        <TableRow>
                                                                            <TableCell>Email</TableCell>
                                                                            <TableCell>About</TableCell>
                                                                            <TableCell>Country</TableCell>
                                                                            <TableCell>Institute</TableCell>

                                                                        </TableRow>
                                                                    </TableHead>
                                                                    <TableBody>
                                                                        {this.state.peoples.map(people => {
                                                                            return (
                                                                                <TableRow key={people.id}>

                                                                                    <TableCell>{people.email}</TableCell>
                                                                                    <TableCell>{people.about}</TableCell>
                                                                                    <TableCell>{people.country}</TableCell>
                                                                                    <TableCell>{people.institute}</TableCell>
                                                                                </TableRow>
                                                                            );
                                                                        })}
                                                                    </TableBody>
                                                                </Table>
                                                            </Paper>
                                                        </GridContainer>
                                                    )
                                                }

                                            ]}
                                        />
                                    </GridItem>
                                </GridContainer>

                                &nbsp;

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default withStyles(profilePageStyle)(AdminPage);

