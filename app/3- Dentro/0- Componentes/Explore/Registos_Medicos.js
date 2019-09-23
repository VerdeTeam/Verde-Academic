import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
} from 'react-native';
import { Card} from 'native-base';

class Registos_Medicos extends Component {
 
  render() {
    return (
      <View style={{marginLeft:'3%', marginRight:'3%'}}>
        <Card style={{elevation: 0,flex:1,width:'100%', height: 50 , borderRadius:12, borderColor:'white',}} >
          <View style={{marginRight:'65%'}}>
            <Image source={this.props.capa} style={{width: '64%', height:50, borderBottomLeftRadius:12, borderTopLeftRadius:12, marginRight:'1%'}}/>
          </View>
          <View style={{backgroundColor:'pink',marginLeft:'26%', marginTop:'2%',marginRight:'13%', position:'absolute'}}>
            <Text style={styles.titulo2}>{this.props.titulo}</Text>
          </View>
          <View style={{marginLeft:'90%', marginTop:'7.5%', position:'absolute'}}>
            <Image source={this.props.icone} style={{width: 10, height:18, borderRadius:5, marginRight:'1%'}}/>
          </View>
        </Card>     
      </View>
    );
  }
}

export default Registos_Medicos;

const styles = StyleSheet.create({
  titulo2: {
    color:"black",
    fontFamily:'Roboto-Bold',
    fontSize: 14,
    textAlign:'left',
    fontWeight:'500',
  },

  descricao2: {
    color:"#636363",
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },
});