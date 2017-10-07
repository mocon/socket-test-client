import React, { Component } from 'react';
import Websocket from 'react-websocket';
import logo from './logo.svg';
import './App.css';

const WEBSOCKET_URL = 'ws://localhost:8080';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            message: null
        };
    }

    onOpen = () => {
        console.log('Connection opened.');
    }

    handleData = (data) => {
        this.setState({ message: data });
    }

    onClose = () => {
        // Connection closed, set message back to null
        this.setState({ message: null });
    }

    render() {
        const { message } = this.state;

        return (
            <div className="App">
                <header className="App-header">
                    <img src={ logo } className="App-logo" alt="logo" />
                    <h1 className="App-title">Testing websocket connection</h1>
                </header>
                <p className="App-intro">
                    {
                        (message !== null)
                        ? <p><strong>{ message }</strong></p>
                        : <p>No data coming from websocket</p>
                    }
                </p>
                <Websocket
                    url={ WEBSOCKET_URL }
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
