import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
  TouchableOpacity,
} from 'react-native';
import { Card, ListItem, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

class Registos_Medicos extends Component {
 
  render() {
    return (
      <Card noShadow={true} style={{flex:1,width:'45%', height: 50 , borderRadius:5, borderColor:'white'}} >
        
        <View style={{flexDirection:'row'}}>
          
          <View style={{width:'20%', marginTop:'3%'}}>
            <Image source={this.props.capa} style={{width: '50%', height:'80%', borderRadius:8, marginRight:'7%'}}/>
          </View>
         
          <View style={{flexDirection:'row'}}>
            
              <View style={{width:'40%', marginTop:'0%',marginRight:'3%'}}>
                
                <Text style={styles.titulo2}>Comprimidos Tomados</Text>
                <View style={{marginTop:'4%', flexDirection:'row'}}>
                  <Image
                  style={{width:16, height:15.5}}
                  source={this.props.iconyes}/>
                  <Text style={[styles.infoStatus,{marginTop:'0%',marginLeft: '8%', textAlign: 'left',}]}>{this.props.tomados}</Text>
                </View>
              
              </View>

              <View style={{width:'35%', marginTop:'0%',marginRight:'3%'}}>
                
                <Text style={styles.titulo2}>Comprimidos Não Tomados</Text>
                <View style={{marginTop:'4%', flexDirection:'row'}}>
                  <Image
                  style={{width:16, height:15.5}}
                  source={this.props.iconno}/>
                  <Text style={[styles.infoStatus,{marginTop:'0%',marginLeft: '8%', textAlign: 'left',}]}>{this.props.ntomados}</Text>
                </View>
              
              </View>

          </View>
         
          <View style={{marginLeft:'100%', marginTop:'2.5%', position:'absolute'}}>
              <Image source={require('../../../../assets/home/2/go.png')} style={{width: 10, height:18, borderRadius:5, marginRight:'1%'}}/>
          </View>
        
        </View>
      </Card>
    );
  }
}

const styles = StyleSheet.create({
  botao:{
    borderRadius:4,
    elevation:0,
    color:'white',
    height:20,
    width:'100%',
    justifyContent:'center',
  },
  infoStatus: {
    color:"black",
    fontFamily:'Roboto-Condensed',
    fontSize: 14,
    textAlign:'left',
  },
  descricao_botao: {
    marginLeft: 3,
    color:"white",
    textAlign: 'center',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },
  titulo2: {
    color:"#3E3D3F",
    fontFamily:'timesbd',
    fontSize: 14,
    textAlign:'left',
  },

  descricao2: {
    color:"#636363",
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },

  /*BLOCOS*/

  bloco2: {
    flex: 1,
    alignContent:'center',
  },
  bloco3: {
    flex: 1,
  },  
  wrapper: {

  },

  slide: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
});

export default Registos_Medicos;