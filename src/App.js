import React, { Component } from 'react';
import Websocket from 'react-websocket';
import logo from './logo.svg';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 90
        };
    }

    onOpen = () => {
        console.log('onOpen() fired.');
    }

    handleData = (data) => {
        let result = JSON.parse(data);

        this.setState({
            count: this.state.count + result.movement
        });
    }

    onClose = () => {
        console.log('onClose() fired.');
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h1 className="App-title">Testing Websocket connection</h1>
                </header>
                <p className="App-intro">
                    Count: <strong>{ this.state.count }</strong>
                </p>
                <Websocket
                    url="ws://localhost:8888/live/product/12345/"
                    onOpen={ this.onOpen }
                    onClose={ this.onClose }
                    onMessage={ this.handleData }
                    debug={ true }
                />
            </div>
        );
    }
}

export default App;
