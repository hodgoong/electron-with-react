import React, { Component } from 'react';
import { voteAngular, voteReact, voteVuejs } from './actions';
import './App.css';
import angularLogo from './assets/images/angular.logo.png';
import reactLogo from './assets/images/react.logo.png';
import vuejsLogo from './assets/images/vue.logo.png';


class App extends Component {
    constructor(props) {
        super(props);
        this.store = this.props.store;
    }

    handleVoteAngular(){
        this.store.dispatch(voteAngular());
    }

    handleVoteReact(){
        this.store.dispatch(voteReact());
    }

    handleVoteVuejs() {
        this.store.dispatch(voteVuejs());
    }

    render() {
        return (
            <div>
                <div className="jumbotron" style={{'textAlign': 'center'}}>
                    <h2>What is your favorite front-end framework in 2017?</h2>
                    <h4>Click on the logos below to vote</h4>
                    <br />
                    <div className="row">
                        <div className="col-xs-offset-3 col-xs-2">
                            <img src={angularLogo} height="96" onClick={this.handleVoteAngular}></img>
                        </div>
                        <div className="col-xs-offset-3 col-xs-2">
                            <img src={reactLogo} height="96" onClick={this.handleVoteAngular}></img>
                        </div>
                        <div className="col-xs-offset-3 col-xs-2">
                            <img src={vuejsLogo} height="96" onClick={this.handleVoteAngular}></img>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
