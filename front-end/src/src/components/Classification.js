import React, { Component } from 'react';


class Classification extends Component {
    render(){
        if(this.props.result.data !== undefined){
            if(this.props.result.data===1){
                return(
                    <div className="container">
                        <div className="alert alert-dismissible alert-success">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Well done!</strong> There's an elephant.
                        </div>
                    </div>
                )
            }
            else {
                return(
                    <div className="container">
                        <div className="alert alert-dismissible alert-danger">
                            <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <strong>Oh snap!</strong> There's no elephant.
                        </div>
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