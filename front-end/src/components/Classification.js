import React, { Component } from 'react';
import ResultsTable from "./ResultsTable";
import ResultTableNonElephant from "./ResultTableNonElephant";


class Classification extends Component {
    render(){
        if(this.props.result.data !== undefined){
            if(this.props.result.data===1){
                alert("You cannot add more files here   " + this.props.formData);
                return(
                    <div className="container">
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Well done!</strong> There's an elephant..
                        </div>

                        <ResultsTable FormData={this.props.formData}/>
                    </div>
                )
            }
            else {
                return(
                    <div className="container">
                        <div className="alert alert-dismissible alert-danger">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Oh snap!</strong> There's no elephant..
                        </div>

                        <ResultTableNonElephant FormData={this.props.formData}/>
                    </div>
                )
            }
        }
        else {
            return(
                <div> </div>
            )
        }
    }
}

export default Classification;