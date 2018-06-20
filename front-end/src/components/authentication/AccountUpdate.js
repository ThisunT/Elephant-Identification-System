import React from 'react';
import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization';
import AvatarImage from './AvatarImage';
import Paper from 'material-ui/Paper';
import '../../App.css';
import {cyan500} from 'material-ui/styles/colors';
import PopoverExampleSimple from './AccountSettings';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import * as routes from "../../constants/routes";
import {Link} from 'react-router-dom';



const font = "'Varela Round', sans-serif";

const style = {
      height: '750px',
      width: '550px',
      margin: '10%',
      textAlign: 'center',
      display: 'inline-block',
};

const AccountPage = () =>
      <AuthUserContext.Consumer>
            {authUser =>

                  <div>
                        <div className="row">
                              <div className="col-lg-4">
                                    <img src={require('../images/profile.jpg')} width="2800px" />
                              </div>

                              <div className="col-lg-4">
                                    <div align="center">
                                          <Paper style={style} zDepth={2} >
                                                <AvatarImage/>
                                                <h1 style={{font, color: cyan500 ,fontSize:20 }}> My Account: {authUser.email}</h1>
                                                <br />
                                                <h1 style={{font, color: cyan500 ,fontSize:30 }}>PROFILE</h1>
                                                <br />
                                                <TextField
                                                      hintText="User Name"
                                                /><br />
                                                <TextField
                                                      hintText="Birthday"
                                                /><br />
                                                <TextField
                                                      hintText="About"
                                                /><br />
                                                <TextField
                                                      hintText="College"
                                                /><br />
                                                <TextField
                                                      hintText="Country"
                                                /><br />
                                                <TextField
                                                      hintText="Processes"
                                                /><br />
                                                <TextField
                                                      hintText="Locations"
                                                /><br />

                                                <RaisedButton primary={true} style={{fontFamily: font, margin: '5%'}} type="submit">
                                                      Update
                                                </RaisedButton>

                                                <Link to={routes.ACCOUNT}>
                                                <RaisedButton primary={true} style={{fontFamily: font, margin: '5%'}} >
                                                      Back
                                                </RaisedButton>
                                                </Link>
                                          </Paper>
                                    </div>

                              </div>

                              <div className="col-lg-4" align="right">
                                    <PopoverExampleSimple />
                              </div>

                        </div>

                  </div>
            }
      </AuthUserContext.Consumer>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);