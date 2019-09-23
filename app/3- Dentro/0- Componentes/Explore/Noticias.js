import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
} from 'react-native';
import { Card, ListItem} from 'native-base';

class Noticias extends Component {
 

  render() {
    return (

    <View>  
      <Card style={{elevation: 2,flex:1, marginTop:'5%',marginLeft:'3%', marginRight:'3%', borderRadius:12, borderColor:'white'}} >
      <Image source={this.props.imageUri} style={{width: '100%', height:122, borderTopLeftRadius:12, borderTopRightRadius:12, marginRight:'1%'}}/>
      <View style={{marginTop:'0.5%'}}>
        <Text style={[styles.infoNoticia,{marginLeft: '1%', textAlign: 'left',}]}>{this.props.data}</Text>
        <Text style={[styles.infoNoticia,{marginTop:'-2.7%',marginRight:'1%', textAlign: 'right',}]}>{this.props.fonte}</Text>
      </View>
      <Text style={[styles.tituloNoticia, {marginLeft:'1%',marginRight:'1%'}]}>{this.props.titulo}</Text>
      </Card>
    </View>
      
    );
  }
}

export default Noticias;

const styles = StyleSheet.create({
  /*Textos*/
  titulo: {
    color:"black",
    fontFamily:'Roboto-Bold',
    fontSize: 14,
    marginTop: 15,
    marginBottom: 15,
    marginLeft: 23,
    textAlign:'left',
    fontWeight:'700',
  },
  descricao: {
    marginTop:12,
    marginLeft: 3,
    color:"black",
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },


  infoNoticia: {
    color:"#636363",
    fontFamily:'Roboto-Condensed',
    fontSize:8,    
  },
  tituloNoticia: {
    color:"#1e2023",
    fontFamily:'Roboto-Bold',
    fontSize: 14,
    marginTop: 2,
    marginBottom: 15,
    textAlign:'left',
  },

  descricao_botao: {
    marginLeft: 3,
    color:"white",
    textAlign: 'center',
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