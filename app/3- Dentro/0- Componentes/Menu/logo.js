import React, {Component} from 'react';
import { Image } from 'react-native';


class Logo extends Component {

  render(){
    return(
        <Image style={{width:this.props.largura, height:this.props.altura}}source = {this.props.logo} />
    )
  }
}

export default Logo;