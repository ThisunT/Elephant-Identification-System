import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import {FlatButton, RaisedButton} from "material-ui";
import axios from 'axios';
import './dropzone.css'

const styledropzone = {
    width: 300,
    height: 300,
    borderWidth: 2,
    borderColor: '#666',
    borderStyle: 'dashed',
    borderRadius: 5,
    position: "",

};
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
    handleClear(event){
        var array = [this.state.filesToBeSent]; // make a separate copy of the array
        var index = array.indexOf(event.target.value)
        array.splice(index, 1);
        this.setState({filesToBeSent: array});

        alert("You cannot add more files here");
        document.getElementById('day" + i + "').style.display ='none';


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
                    <div id='day" + i + "'>
                        {filesToBeSent[i][0].name}
                        <MuiThemeProvider>
                            <FlatButton label="Clear" primary={true} onClick={(event) => this.handleClear(event)} />

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
                        <div style={{marginBottom: '5%'}} align="center"></div>
                        <Dropzone accept=".jpg,.png,.zip" style={styledropzone} onDrop={(files) => this.onDrop(files)}>
                            {({ isDragActive, isDragReject, acceptedFiles, rejectedFiles }) => {
                                if (isDragActive) {
                                    return "This file is authorized";
                                }
                                if (isDragReject) {
                                    return "This file is not authorized";
                                }
                                return acceptedFiles.length || rejectedFiles.length
                                    ? `Accepted ${acceptedFiles.length}, rejected ${rejectedFiles.length} files`
                                    : "Try dropping some files.";
                            }}
                            <div>
                                <p>Try dropping the file, or click to select the file to upload.</p>
                                <p>Only *.jpg,*.png and *.zip files will be accepted</p>
                            </div>
                        </Dropzone>
                        <div>
                            {this.state.filesPreview}
                        </div>

                        <div>
                            {this.state.printingmessage}
                        </div>
                        <MuiThemeProvider>

                            <br/>
                            <RaisedButton label="Check Image" primary={true} style={{margin: '1%', align:'centre'}} onClick={(event) => this.handleClick(event)}/>
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