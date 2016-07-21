"use strict";

import React from 'react';

const IMAGES = ["http://www.noclean-nowork.com/wp-content/uploads/2014/09/Twitter_logo_blue-1.png", "https://www.facebookbrand.com/img/fb-art.jpg", "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Snapchat_Logo.png/480px-Snapchat_Logo.png"];
const NAMES = ["Twitter", "Facebook", "Snapchat"];

export default class CountImage extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let n = this.props.number % 3;
        return (
            <div>
                <h4>{NAMES[n]}</h4>
                <img src={IMAGES[n]} />
            </div>
        );
    }
}
