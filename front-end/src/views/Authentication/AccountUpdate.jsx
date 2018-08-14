import React from 'react';
import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import {Link} from 'react-router-dom';
import Button from "@material-ui/core/es/Button/Button";



const font = "'Varela Round', sans-serif";

const style = {
      height: '750px',
      width: '550px',
      margin: '10%',
      textAlign: 'center',
      display: 'inline-block',
};

const AccountUpdatePage = () =>
      <AuthUserContext.Consumer>
            {authUser =>

                  <div>
                        <div className="row">
                              <div className="col-lg-4">
                                    <img src={require('../../images/profile.jpg')} width="2800px" />
                              </div>

                              <div className="col-lg-4">
                                    <div align="center">
                                          <Paper style={style} zDepth={2} >
                                                <h1> My Account: {authUser.email}</h1>
                                                <br />
                                                <h1>PROFILE</h1>
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

                                                <Button primary={true} style={{fontFamily: font, margin: '5%'}} type="submit">
                                                      Update
                                                </Button>

                                                <Link to={"/profile"}>
                                                <Button primary={true} style={{fontFamily: font, margin: '5%'}} >
                                                      Back
                                                </Button>
                                                </Link>
                                          </Paper>
                                    </div>
                              </div>
                        </div>

                  </div>
            }
      </AuthUserContext.Consumer>


const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountUpdatePage);