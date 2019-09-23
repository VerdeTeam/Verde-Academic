import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
} from 'react-native';
import { Card} from 'native-base';
import { Surface} from 'react-native-paper';

class Notificacao extends Component {
 
  render() {
    return (

    <View style={{marginLeft:'3%', marginRight:'3%'}}>
      <Card style={{elevation: 2,flex:1,width:'100%', height: 80 , borderRadius:12, borderColor:'white',}} >
        <View style={{marginRight:'85%',marginTop:'4%'}}>
          <Image source={this.props.capa} style={{marginLeft:'16%',width: this.props.altura, height: this.props.largura, borderRadius:5, marginTop:this.props.topo}}/>
        </View>
        <View style={{marginLeft:'18%', marginTop:'2%',marginRight:'13%', position:'absolute'}}>
          <Text style={styles.titulo2}>{this.props.titulo}</Text>
          <Text style={[styles.descricao2, {marginTop:'2%'}]}>{this.props.desc}</Text>
        </View>
        <View style={{marginLeft:'90%', marginTop:'7.5%', position:'absolute'}}>
          <Image source={this.props.icone} style={{width: 10, height:18, borderRadius:5, marginRight:'1%'}}/>
        </View>
      </Card>     
    </View>
    
    );
  }
}

export default Notificacao;

const styles = StyleSheet.create({
 
  titulo2: {
    color:"black",
    fontFamily:'Roboto-Bold',
    fontSize: 15,
    textAlign:'left',
    fontWeight:'700',
  },

  descricao2: {
    color:"#636363",
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },
});