import React, { Component } from 'react';
// import Websocket from 'react-websocket';

import Layout from '../components/Layout';
// import logo from '../images/logo.svg';

// const WEBSOCKET_URL = 'ws://localhost:8080';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'David Rodriguez',
            message: null
        };
    }

    onOpen = () => {
        // console.log('Connection opened.');
    }

    handleData = (data) => {
        this.setState({ message: data });
    }

    onClose = () => {
        // Connection closed, set message back to null
        this.setState({ message: null });
    }

    render() {
        const { username } = this.state;

        return (
            <Layout
                username={ username }
            >
                <h1>Home</h1>
                {/*
                <Websocket
                    url={ WEBSOCKET_URL }
                    onOpen={ this.onOpen }
                    onClose={ this.onClose }
                    onMessage={ this.handleData }
                    debug={ true }
                />
                {
                    (message !== null)
                    ? <strong>{ message }</strong>
                    : <span>No data coming from websocket</span>
                }
                */}
            </Layout>
        );
    }
}

export default Home;
