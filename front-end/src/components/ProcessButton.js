import React, {Component} from 'react';
import axios from "axios/index";
import {auth, database} from '../firebase/index'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from "@material-ui/core/es/Button/Button";
import Slide from '@material-ui/core/Slide';
import * as fs from "fs";



function Transition(props) {
    return <Slide direction="up" {...props} />;
}

class ProcessButton extends Component {
    state = {
        open: false,
    };

    getResults(event){
        const props = this.props;

        this.handleClose();
        var path = props.path.data;
        const url = 'http://localhost:5000/process/'+path;
        const imgUrl = 'http://localhost:5000/getImage/'+path;


        axios.post(url)
            .then(function (response) {
                let i;
                const images = response.data;
                for (i=0;i<images.length;i++){
                    axios.get(imgUrl+'/'+images[i][0])
                        .then(function (image) {
                            // convert to Base64
                            console.log(image);
                            // const buffer = Buffer.from(image.data, 'utf8');
                            // fs.writeFileSync('/', buffer);

                            var b64Response = window.btoa(unescape(encodeURIComponent(image.data)));
                            console.log(b64Response);
                            // create an image
                            var outputImg = document.getElementById('image');
                            outputImg.src = 'data:image/jpg;base64,'+b64Response;

                        })
                        .catch(function (err) {
                            console.log(err);
                        })
                }
                setTimeout(function() {
                    props.updateState(response);
                }, 1400);

                props.updateUploadState(1,false);

                setTimeout(function() {
                    props.changeUploadShow(false);
                }, 400);

                setTimeout(function() {
                    props.updateUploadState(0,false);
                }, 1200);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    handleClickOpen = () => {
        this.setState({ open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    saveProcess(event) {
        this.handleClose();
        database.updateProcess(auth.getUser().uid,this.props.path.data);
        window.location.reload();
    }


    render() {
        const props = this.props;
        if(props.uploadState===1){
            return (
                <div>
                    <img src="" id="image" />
                    <Button variant="raised" color="secondary" onClick={this.handleClickOpen}>Let's move on</Button>
                    <Dialog
                        open={this.state.open}
                        TransitionComponent={Transition}
                        keepMounted
                        onClose={this.handleClose}
                        aria-labelledby="alert-dialog-slide-title"
                        aria-describedby="alert-dialog-slide-description"
                    >
                        <DialogTitle id="alert-dialog-slide-title">
                            {"Save or Proceed? :)"}
                        </DialogTitle>
                        <DialogContent>
                            <DialogContentText id="alert-dialog-slide-description">
                                If you are in a hurry, you can save this process and get results later as processing may take some time.
                            </DialogContentText>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={(event) => this.saveProcess(event)} color="primary">
                                Save Process
                            </Button>
                            <Button onClick={(event) => this.getResults(event)} color="primary">
                                Process Now
                            </Button>
                        </DialogActions>
                    </Dialog>
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

export default ProcessButton;