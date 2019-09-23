import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View, 
  Alert,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Content, List, ListItem, Button} from 'native-base';
import { Actions } from 'react-native-router-flux';

// 
const acoes =[
  {id: 1, icon: require('../../../assets/icon/menu/1.png'), titulo:'Perfil'},
  {id: 2, icon: require('../../../assets/icon/menu/sobre.png'), titulo:'Sobre Nós'},
  {id: 3, icon: require('../../../assets/icon/menu/6.png'), titulo:'Definições'},
  {id: 4, icon: require('../../../assets/icon/menu/7.png'), titulo:'Sair'},
 ]


export default class Menu extends Component {

    evento(a){
      if (a=='sair'){
        Actions.logout();
      }else {
      Alert.alert('Execução',
      'Função Chamada '+a,
        );
      }
    }

    constructor(props) {
      super(props)
      this.state = {
        logo1: require('../../../assets/icon/padrão/logo.png'),
        logo2: require('../../../assets/icon/padrão/logo.png'),
        altura1: 221,
        altura2:113,
        active: 'true',
        shadow: false,
     
      };
    }

  render(){
    
    return(
      <View style={{flex:1}}>
        
        <View style={{justifyContent:'center'}} 
         //   onPress={()=> this.setState({logo1:this.state.logo2, altura1: 221, altura2:113})}
         // onLongPress={()=> this.setState({logo1:require('../../../assets/icon/qrcode.png'), altura1: 90, altura2:90})} transparent
        >
          <Image source={this.state.logo1} style={{marginTop:'10%',alignSelf:'center',width:this.state.altura1, height:this.state.altura2}}/>
        </View>
        <View style={{flex:2, top:'10%'}}>
        
          <Content>
            {acoes.map(info =>(
              <List key={info.id} style={{marginLeft: '6%'}}>
                <ListItem style={styles.list} onPress={() => this.evento(info.id)}>
                  <Image style={{width:20, height:20}}source = {info.icon}></Image> 
                  <Text style={[styles.titulo, {marginLeft: '19%'}]}>{info.titulo}</Text>
                </ListItem>
              </List>
            ))}

          </Content>
        </View>

          <View style={{bottom:'3%'}}>
            <Text style={styles.ceo}><Text style={{fontFamily:'Roboto-Bold'}}>CEO - Founder</Text>: Domingos Amândio João Manuel</Text>
          </View>
      
      </View>
    )
  }
}


const styles = StyleSheet.create({  

    list:{
      borderColor:'transparent',
    },
    /*Icones - IMAGENS*/
    logo:{
      width: 221, 
      height: 113,
      alignSelf: 'center',
    },
  
    /*Textos*/
    titulo: {
      color:"black",
      fontFamily:'Roboto-Condensed',
      fontSize: 14,
    },
    ceo: {
      color:"black",
      fontFamily:'Roboto-Condensed',
      fontSize: 12,
      textAlign:'center',
    },
  });
  