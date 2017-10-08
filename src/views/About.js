import React, { Component } from 'react';
import Layout from '../components/Layout';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'David Rodriguez'
        };
    }

    render() {
        const { username } = this.state;

        return (
            <Layout
                username={ username }
            >
                <h1>About</h1>
            </Layout>
        );
    }
}

export default About;
