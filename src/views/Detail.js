import React, { Component } from 'react';
import Layout from '../components/Layout';

class Detail extends Component {
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
                <h1>Detail</h1>
            </Layout>
        );
    }
}

export default Detail;
