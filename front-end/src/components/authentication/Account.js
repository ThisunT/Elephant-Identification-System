import React from 'react';
import AuthUserContext from './AuthUserContext';
import withAuthorization from './withAuthorization';
import AvatarImage from './AvatarImage';
import Paper from 'material-ui/Paper';
import '../../App.css';
import {cyan500} from 'material-ui/styles/colors';
import PopoverExampleSimple from './AccountSettings';


import {Tabs, Tab} from 'material-ui/Tabs';

const styles = {
      headline: {
            fontSize: 24,
            paddingTop: 16,
            marginBottom: 12,
            fontWeight: 400,
      },
};

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
                                          <h1 style={{font, color: cyan500 ,fontSize:20 }}>{authUser.email}</h1>
                                          <br />
                                          <h1 style={{font, color: cyan500 ,fontSize:30 }}> name </h1>
                                          <br />
                                          <h1 style={{font, color: cyan500 ,fontSize:30 }}> about </h1>

                                          <Tabs>
                                                <Tab label="Locations" >
                                                      <div>
                                                            <h2 style={styles.headline}>Location Details</h2>
                                                            <p>
                                                                  This is an example tab.
                                                            </p>

                                                      </div>
                                                </Tab>
                                                <Tab label="Processes" >
                                                      <div>
                                                            <h2 style={styles.headline}>Processes Status</h2>
                                                            <p>
                                                                  This is another example tab.
                                                            </p>
                                                      </div>
                                                </Tab>
                                          </Tabs>



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