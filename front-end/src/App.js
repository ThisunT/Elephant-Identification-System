import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Upload from './components/Upload';
import Classification from  './components/Classification';

class App extends Component {
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

export default App;
