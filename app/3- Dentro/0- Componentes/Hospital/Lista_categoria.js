import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
} from 'react-native';
import { Card, ListItem} from 'native-base';
import { Actions } from 'react-native-router-flux';

class Registos_Medicos extends Component {
 
  render() {
    return (
    <ListItem>
      <Card noShadow={true} style={{flex:1,width:'90%', height: 80 , borderRadius:5, borderColor:'white'}} >
        <View>
          <View style={{marginRight:'65%'}}>
            <Image source={this.props.capa} style={{width: '64%', height:80, borderRadius:5, marginRight:'1%'}}/>
          </View>
          <View style={{marginLeft:'26%', marginTop:'0%',marginRight:'13%', position:'absolute'}}>
            <Text style={styles.titulo}>{this.props.titulo}</Text>
            <Text style={[styles.descricao, {marginTop:'2%'}]}>{this.props.desc}</Text>
          </View>
          <View style={{marginLeft:'90%', marginTop:'7.5%', position:'absolute'}}>
            <Image source={this.props.icone} style={{width: 10, height:18, borderRadius:5, marginRight:'1%'}}/>
          </View>
        </View>
      </Card>
    </ListItem>
    );
  }
}

export default Registos_Medicos;

const styles = StyleSheet.create({
  /*Textos*/

  titulo: {
    color:"black",
    fontFamily:'Roboto-Bold',
    fontSize: 15,
    textAlign:'left',
    fontWeight:'700',
  },

  descricao: {
    color:"#636363",
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },
});