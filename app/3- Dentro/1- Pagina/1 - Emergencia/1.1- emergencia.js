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


{/*
import Alertando from '../../app/Alerts'
const Alertar = () => {
  return(
    <Alertando nome={'Domingos'}/>
  );
};
*/}

const acoes =[
  {id: 1, capa: require('../../../../assets/Imagens/home/emergencia1.png'), titulo:'Morte'},
  {id: 2, capa: require('../../../../assets/Imagens/prontosocorro/casa2.png'), titulo:'Incendio'},
  {id: 3, capa: require('../../../../assets/Imagens/prontosocorro/casa3.png'), titulo:'Eletrocutação'},
  {id: 4, capa: require('../../../../assets/Imagens/prontosocorro/casa4.png'), titulo:'Graves Ferimentos'},
  {id: 6, capa: require('../../../../assets/Imagens/prontosocorro/praia1.png'), titulo:'Na Praia'},{id: 6, capa: require('../../../../assets/Imagens/prontosocorro/outro2.png'), titulo:'Outros'},
]


//vARIAVEL GLOBAL PARA MANIPULAÇÃO DO MENU SCROLL
const HEADER_HEIGHT = 70

class Emergencia1 extends Component {
 

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
    //  Actions.clinicas(); 
    }
    if (a == 2) {
      Actions.emergencia_f()
    }
    if (a == 3) {
    //  Actions.home3(); 
    }
    if (a == 'news') {
    //  Actions.home3(); 
    }
    if (a == 'search') {
     // Actions.pesquisa(); 
    }
    if (a == 'artigo') {
  //    Actions.artigo(); 
    }
    if(a == 'doencas'){
   //   Actions.adoencas()
    }
    if(a == 'categoria'){
  //   Actions.hospital_categoria()
    }
    if(a == 'categoriaall'){
   //   Actions.hospital_categorias()
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
      <Container style={{backgroundColor:'#f4f4f4'}}>
      {/* <Alertar/>*/}
      
      <View style={{position:'absolute',shadowColor:'white',elevation:1.5, zIndex:110,backgroundColor:'white', width:265, height:49.5, borderBottomRightRadius:23, borderbottomrightColor:'transparent', borderColor:'transparent'}}>{/* MANIPULAÇÃO DO SCROLL DO MENU */}
        <Right style={{left:105,flexDirection:'row',top:-2}}>
          <Button transparent>
            <Image style={{left:-15,width:24, height:24}}
            source = {require('../../../../assets/icon/menu/pesquisa.png')}/>
          </Button>
          <View style={{top:'-4%', right:9}}>
            <Menu
              ref={this.setMenuRef}
              button={<TouchableOpacity onPress={this.showMenu}><Image  style={{width:20, height:20, marginLeft:9, marginRight:5}}
              source = {require('../../../../assets/icon/menu/definicao.png')}/></TouchableOpacity>}
            >
              <MenuItem onPress={this.hideMenu}><Text style={styles.menu_item}>Reportar um erro</Text></MenuItem>
              <MenuItem onPress={this.hideMenu}><Text style={styles.menu_item}>Definições</Text></MenuItem>
            </Menu>
          </View>
         </Right>
      </View>

      <View style={{
        marginLeft:'86%',
        position:'absolute',
        shadowColor:'white',
        elevation:1.5,
        zIndex:110,
        backgroundColor:'white',
        width:90,
        height:49.5, 
        borderBottomLeftRadius:23, 
        borderColor:'transparent'}}>
        <View>
         <Text style={styles.titulo_header}>2 / 3</Text>
        </View>
      </View>

      <TouchableOpacity onPress={()=> Actions.pop()} style={{zIndex:100, marginTop:60,position:'absolute'}}>
        <View style={{shadowColor:'white',elevation:1.5, zIndex:40,backgroundColor:'white', width:50, height:40, borderBottomRightRadius:23, borderTopRightRadius:23, borderColor:'transparent'}}>
            <Button transparent onPress={()=> Actions.pop()} >
              <Image style={{left:18, top:-2,width:25, height:25}}
              source = {require('../../../../assets/icon/menu/voltar_all.png')}/>
            </Button>
        </View>
      </TouchableOpacity>

    {/* <View style={{position:'absolute',elevation:1, zIndex:110,backgroundColor:'white', width:115, height:49.5, borderBottomRightRadius:10}}/>{/* MANIPULAÇÃO DO SCROLL DO MENU */}
        

    <Animated.ScrollView
        bounces={true}
        scrollEventThrottle={18}
        showsVerticalScrollIndicator={false} 
        style={{zIndex:-100, left:17, marginRight:33}}
       // onScrollEndDrag={this.setState({fake_shadow:2})}
        onScroll={Animated.event([
            {
              nativeEvent:{contentOffset:{ y: scrollY}}
            }
        ])}


        //onScrollEndDrag={this.setState({fake_shadow:2})} Actions.emergencia_f()}
       // onScrollAnimationEnd={}
    >

          <View>
            <StatusBar barStyle = "dark-content" hidden = {false} 
            backgroundColor = "white" translucent = {false}
            />
          </View>

          <View style={{paddingTop:70, paddingBottom:10,flex:1, marginLeft:30, marginRight:30, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.titulo_normal}>Por Favor, Especifique o Ocorrido</Text>
          </View>
          
          <View style={{paddingTop:20, paddingBottom:15}}>
          
          <Card style={{elevation:0, backgroundColor:'white', borderRadius:23, borderColor:'transparent'}}>
              <View style={{paddingTop:10, paddingBottom:10}}>
                
                <View style={{flexWrap:'wrap',justifyContent:'space-evenly',marginLeft:12, marginRight:12, flexDirection:'row'}}>
                  
                {acoes.map(info =>(
                <TouchableOpacity key={info.id} onPress={()=>  this._submit(info.id)} style={{paddingBottom:5}}>
                  <Card style={styles.card_pequeno}>
                    <Image source={info.capa} style={{width:'100%',height:'100%', borderRadius:23}}/>
                  </Card>
                  <Text style={styles.descricao_card}>{info.titulo}</Text>
                </TouchableOpacity>
                ))}
                </View>
              </View>
            </Card>
          </View>

      </Animated.ScrollView>
    </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  
  card_pequeno:{
    elevation:0,
    backgroundColor:'#C0223E', 
    borderRadius:24, 
    width:118,
    height:100, 
    borderColor:'transparent',
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
   titulo_header: {
    fontFamily:'Roboto-Bold', 
    color:'#181819',
    fontSize: 18,
    marginTop: '25%',
    paddingLeft:'24%',
    paddingRight:'8%',
    textAlign:'left',
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
  titulo_normal: {
    color:'#1e2023',
    fontFamily:'Roboto-Bold',
    fontSize: 14,
    marginTop: 6,
    marginLeft: 20,
    paddingRight:4,
    textAlign:'center'
  },
  descricao: {
    color:'#1e2023',
    fontFamily:'Roboto-Regular',
    fontSize: 14,
    marginTop: 6,
    marginLeft: 16,
    paddingLeft:4,
    paddingRight:4,
    textAlign:'left',
  },
  descricao_card: {
    color:'#1e2023',
    fontFamily:'Roboto-Regular',
    fontSize: 14,
    marginTop: 6,
    textAlign:'center',
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

export default Emergencia1;