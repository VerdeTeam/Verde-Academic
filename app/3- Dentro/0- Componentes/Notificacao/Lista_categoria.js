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
          
          <Image source={this.props.capa} style={{width: 40, height:40, borderRadius:8, marginRight:'7%'}}/>
          
         
          <View style={{flexDirection:'row'}}>
            
              <View style={{width:'90%', marginTop:'0%',marginRight:'3%'}}>
                
                <Text style={[styles.titulo2]}>{this.props.nome}</Text>
                <View style={{marginTop:'4%', flexDirection:'row'}}>
                  <Image 
                  style={{width:15, height:15.5}}
                  source={this.props.statusIcon}/>
                  <Text style={[styles.infoStatus,{marginTop:'0%',marginLeft: '4%', textAlign: 'left',}]}>{this.props.statusdata}</Text>
                </View>
              
              </View>

              {/** STATUS FUNCTION 
              <View style={{marginLeft:'4%',width:'26%', marginTop:'4%'}}>
                <Button style={[styles.botao,{backgroundColor:this.props.statuscolor}]}>
                  <Text style={{color:'white', fontSize:11, fontFamily:'Roboto-Condensed'}}>{this.props.statusname}</Text>
                </Button>
                <Text style={[styles.infoStatus,{textAlign:'center', marginTop:'3%'}]}>Status</Text>
              </View>
              */}
          </View>
         
          <View style={{marginLeft:'100%', marginTop:'2.5%', position:'absolute'}}>
              <Image source={require('../../../../assets/icon/menu/definicao.png')} style={{width: 10, height:18, borderRadius:5, marginRight:'1%'}}/>
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
    color:"#5f6267",
    fontFamily:'Roboto-Condensed',
    fontSize: 12,
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
    color:'#1e2023',
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
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