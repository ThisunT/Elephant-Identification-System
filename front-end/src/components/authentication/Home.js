import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import Upload from "../Upload";
import Classification from "../Classification";
import ProcessButton from "../ProcessButton"
import './home.css';
import { Parallax, Background } from 'react-parallax';


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
        return (
            <div>
                <Parallax

                    bgImage={require('../images/pa1.jpg')}
                    bgImageAlt="the cat"
                    strength={200}
                >

                    <div style={{ height: '640px' }} />
                </Parallax>
                <div className="col-md-12" align="centre">
                    <div className={this.state.uploadVisible?'fadeIn':'fadeOut'} >
                        <Upload style={{marginRight:"auto",marginLeft:"auto"}} callUpdate={this.updatePath.bind(this)} updateUploadState={this.updateUploadState.bind(this)} uploadvisible={this.state.showUpload}/>
                    </div>
                    <div className={this.state.processVisible?'fadeIn':'fadeOut'} >
                        <ProcessButton path={this.state.path} updateState={this.updateState.bind(this)} uploadState={this.state.uploadStatus} updateUploadState={this.updateUploadState.bind(this)} changeUploadShow={this.updateShowUpdate.bind(this)}/>
                    </div>
                    <div>
                        <Classification result={this.state.results} path={this.state.path}/>
                    </div>
                </div>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);