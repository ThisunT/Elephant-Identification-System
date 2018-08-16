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
import FormControlLabel from "@material-ui/core/es/FormControlLabel/FormControlLabel";
import Switch from "@material-ui/core/es/Switch/Switch";
import Checkbox from "@material-ui/core/es/Checkbox/Checkbox";
import Check from "@material-ui/icons/es/Check";
import FiberManualRecord from "@material-ui/icons/es/FiberManualRecord";
import Radio from "@material-ui/core/es/Radio/Radio";

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
            countOn: true,
            classifyingAlgo: "inception",
            path:null
        };
        this.handleChangeEnabled = this.handleChangeEnabled.bind(this);
    }
    handleChangeEnabled(event) {
        this.setState({ classifyingAlgo: event.target.value });
    }

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

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
                    <div className={this.state.processVisible?'fadeIn':'fadeOut'} >
                        <GridContainer style={{marginLeft:'10%'}}>
                            <GridItem xs={12} sm={6} md={4} lg={3}>
                                <div className={classes.title}>
                                    <h3>Need to count?</h3>
                                </div>
                                <div>
                                    <FormControlLabel
                                        control={
                                            <Switch
                                                checked={this.state.countOn}
                                                onChange={this.handleChange("countOn")}
                                                value="countOn"
                                                color="primary"
                                                classes={{
                                                    switchBase: classes.switchBase,
                                                    checked: classes.switchChecked,
                                                    icon: classes.switchIcon,
                                                    iconChecked: classes.switchIconChecked,
                                                    bar: classes.switchBar
                                                }}
                                            />
                                        }
                                        classes={{
                                            label: classes.label
                                        }}
                                        label="Get the Count"
                                    />
                                </div>
                            </GridItem>
                            <GridItem xs={12} sm={6} md={4} lg={3} style={{marginLeft:'40%'}}>
                                <div className={classes.title}>
                                    <h3>Choose classifying algorithm</h3>
                                </div>
                                <div
                                    className={
                                        classes.checkboxAndRadio +
                                        " " +
                                        classes.checkboxAndRadioHorizontal
                                    }
                                >
                                    <FormControlLabel
                                        disabled={this.state.countOn}
                                        control={
                                            <Radio
                                                checked={this.state.classifyingAlgo === "inception"}
                                                onChange={this.handleChangeEnabled}
                                                value="inception"
                                                name="radio button enabled"
                                                aria-label="A"
                                                icon={
                                                    <FiberManualRecord
                                                        className={classes.radioUnchecked}
                                                    />
                                                }
                                                checkedIcon={
                                                    <FiberManualRecord className={classes.radioChecked} />
                                                }
                                                classes={{
                                                    checked: classes.radio
                                                }}
                                            />
                                        }
                                        classes={{
                                            label: classes.label
                                        }}
                                        label="Inception V3"
                                    />
                                </div>
                                <div
                                    className={
                                        classes.checkboxAndRadio +
                                        " " +
                                        classes.checkboxAndRadioHorizontal
                                    }
                                >
                                    <FormControlLabel
                                        disabled={this.state.countOn}
                                        control={
                                            <Radio
                                                checked={this.state.classifyingAlgo === "mobilenet"}
                                                onChange={this.handleChangeEnabled}
                                                value="mobilenet"
                                                name="radio button enabled"
                                                aria-label="B"
                                                icon={
                                                    <FiberManualRecord
                                                        className={classes.radioUnchecked}
                                                    />
                                                }
                                                checkedIcon={
                                                    <FiberManualRecord className={classes.radioChecked} />
                                                }
                                                classes={{
                                                    checked: classes.radio
                                                }}
                                            />
                                        }
                                        classes={{
                                            label: classes.label
                                        }}
                                        label="MobileNet"
                                    />
                                </div>
                                <div
                                    className={
                                        classes.checkboxAndRadio +
                                        " " +
                                        classes.checkboxAndRadioHorizontal
                                    }
                                >
                                    <FormControlLabel
                                        disabled={this.state.countOn}
                                        control={
                                            <Radio
                                                checked={this.state.classifyingAlgo === "resnet50"}
                                                onChange={this.handleChangeEnabled}
                                                value="resnet50"
                                                name="radio button disabled"
                                                aria-label="B"
                                                icon={
                                                    <FiberManualRecord
                                                        className={classes.radioUnchecked}
                                                    />
                                                }
                                                checkedIcon={
                                                    <FiberManualRecord className={classes.radioChecked} />
                                                }
                                                classes={{
                                                    checked: classes.radio,
                                                    disabled: classes.disabledCheckboxAndRadio
                                                }}
                                            />
                                        }
                                        classes={{
                                            label: classes.label
                                        }}
                                        label="ResNet50 from Keras"
                                    />
                                </div>
                            </GridItem>
                        </GridContainer>
                    </div>

                    <div className="col-md-12" align="centre" style={{height:'600px'}}>
                        <div className={this.state.uploadVisible?'fadeIn':'fadeOut'} >
                            <Upload style={{marginRight:"auto",marginLeft:"auto"}} callUpdate={this.updatePath.bind(this)} updateUploadState={this.updateUploadState.bind(this)} uploadvisible={this.state.showUpload}/>
                        </div>
                        <div className={this.state.processVisible?'fadeInn':'fadeOut'} >
                            <ProcessButton path={this.state.path} countOn={this.state.countOn} classifyingAlgo={this.state.classifyingAlgo} updateState={this.updateState.bind(this)} uploadState={this.state.uploadStatus} updateUploadState={this.updateUploadState.bind(this)} changeUploadShow={this.updateShowUpdate.bind(this)}/>
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