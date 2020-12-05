import React, { Component } from 'react';
import Masonry from './MasonryComponent';

class Main extends Component {
    render() {
        return (
            <div className="container">
                <Masonry />
            </div>
        );
    }
}

export default Main;