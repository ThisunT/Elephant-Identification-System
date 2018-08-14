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
import Classification from "./Classification";
import ProcessButton from "./ProcessButton";
import Upload from "./Upload";
import './home.css';

class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.state= {
            open: false,
            showUpload: true,
            uploadVisible: true,
            processVisible: false,
            results:{},
            uploadStatus:0,
            path:null
        }
    }

    updateState(value){
        this.setState({
            results:value
        });
    }

    updatePath(value){
        this.setState({
            path:value
        });
    }

    updateShowUpdate(value){
        this.setState({
            showUpload:value
        });
    }

    updateUploadState(value,booleanValue){
        this.setState({
            uploadStatus:value,
            uploadVisible: false,
            processVisible: booleanValue
        });
    }

    render() {
        const { classes } = this.props;
        return (
            <div>
                <Parallax filter image={require("../../images/pa1.jpg")} />
                <div className={classNames(classes.main, classes.mainRaised)}>
                    <div className="col-md-12" align="centre" style={{height:'600px'}}>
                        <div className={this.state.uploadVisible?'fadeIn':'fadeOut'} >
                            <Upload style={{marginRight:"auto",marginLeft:"auto"}} callUpdate={this.updatePath.bind(this)} updateUploadState={this.updateUploadState.bind(this)} uploadvisible={this.state.showUpload}/>
                        </div>
                        <div className={this.state.processVisible?'fadeInn':'fadeOut'} >
                            <ProcessButton path={this.state.path} updateState={this.updateState.bind(this)} uploadState={this.state.uploadStatus} updateUploadState={this.updateUploadState.bind(this)} changeUploadShow={this.updateShowUpdate.bind(this)}/>
                        </div>
                        <div>
                            <Classification result={this.state.results} path={this.state.path}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(profilePageStyle)(HomePage);