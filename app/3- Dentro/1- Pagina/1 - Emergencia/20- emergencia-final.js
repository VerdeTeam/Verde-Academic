import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
  StatusBar, 
  TouchableOpacity, 
  ScrollView,
  TextInput,
} from 'react-native';
import { Card, Container, Header, Button, 
  Right, Body, Content, Picker, Form} from 'native-base';
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Animated from 'react-native-reanimated';



const primeiros_socorros =[
  {id: 1, titulo: '1)', descricao: 'Sempre que entrarmos no aplicativo teremos uma área que irá nos perguntar o que estamos sentindo, com um drop item com icons e descrição de possíveis categorias de coisas Sempre que entrarmos no aplicativo'},
  {id: 2, titulo: '2)', descricao: 'Sempre que entrarmos no aplicativo teremos uma área que irá nos perguntar o que estamos sentindo, com um drop item com icons e descrição de possíveis categorias de coisas Sempre que entrarmos no aplicativo'},
  {id: 3, titulo: '3)', descricao: 'Sempre que entrarmos no aplicativo teremos uma área que irá nos perguntar o que estamos sentindo, com um drop item com icons e descrição de possíveis categorias de coisas Sempre que entrarmos no aplicativo'},
]



{/*
import Alertando from '../../app/Alerts'
const Alertar = () => {
  return(
    <Alertando nome={'Domingos'}/>
  );
};
*/}

//vARIAVEL GLOBAL PARA MANIPULAÇÃO DO MENU SCROLL
const HEADER_HEIGHT = 70

class Home1 extends Component {
 

  _menu = null;

  setMenuRef = ref => {
    this._menu = ref;
  };
 
  hideMenu = () => {
    this._menu.hide();
  };
 
  showMenu = () => {
    this._menu.show();
  };


  _submit(a) {
    if (a == 1) {
      Actions.clinicas(); 
    }
    if (a == 2) {
      Actions.home2(); 
    }
    if (a == 3) {
      Actions.home3(); 
    }
    if (a == 'news') {
      Actions.home3(); 
    }
    if (a == 'search') {
      Actions.pesquisa(); 
    }
    if (a == 'artigo') {
      Actions.artigo(); 
    }
    if(a == 'doencas'){
      Actions.adoencas()
    }
    if(a == 'categoria'){
      Actions.hospital_categoria()
    }
    if(a == 'categoriaall'){
      Actions.hospital_categorias()
    }
  }  

