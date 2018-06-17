import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import Upload from "../Upload";
import Classification from "../Classification";
import ProcessButton from "../ProcessButton"
import './home.css';

class HomePage extends Component {
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
        console.log(this.state.uploadStatus);
        return (
            <div>
                <div className="col-md-12" align="center">
                    <div className={this.state.uploadVisible?'fadeIn':'fadeOut'} >
                        <Upload style={{marginRight:"auto",marginLeft:"auto"}} callUpdate={this.updatePath.bind(this)} updateUploadState={this.updateUploadState.bind(this)} uploadvisible={this.state.showUpload}/>
                    </div>
                    <div></div>
                    <div className={this.state.processVisible?'fadeIn':'fadeOut'} >
                        <ProcessButton path={this.state.path} updateState={this.updateState.bind(this)} uploadState={this.state.uploadStatus} updateUploadState={this.updateUploadState.bind(this)} changeUploadShow={this.updateShowUpdate.bind(this)}/>
                    </div>
                    <div>
                        <Classification result={this.state.results}/>
                    </div>
                </div>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);