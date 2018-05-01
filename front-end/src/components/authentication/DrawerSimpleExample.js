import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';
import {Link} from "react-router-dom";

export default class DrawerSimpleExample extends React.Component {

    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleClose = this.handleClose.bind(this);
    }

    handleToggle() {
        this.setState({open: !this.state.open});
    }

    handleClose() {
        this.props.handleClose();
    }

    render() {
       //console.log(this.props.onToggleDrawer());
        return (
            <div>
                <Drawer
                    width={200}
                    open={this.props.open}
                    onRequestChange={this.handleClose()}
                >
                    <Link to="/home"><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>
                    <Link to="/topics"><MenuItem onTouchTap={this.handleClose}>404</MenuItem></Link>
                </Drawer>
            </div>
        );
    }
}