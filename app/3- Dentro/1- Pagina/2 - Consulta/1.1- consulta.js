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

const nutricao_list =[
  {id: 1, uri: require('../../../../assets/Imagens/home/discover4.png'), titulo:'Dermatologista'},
  {id: 2, uri: require('../../../../assets/Imagens/home/teste.png'), titulo:'Dentista'},
  {id: 3, uri: require('../../../../assets/Imagens/home/teste.png'), titulo:'Pediatra'},
  {id: 4, uri: require('../../../../assets/Imagens/home/teste.png'), titulo:'Teste3'},
  {id: 5, uri: require('../../../../assets/Imagens/home/teste.png'), titulo:'Teste4'},
]

//vARIAVEL GLOBAL PARA MANIPULAÇÃO DO MENU SCROLL
const HEADER_HEIGHT = 70

class Nutricao extends Component {
 

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
    //  Actions.emergencia_l(); 
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
      selected: "key0",
    // {/*DROP DOWN*/}selected: undefined
    };
  }

  onValueChange(value: string) {
    this.setState({
      selected: value
    });
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
      
      <View style={{position:'absolute',shadowColor:'white',elevation:1.5, zIndex:110,backgroundColor:'white', width:180, height:49.5, borderBottomRightRadius:23, borderbottomrightColor:'transparent', borderColor:'transparent'}}>{/* MANIPULAÇÃO DO SCROLL DO MENU */}
        <Right style={{left:70,flexDirection:'row',top:-1}}>
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

      <TouchableOpacity onPress={()=> Actions.pop()} style={{zIndex:100, marginTop:60,position:'absolute'}}>
        <View style={{shadowColor:'white',elevation:1.5, zIndex:40,backgroundColor:'white', width:50, height:40, borderBottomRightRadius:23, borderTopRightRadius:23, borderColor:'transparent'}}>
            <Button transparent onPress={()=> Actions.pop()} >
              <Image style={{left:18, top:-2,width:25, height:25}}
              source = {require('../../../../assets/icon/menu/voltar_all.png')}/>
            </Button>
        </View>
      </TouchableOpacity>

      {/*
      <View style={{flex:1,width:'100%', position:'absolute', bottom:10, marginRight:'20%'}}>
        <Button transparent style={{backgroundColor:'black', elevation:4, borderRadius:30, width:50,height:50, 
        alignItems:'center',justifyContent:'center', alignSelf:'flex-end'}} 
          onPress={()=> this._submit('search')}>
          <Image style={{width:30, height:30}}
          source = {require('../../../../assets/icon/footer/mapa2.png')}/>
        </Button>
      </View>
      */}
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

          <View style={{paddingTop:70, paddingBottom:10,flex:1, marginLeft:30, marginRight:30, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.titulo_normal}>Temos mais de 15 prestadores de serviços hospitalares perto se si</Text>
          </View>

          <View style={{paddingTop:20, paddingBottom:15}}>
           
            <Image style={{ zIndex:10,width:24, height:24, position:'absolute', left:22,top:18}}
            source = {require('../../../../assets/icon/oculos_circulo.png')}/>
            <Card style={{elevation:0,marginTop:'3%',             
            borderRadius:23, 
            borderColor:'transparent',
            backgroundColor:'white',
            height:60,
            }}
            >
              <View style={{flex:1, marginLeft:20, marginRight:20, marginTop:7}}>
              <Form>
                <Picker
                  note
                  mode="dropdown"
                  style={{ width: null }}
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                >
                  <Picker.Item label="Selecione a Especialidae" value="key0" />
                  <Picker.Item label="Nenhuma" value="key1" />
                  <Picker.Item label="Dermatologista" value="key2" />
                  <Picker.Item label="Cardiologista" value="key3" />
                  <Picker.Item label="Domingos Neto" value="key4" />
                </Picker>
              </Form>
              </View>
            </Card>
         

          </View>

          <View style={{paddingTop:10, paddingBottom:10}}>
            <Text style={[styles.descricao,{textAlign:'left', paddingBottom:10}]}>Selecione a Entidade</Text>
            <Card style={{elevation:0, backgroundColor:'white', borderRadius:23, borderColor:'transparent'}}>
              <View style={{paddingTop:25}}>
                <ScrollView
                  scrollEventThrottle={16}
                >
                  <View style={{height: 130, marginTop:8 }}>
                    <ScrollView
                      horizontal={true}
                      showsHorizontalScrollIndicator={false}
                    >
                      {nutricao_list.map(servico =>(
                      <View key={servico.id}>
                        <TouchableOpacity>
                          <Serviços_Form corfundo={'#5F9039'} imageUri={servico.uri}
                            name={servico.titulo}
                          />
                        </TouchableOpacity>
                        </View>
                      ))}
                    </ScrollView>
                  </View>
                </ScrollView> 
              </View>
            </Card>  
          </View> 

          <View style={{alignItems:'center', paddingTop:10}}>
            <TouchableOpacity style={{justifyContent:'center', backgroundColor:'black', borderRadius:23, borderColor:'transparent'}}>
              <Text style={{padding:10, paddingLeft:15, paddingRight:15, fontFamily:'Roboto-Regular', fontSize:14, color:'white'}}>Solicitar Marcação</Text>
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

export default Nutricao;