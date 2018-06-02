import React, { Component } from 'react';
import ResultsTable from "./ResultsTable";

class Classification extends Component {
    render(){
        if(this.props.result.data !== undefined){
            console.log(this.props.result.data[0][0]);
            return(
                <ResultsTable results={this.props.result.data}/>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
}

export default Classification;