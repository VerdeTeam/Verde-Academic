'use strict';

import React, {Component} from 'react';

import {
  Image,
} from 'react-native';


class FooterIcon extends Component {
    render() {
        return (
            <Image style={{ marginTop:this.props.top, marginLeft: this.props.left, width: this.props.w, height: this.props.h}}
            source = {this.props.objeto}/>
        );
    }
};

export default FooterIcon;