  constructor(props) {
    super(props)
    this.state = {
      active: 'true',
      shadow: true,
      fake_shadow:0,
    // {/*DROP DOWN*/}selected: undefined
    };
  }



 
  render() {

//SCROLL MENU FUNCTIOM
  const scrollY = new Animated.Value(0);
  const diffClampScrollY = Animated.diffClamp(scrollY, 0,
    HEADER_HEIGHT);
  const headerY = Animated.interpolate(diffClampScrollY,{
      inputRange:[0,HEADER_HEIGHT],
      outputRange:[0,-HEADER_HEIGHT],
  })
  

    return (
      <Container style={{backgroundColor:'white'}}>
      
    {/* <View style={{position:'absolute',elevation:1, zIndex:110,backgroundColor:'white', width:115, height:49.5, borderBottomRightRadius:10}}/>{/* MANIPULAÇÃO DO SCROLL DO MENU */}
        

    <Animated.ScrollView
        bounces={true}
        scrollEventThrottle={18}
        showsVerticalScrollIndicator={false} 
        style={{zIndex:-100, left:17, marginRight:33}}
       // onScrollEndDrag={this.setState({fake_shadow:2})}
        //onScrollEndDrag={this.setState({fake_shadow:2})}
       // onScrollAnimationEnd={}
    >

          <View>
            <StatusBar barStyle = "dark-content" hidden = {false} 
            backgroundColor = "white" translucent = {false}
            />
          </View>

          <View  style={{paddingTop:10}}>   
            <Image source={require('../../../../assets/icon/padrão/icone.png')} style={{marginTop:40,alignSelf:'center',width:94, height:94}}/>
          </View>
            
          <View style={{paddingTop:50, marginLeft:40, marginRight:40}}>
           <Text style={[styles.descricao,{textAlign:'center',marginLeft: -20, marginRight:-4}]}>O SEU PEDIDO FOI RECEBIDO, A AJUDA JA VAI A CAMINHO !</Text>
          </View>

          <View style={{paddingTop:50, marginLeft:40, marginRight:40}}>
           <Text style={[styles.descricao,{textAlign:'center',marginLeft: -20, marginRight:-4, fontFamily:'Roboto-Regular'}]}>Tempo Estimado</Text>
          </View>

          <View style={{paddingTop:50, marginLeft:40, marginRight:40, justifyContent:'center', alignItems:'center'}}>
            <Card style={{width:192, height:73, backgroundColor:'#f4f4f4',
            borderColor:'transparent', borderRadius:23, elevation:0,
            flexDirection:'row', justifyContent:'space-evenly', alignItems:'center'
            }}>
              <Image source={require('../../../../assets/icon/temporizador.png')} style={{width:24, height:24}}/>
              <Text style={styles.tempo}>10<Text> Min</Text></Text>
              <Text style={styles.tempo}>:</Text>
              <Text style={styles.tempo}>59<Text> Seg</Text></Text>
           </Card>
          </View>

          <View style={{paddingTop:50, marginLeft:40, marginRight:40}}>
           <Text style={[styles.descricao,{textAlign:'center',marginLeft: -20, marginRight:-4, fontFamily:'Roboto-Regular'}]}>
             Iremos retornar uma ligação para si daqui a instantes
           </Text>
          </View>
          
          <View style={{paddingTop:'20%', justifyContent:'center', alignItems:'center'}}>
            <Image source={require('../../../../assets/icon/down.png')} style={{width:24, height:24}}/>
          </View>

          <View style={{paddingTop:50, marginLeft:40, marginRight:40}}>
           <Text style={[styles.descricao,{textAlign:'center',marginLeft: -20, marginRight:-4}]}>Dicas de Primeiro Socorro</Text>
          </View>

          <View style={{paddingTop:50, paddingBottom:10,marginLeft:20, marginRight:20, justifyContent:'center', alignItems:'center'}}>
            <Card style={{width:null, height: 'auto', backgroundColor:'#f4f4f4',
            borderColor:'transparent', borderRadius:23, elevation:0,
            paddingTop:10, paddingBottom:20,
            alignItems:'center'
            }}>
              {primeiros_socorros.map(info =>(
                <View key={info.id} style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                    <Text style={styles.descricao}>{info.titulo}</Text>
                    <Text style={[styles.descricao2,{textAlign:'left',fontFamily:'Roboto-Regular'}]}>
                     {info.descricao}
                    </Text>
                 </View>
                ))}
           </Card>
          </View>

      </Animated.ScrollView>
    </Container>
      
    );
  }
}

const styles = StyleSheet.create({
 
  tempo: {
    color:'black',
    fontFamily:'Roboto-Bold',
    fontSize: 18,
    textAlign:'center',
  },
  
  descricao: {
    color:'black',
    fontFamily:'Roboto-Bold',
    fontSize: 16,
    marginTop: 6,
    marginLeft: 16,
    paddingLeft:8,
    paddingRight:8,
    textAlign:'left',
  },
  
  descricao2: {
    color:'black',
    fontFamily:'Roboto-Bold',
    fontSize: 16,
    marginTop: 6,
    marginLeft: 16,
    marginRight: 20,
    paddingLeft:8,
    paddingRight:8,
    textAlign:'left',
  },

  card:{
    elevation:1,
    marginLeft:'3%', 
    marginRight:'3%', 
    borderRadius:13, 
    borderColor:'transparent',
  }, 
  card_image:{
    width:'100%', 
    height: '100.2%', 
   // borderBottomLeftRadius:18,
   // borderBottomRightRadius:18, 
    borderRadius:13,
    borderColor:'transparent',
  },
  card_popup:{
    width:'100%', 
    height: '100%', 
   // borderBottomLeftRadius:18,
   // borderBottomRightRadius:18, 
    borderRadius:23,
    borderColor:'transparent',
  },
  titulo: {
    color:'white',
    fontFamily:'Roboto-Bold',
    fontSize: 14,
    marginTop: 6,
    marginLeft: 16,
    paddingLeft:4,
    paddingRight:4,
    textAlign:'left',
    backgroundColor:'black',
    borderRadius:23
  },
  subtitulo_apoio: {

    backgroundColor:'#5F9039', 
    width:'auto', 
    height:25, 
    paddingLeft:6,
    paddingRight:6,
    borderRadius:12, 
    top:50,
    alignSelf:'center',
    color:'white',
    fontFamily:'Roboto-Bold',
    fontSize: 20,
    textAlign:'center',
    position:'absolute',
    zIndex:30
  },
  subtitulo:{
    fontFamily:'Roboto-Condensed',
    color:'#5f6267', 
    fontSize:12, 
    textAlign:'center',
  },
  descricao_botao: {
    color:"white",
    alignSelf: 'center',
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

export default Home1;