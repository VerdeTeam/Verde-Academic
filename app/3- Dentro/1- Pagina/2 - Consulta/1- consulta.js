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
import Serviços_Form from '../../0- Componentes/Explore/Category'
import Animated from 'react-native-reanimated';


{/*
import Alertando from '../../app/Alerts'
const Alertar = () => {
  return(
    <Alertando nome={'Domingos'}/>
  );

  sdglskg
  sfbasjfkaf
};
*/}


const acoes =[
  {id: 1, capa: require('../../../../assets/Imagens/consultas/japodes1.png'), titulo:'Marcar Consulta'},
  {id: 2, capa: require('../../../../assets/Imagens/consultas/japodes2.png'), titulo:'Ler Sobre Doenças'},
]

const sintomas_list =[
  {id: 1, uri: require('../../../../assets/Imagens/home/discover4.png'), titulo:'Febre'},
  {id: 2, uri: require('../../../../assets/Imagens/home/teste.png'), titulo:'Tonturas'},
  {id: 3, uri: require('../../../../assets/Imagens/home/teste.png'), titulo:'Cansaço'},
  {id: 4, uri: require('../../../../assets/Imagens/home/teste.png'), titulo:'Arrepios'},
]

//vARIAVEL GLOBAL PARA MANIPULAÇÃO DO MENU SCROLL
const HEADER_HEIGHT = 70

class Consulta extends Component {
 

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


  _sintomas(a){
    if(a==1){
      Actions.consulta_s();
    }
  }

  _submit(a) {
    if (a == 1) {
      Actions.consulta_m(); 
    }
    if (a == 2) {
     // Actions.home2(); 
    }
    if (a == 3) {
    //  Actions.home3(); 
    }
    if (a == 'news') {
   //   Actions.home3(); 
    }
    if (a == 'search') {
   //   Actions.pesquisa(); 
    }
    if (a == 'artigo') {
   //   Actions.artigo(); 
    }
    if(a == 'doencas'){
     // Actions.adoencas()
    }
    if(a == 'categoria'){
    //  Actions.hospital_categoria()
    }
    if(a == 'categoriaall'){
  //    Actions.hospital_categorias()
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
      
      <View style={{position:'absolute',shadowColor:'white',elevation:1.5, zIndex:110,backgroundColor:'white', width:260, height:49.5, borderBottomRightRadius:23, borderbottomrightColor:'transparent', borderColor:'transparent'}}>{/* MANIPULAÇÃO DO SCROLL DO MENU */}
        <Right style={{left:110,flexDirection:'row',top:5}}>
          <View style={{top:'-6%', right:9}}>
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

    {/*
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
         <Text style={styles.titulo_header}>1 / 3</Text>
        </View>
      </View>
    */}

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
        //onScrollEndDrag={this.setState({fake_shadow:2})}
       // onScrollAnimationEnd={}
    >

          <View>
            <StatusBar barStyle = "dark-content" hidden = {false} 
            backgroundColor = "white" translucent = {false}
            />
          </View>

            <View  style={{paddingTop:65}}>   
            
              <Image style={{ zIndex:10,width:24, height:24, position:'absolute', left:22,top:66}}
              source = {require('../../../../assets/icon/sorriso_circulo.png')}/>
              <Card style={{elevation:0,marginTop:'3%',             
              borderRadius:23, 
              borderColor:'transparent',
              backgroundColor:'white',
              height:100,
              }}
              >
                <View style={{flex:1, marginLeft:5, marginRight:20, marginTop:20}}>
                 <Text style={styles.descricao}>Encontre uma gama de informações sobre doenças e sintomas… Entenda como combater e prevenir cada uma delas</Text>
                </View>
              </Card>
            </View>

          <View style={{paddingTop:20, paddingBottom:10}}>
            <TouchableOpacity onPress={()=> Actions.emergencia_pr()}>
              <Card style={{elevation:0,backgroundColor:'#2B9ECC', borderRadius:23, width:null, height:83, borderColor:'transparent'}}>
                <Image source={require('../../../../assets/Imagens/consultas/prevencao2.png')} style={{width:'100%',height:'100%', borderRadius:23}}/>
                <View style={{width:'100%',flexDirection:'row', position:'absolute', top:23}}>
                  <Text style={[styles.titulo,{backgroundColor:'#2B9ECC'}]}>PREVENÇÃO</Text>
                  <Button style={{elevation:0 ,right:12,backgroundColor:'#2B9ECC', borderRadius:23,
                  alignItems:'center', justifyContent:'center',
                  width:29, height:29, position:'absolute'}}>
                  <Image style={{ width:24, height:24}}
                    source = {require('../../../../assets/icon/menu/avancar2.png')}/>
                  </Button>
                </View>
              </Card>
            </TouchableOpacity>
          </View>

          <View style={{paddingTop:20, paddingBottom:10}}>
            <TouchableOpacity onPress={()=> Actions.emergencia_pr()}>
              <Card style={{elevation:0,backgroundColor:'#2B9ECC', borderRadius:23, width:null, height:83, borderColor:'transparent'}}>
                <Image source={require('../../../../assets/Imagens/consultas/doencas1.png')} style={{width:'100%',height:'100%', borderRadius:23}}/>
                <View style={{width:'100%',flexDirection:'row', position:'absolute', top:23}}>
                  <Text style={[styles.titulo,{backgroundColor:'#2B9ECC'}]}>DOENÇAS</Text>
                  <Button style={{elevation:0 ,right:12,backgroundColor:'#2B9ECC', borderRadius:23,
                  alignItems:'center', justifyContent:'center',
                  width:29, height:29, position:'absolute'}}>
                  <Image style={{ width:24, height:24}}
                    source = {require('../../../../assets/icon/menu/avancar2.png')}/>
                  </Button>
                </View>
              </Card>
            </TouchableOpacity>
          </View>

          <View style={{paddingTop:20, paddingBottom:10}}>
            <TouchableOpacity onPress={()=> Actions.emergencia_pr()}>
              <Card style={{elevation:0,backgroundColor:'#2B9ECC', borderRadius:23, width:null, height:83, borderColor:'transparent'}}>
                <Image source={require('../../../../assets/Imagens/consultas/sintomas2.png')} style={{width:'100%',height:'100%', borderRadius:23}}/>
                <View style={{width:'100%',flexDirection:'row', position:'absolute', top:23}}>
                  <Text style={[styles.titulo,{backgroundColor:'#2B9ECC'}]}>SINTOMAS</Text>
                  <Button style={{elevation:0 ,right:12,backgroundColor:'#2B9ECC', borderRadius:23,
                  alignItems:'center', justifyContent:'center',
                  width:29, height:29, position:'absolute'}}>
                  <Image style={{ width:24, height:24}}
                    source = {require('../../../../assets/icon/menu/avancar2.png')}/>
                  </Button>
                </View>
              </Card>
            </TouchableOpacity>
          </View>

      </Animated.ScrollView>
    </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  
  card_pequeno:{
    elevation:0,
    backgroundColor:'#2B9ECC', 
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

export default Consulta;