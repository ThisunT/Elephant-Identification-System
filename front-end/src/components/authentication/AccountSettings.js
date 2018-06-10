import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import * as routes from "../../constants/routes";
import {Link} from 'react-router-dom';
import SignOutButton from './SignOut';


class PopoverExampleSimple extends React.Component {

      constructor(props) {
            super(props);

            this.state = {
                  open: false,
            };
      }

      handleClick = (event) => {
            // This prevents ghost click.
            event.preventDefault();

            this.setState({
                  open: true,
                  anchorEl: event.currentTarget,
            });
      };

      handleRequestClose = () => {
            this.setState({
                  open: false,
            });
      };

      render() {
            return (
                  <div>
                        <RaisedButton
                              onClick={this.handleClick}
                              label="Settings"
                        />
                        <Popover
                              open={this.state.open}
                              anchorEl={this.state.anchorEl}
                              anchorOrigin={{horizontal: 'left', vertical: 'top'}}
                              targetOrigin={{horizontal: 'left', vertical: 'top'}}
                              onRequestClose={this.handleRequestClose}
                        >
                              <Menu>

                                    <Link to={routes.PASSWORD_CHANGE}><MenuItem primaryText="Change Password" /></Link>
                                    <Link to={routes.PASSWORD_FORGET}><MenuItem primaryText="Reset Password" /></Link>
                                    <SignOutButton/>
                              </Menu>
                        </Popover>
                  </div>
            );
      }
}

export default PopoverExampleSimple;