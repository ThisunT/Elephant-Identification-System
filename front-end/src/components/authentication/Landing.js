import React from 'react';
import {cyan500} from "material-ui/styles/colors";
import Paper from 'material-ui/Paper';
import CardExampleWithAvatar from "./CardExampleWithAvatar";
import DemoCarousel from "./DemoCarousel";

const font = "'Varela Round', sans-serif";

const style = {
    height: '65%',
    width: '60%',
    margin: '5%',
    textAlign: 'center',
    display: 'inline-block',
};
const stylepara = {
    marginLeft: '15px',
}

const LandingPage = () =>
    <div>

            <DemoCarousel />

        <div align="center">
            <br/>
            <h1 style={{fontFamily: font, color: cyan500}}>Elephant Recognizer</h1>
            <p style={style}>Once common throughout Africa and Asia, elephant numbers were severely depleted during the
                20th century,
                largely due to the massive ivory trade. While some populations are now stable and growing, poaching,
                conflict and habitat destruction continue to threaten the species.</p>
        </div>
        <div align="center">
            <Paper style={style} zDepth={2}>
                <h1 style={{fontFamily: font, color: cyan500}}>Facts</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <p align="justify" style={stylepara}>Elephant Recognizer attempt to detect and classify
                            elephants in drone images using deep
                            learning.
                            This is not a trivial task even for a human since elephants naturally blend in with their
                            surroundings,
                            making it a challenging and meaningful problem to solve. Possible applications of this work
                            extend into general animal conservation and search-and-rescue operations, with natural
                            extension
                            to drone imagery as input source.</p>
                        <p align="justify" style={stylepara}>First of all, we send drones to capture images in a certain
                            area. After collecting drone
                            images we can upload photos to the system and detect whether there are elephants in those
                            photos and get a count of them.To achieve this goal we need to have quality number of photos
                            and a trained model which can identify elephants. We run the images through filters and
                            clarify the identification.When we train more images using the model the accuracy rate
                            increase.</p>
                    </div>
                    <div className="col-lg-6">
                        <CardExampleWithAvatar/>
                    </div>
                </div>
            </Paper>

            <Paper style={style} zDepth={2}>
                <h1 style={{fontFamily: font, color: cyan500}}>Demonstration</h1>
                <img src={require('../images/.dropzone.gif')}/>
            </Paper>

        </div>

    </div>


export default LandingPage;