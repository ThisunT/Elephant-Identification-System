import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Dropzone from 'react-dropzone';
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import {RaisedButton, Toolbar} from "material-ui";
import axios from 'axios';
<script src="dropzone.js"></script>



class Upload extends Component {
    constructor(props){
        super(props);
        this.state={
            filesPreview:[],
            filesToBeSent:[],
            printcount:10,
        }
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
                            <a href="#"><FontIcon
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
        return (
            <div className="App">

                <center>
                    <div style={{marginBottom: '5%'}}></div>
                    <Dropzone onDrop={(files) => this.onDrop(files)}>
                        <div>Try dropping the file, or click to select the file to upload.</div>
                    </Dropzone>
                    <div>
                        {this.state.filesPreview}
                    </div>

                    <div>
                        {this.state.printingmessage}
                    </div>
                    <MuiThemeProvider>
                        <RaisedButton label="Check Image" primary={true} style={{margin: '2%'}} onClick={(event) => this.handleClick(event)}/>
                    </MuiThemeProvider>
                </center>
            </div>
        );
    }
}

export default Upload;