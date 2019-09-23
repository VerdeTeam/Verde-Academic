import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image, 
  Text,
} from 'react-native';
import { Card} from 'native-base';

class cartao extends Component {
 
  render() {
    return (  
        <Card style={styles.card}>
            <View style={{width:'100%', height: 100}}>
                <View>
                    <Image style={styles.card_image} source={this.props.capa} />
                </View>
            </View>
            <View style={styles.info_apoio}>
                <Image style={{ marginLeft:'4%',top:'20%' ,width:10, height:10 , position:'absolute'}}
                source = {require('../../../../assets/icon/hospital0.png')}/>
                <Text style={styles.subtitulo_apoio}>{this.props.nome}</Text>
                <Image style={{ marginLeft:'4%',top:'69%' ,width:10, height:15 , position:'absolute'}}
                source = {require('../../../../assets/icon/radar1.png')}/>
                <Text style={styles.sub_subtitulo_apoio}>{this.props.distancia}</Text>
                
            </View>
        </Card>
    );
  }
}

const styles = StyleSheet.create({
 //TEXTO

 info_apoio:{
  marginTop: '2%',
  marginBottom: 10,
//  position:'absolute',
  zIndex:30,
 // backgroundColor:'blue',
 },

 subtitulo_apoio: {
  color:'#5F6267',
  fontFamily:'Roboto-Bold',
  fontSize: 14,
  textAlign:'left',
  marginLeft:'20%',
},
 sub_subtitulo_apoio: {
    color:'#5F6267',
    fontFamily:'Roboto-Regular',
    fontSize: 12,
    marginLeft:'20%',
    textAlign:'left',
  },


 card:{
  elevation:1,
  width:'44%',
  height:'auto',
  marginLeft:'3%', 
  marginRight:'3%', 
  borderRadius:13, 
  borderColor:'transparent',
  //position:'absolute',
}, 
card_image:{
  width:'100%', 
  height: '100.2%', 
 // borderBottomLeftRadius:18,
 // borderBottomRightRadius:18, 
 // borderRadius:13,
  borderTopLeftRadius:13,
  borderTopRightRadius:13,
  borderColor:'transparent',
},
card_popup:{
  width:'100%', 
  height: '100%', 
 // borderBottomLeftRadius:18,
 // borderBottomRightRadius:18, 
  borderRadius:18,
  borderColor:'transparent',
}
});

export default cartao;