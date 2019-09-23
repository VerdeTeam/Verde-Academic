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
import { white } from 'ansi-colors';


{/*
import Alertando from '../../app/Alerts'
const Alertar = () => {
  return(
    <Alertando nome={'Domingos'}/>
  );
};
*/}

const sintomas =[
  {id: 1, titulo:'Desidratação'},
  {id: 2, titulo:'Fraqueza Geral'},
  {id: 3, titulo:'Dores Musculares'},
  {id: 4, titulo:'Perda de Apetite'},
  {id: 6, titulo:'Dor de Cabeça'},
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


  _submit(a) {
    if (a == 1) {
    //  Actions.clinicas(); 
    }
    if (a == 2) {
     // Actions.emergencia_f()
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
      
      <View style={{position:'absolute',shadowColor:'white',elevation:1.5, zIndex:110,backgroundColor:'white', width:220, height:49.5, borderBottomRightRadius:23, borderbottomrightColor:'transparent', borderColor:'transparent'}}>{/* MANIPULAÇÃO DO SCROLL DO MENU */}
        <Right style={{left:75,flexDirection:'row',top:-2}}>
          <Button transparent>
            <Image style={{left:-15,width:20, height:20,top:3}}
            source = {require('../../../../assets/icon/menu/share.png')}/>
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
            <Text style={styles.titulo_normal}>FEBRE</Text>
          </View>
          
          <View style={{paddingTop:10}}>
            <Card style={{elevation:0,backgroundColor:'#2B9ECC', borderRadius:23, width:null, height:100, borderColor:'transparent'}}>
              <Image source={require('../../../../assets/Imagens/consultas/sintomas1.png')} style={{width:'100%',height:'100%', borderRadius:23}}/>
            </Card>
          </View>

          <View style={{paddingTop:20, paddingBottom:15}}>
          <Text style={[styles.descricao,{textAlign:'left', paddingBottom:10}]}>O Que é?</Text>
           <Card style={{elevation:0, backgroundColor:'white', borderRadius:23, borderColor:'transparent'}}>
              <View style={{paddingTop:15, paddingBottom:15}}>
                <View style={{marginLeft:40, marginRight:20}}>
                  <Text style={[styles.descricao,{textAlign:'left',marginLeft: -20, marginRight:-4}]}>Sempre que entrarmos no aplicativo teremos uma área que irá nos perguntar o que 
                  estamos sentindo, com um drop item com icons e descrição de possíveis categorias de coisas Sempre que entrarmos no aplicativo</Text>
                </View>
              </View>
            </Card>
          </View>

          <View style={{paddingBottom:15}}>
          <Text style={[styles.descricao,{textAlign:'left', paddingBottom:10}]}>Causas</Text>
           <Card style={{elevation:0, backgroundColor:'white', borderRadius:23, borderColor:'transparent'}}>
              <View style={{paddingTop:15, paddingBottom:15}}>
                <View style={{marginLeft:40, marginRight:20}}>
                  <Text style={[styles.descricao,{textAlign:'left',marginLeft: -20, marginRight:-4}]}>Sempre que entrarmos no aplicativo teremos uma área que irá nos perguntar o que 
                  estamos sentindo, com um drop item com icons e descrição de possíveis categorias de coisas Sempre que entrarmos no aplicativo</Text>
                </View>
              </View>
            </Card>
          </View>

          
          <View style={{paddingBottom:15}}>
            <Text style={[styles.descricao,{textAlign:'left', paddingBottom:10}]}>Sintomas Que Aparecem</Text>
           <Card style={{elevation:0, backgroundColor:'white', borderRadius:23, borderColor:'transparent'}}>
              <View style={{paddingTop:15, paddingBottom:15}}>
                <View style={{marginLeft:40, marginRight:20}}>
                  <Text style={[styles.descricao,{textAlign:'left',marginLeft: -20, marginRight:-4}]}>Geralmente quando sentimos <Text style={{fontFamily:'Roboto-Bold'}}>Febre </Text> 
                  o nosso corpo apresenta alguns sintomas adicionais</Text>
                </View>
                <View style={{paddingTop:15, marginLeft:15, marginRight:20, flexWrap:'wrap',justifyContent:'space-evenly', flexDirection:'row', justifyContent:'flex-start'}}>

                {sintomas.map(info =>(
                  <View key={info.id} style={{marginLeft:5}}>
                    <TouchableOpacity onPress={()=>  this._submit(info.id)} style={{paddingBottom:5}}>
                      <View style={{backgroundColor:'black', borderRadius:23, borderColor:'transparent', alignItems:'center'}}>
                        <Text style={styles.sintoma}>
                        {info.titulo}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                ))}
                </View>
              </View>
            </Card>
          </View>

          
          <View style={{paddingBottom:15}}>
          <Text style={[styles.descricao,{textAlign:'left', paddingBottom:10}]}>Recomendações do <Text style={{fontFamily:'Roboto-Bold'}}>Verde</Text></Text>
           <Card style={{elevation:0, backgroundColor:'white', borderRadius:23, borderColor:'transparent'}}>
              <View style={{paddingTop:50, paddingBottom:50}}>
                <View style={{justifyContent:'space-evenly', flexDirection:'row'}}>
                  <Button transparent onPress={()=> Actions.consulta_sr()}>
                    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
                      <Image style={{ zIndex:10,width:36, height:36}}
                      source = {require('../../../../assets/icon/livro_circulo.png')}/>
                      <Text style={styles.descricao}>Ver Receita Médica</Text>
                    </View>
                  </Button>
                  <Button transparent onPress={()=> Actions.emergencia_espr()}>
                    <View style={{flexDirection:'column', justifyContent:'center', alignItems:'center',}}>
                      <Image style={{ zIndex:10,width:36, height:36}}
                      source = {require('../../../../assets/icon/mapa_circulo.png')}/>
                      <Text style={[styles.descricao,{textAlign:'center'}]}>Hospital Mais Proximo</Text>
                    </View>
                    </Button>
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
  sintoma: {
    color:'white',
    fontFamily:'Roboto-Regular',
    fontSize: 14,
    textAlign:'center',
    paddingLeft:10,
    paddingRight:10,
    paddingTop:5,
    paddingBottom:5,
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