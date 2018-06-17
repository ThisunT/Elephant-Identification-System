import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';
import FontIcon from 'material-ui/FontIcon';
import {blue500} from 'material-ui/styles/colors';
import {RaisedButton} from "material-ui";
import axios from 'axios';
import './dropzone.css'

class Upload extends Component {
    constructor(props){
        super(props);
        this.state={
            filesPreview:[],
            filesToBeSent:[],
            printcount:10,
        }
    }

    updateFiles(value){
        this.setState({
            filesPreview:value,
            filesToBeSent:value
        });
    }

    handleClick(event){
        const update = this.props;
        if(this.state.filesToBeSent.length>0){
            var filesArray = this.state.filesToBeSent;

            const url = 'http://localhost:5000/upload';
            const formData = new FormData();
            formData.append('file',filesArray[0][0]);
            const config = {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            };

            axios.post(url, formData,config)
                .then(function (response) {
                    update.callUpdate(response);
                    update.updateUploadState(1,true);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        else{
            alert("Please upload some files first");
        }
    }

    onDrop(acceptedFiles, rejectedFiles) {
        // console.log('Accepted files: ', acceptedFiles[0].name);
        var filesToBeSent=this.state.filesToBeSent;
        if(filesToBeSent.length < this.state.printcount){
            filesToBeSent.push(acceptedFiles);
            var filesPreview=[];
            for(var i in filesToBeSent){
                filesPreview.push(
                    <div>
                        {filesToBeSent[i][0].name}
                        <MuiThemeProvider>
                            <a onClick={this.updateFiles([])}><FontIcon
                                className="material-icons customstyle"
                                color={blue500}
                                styles={{fontWeight: 1}}
                            >clear</FontIcon></a>
                        </MuiThemeProvider>
                    </div>
                )
            }
            this.setState({filesToBeSent,filesPreview});
        }
        else{
            alert("You cannot add more files here")
        }
    }
    render() {
        var props=this.props;
        if(props.uploadvisible){
            return (
                <div className="App">

                    <center>
                        <div style={{marginBottom: '5%'}}></div>
                        <Dropzone accept="image/jpeg, image/png" onDrop={(files) => this.onDrop(files)}>
                            <div>
                                <p>Try dropping the file, or click to select the file to upload.</p>
                                <p>Only *.jpeg and *.png images will be accepted</p>
                            </div>
                        </Dropzone>
                        <div>
                            {this.state.filesPreview}
                        </div>

                        <div>
                            {this.state.printingmessage}
                        </div>
                        <MuiThemeProvider>
                            <RaisedButton label="Check Image" primary={true} style={{margin: '2%', align:'centre'}} onClick={(event) => this.handleClick(event)}/>
                        </MuiThemeProvider>
                    </center>
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

export default Upload;