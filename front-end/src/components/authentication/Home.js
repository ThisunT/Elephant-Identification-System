import React, { Component } from 'react';

import withAuthorization from './withAuthorization';
import Upload from "../Upload";
import Classification from "../Classification";

class HomePage extends Component {
    constructor(props){
        super(props);
        this.state= {
            results:{}
        }
    }

    updateState(value){
        this.setState({
            results:value
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-md-12">
                    <Upload callUpdate={this.updateState.bind(this)}/>
                    <Classification result={this.state.results}/>
                </div>
            </div>
        );
    }
}

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);