/* global it */
import React from 'react';
import ReactDOM from 'react-dom';
import About from './views/About';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<About />, div);
});