import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
} from 'react-native';
import { Card} from 'native-base';

class Artigo_Fotos extends Component {
 
  render() {
    return (
        <View>  
            <Card style={{flex:1,width:'90%', height: 98 ,marginTop:'5%',marginLeft:'6%', marginRight:'6%', borderRadius:5, borderColor:'white'}} >
                <View>
                <View style={{marginRight:'65%'}}>
                    <Image source={this.props.capa} style={{width: '100%', height:98, borderRadius:5, marginRight:'1%'}}/>
                </View>
                <View style={{marginLeft:'37%', marginTop:'0%',marginRight:'12%', position:'absolute'}}>
                    <Text style={styles.titulo}>{this.props.titulo}</Text>
                    <Text style={[styles.descricao, {marginTop:'2%'}]}>{this.props.desc}</Text>
                </View>
                <View style={{marginLeft:'90%', marginTop:'9.5%', position:'absolute'}}>
                    <Image source={this.props.icone} style={{width: 10, height:18, borderRadius:5, marginRight:'1%'}}/>
                </View>
                </View>
            </Card>
        </View>      
    );
  }
}

export default Artigo_Fotos;

const styles = StyleSheet.create({
  /*Textos*/

  titulo: {
    color:"black",
    fontFamily:'Roboto-Bold',
    fontSize: 16,
    textAlign:'left',
    fontWeight:'700',
  },

  descricao: {
    color:"black",
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },
});