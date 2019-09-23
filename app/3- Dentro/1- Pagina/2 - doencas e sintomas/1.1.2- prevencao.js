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
import { Divider } from 'react-native-paper';


{/*
import Alertando from '../../app/Alerts'
const Alertar = () => {
  return(
    <Alertando nome={'Domingos'}/>
  );
};
*/}


const acoes =[
  {id: 1, capa: require('../../../../assets/Imagens/consultas/exercicio2.png'), titulo:'Caminhada', beneficios:['.Promove melhorias na saúde ','\n\n','.Queima Gorduras.','\n\n','.Traz Bem estar'], beneficios2:'Caminhada é um exercício físico a custo muito baixo e pode ser realizada praticamente em qualquer lugar, como na rua, nos parques , na praia, no campo, em pistas atléticas e ginásios.\n\nTodas que não apresentam limitações físicas, podem caminhar.'},
  {id: 2, capa: require('../../../../assets/Imagens/consultas/exercicio3.png'), titulo:'Corrida', beneficios:['.Promove melhorias na saúde','\n\n','.Queima Gorduras.','\n\n',' .Traz Bem estar.'], beneficios2:'Caminhada é um exercício físico a custo muito baixo e pode ser realizada praticamente em qualquer lugar, como na rua, nos parques , na praia, no campo, em pistas atléticas e ginásios.\n\nTodas que não apresentam limitações físicas, podem caminhar.'},
  {id: 3, capa: require('../../../../assets/Imagens/consultas/exercicio4.png'), titulo:'Bicicleta', beneficios:['.Promove melhorias na saúde ','\n\n','.Queima Gorduras.','\n\n','.Traz Bem estar'], beneficios2:'Caminhada é um exercício físico a custo muito baixo e pode ser realizada praticamente em qualquer lugar, como na rua, nos parques , na praia, no campo, em pistas atléticas e ginásios.\n\nTodas que não apresentam limitações físicas, podem caminhar.'},
  {id: 4, capa: require('../../../../assets/Imagens/consultas/exercicio5.png'), titulo:'Musculação', beneficios:['.Promove melhorias na saúde ','\n\n','.Queima Gorduras.','\n\n','.Traz Bem estar'], beneficios2:'Caminhada é um exercício físico a custo muito baixo e pode ser realizada praticamente em qualquer lugar, como na rua, nos parques , na praia, no campo, em pistas atléticas e ginásios.\n\nTodas que não apresentam limitações físicas, podem caminhar.'},
  {id: 5, capa: require('../../../../assets/Imagens/consultas/exercicio6.png'), titulo:'Yoga', beneficios:['.Promove melhorias na saúde ','\n\n','.Queima Gorduras.','\n\n','.Traz Bem estar'], beneficios2:'Caminhada é um exercício físico a custo muito baixo e pode ser realizada praticamente em qualquer lugar, como na rua, nos parques , na praia, no campo, em pistas atléticas e ginásios.\n\nTodas que não apresentam limitações físicas, podem caminhar.'},
  {id: 6, capa: require('../../../../assets/Imagens/consultas/exercicio7.png'), titulo:'Subir Escadas', beneficios:['.Promove melhorias na saúde ','\n\n','.Queima Gorduras.','\n\n','.Traz Bem estar'], beneficios2:'Caminhada é um exercício físico a custo muito baixo e pode ser realizada praticamente em qualquer lugar, como na rua, nos parques , na praia, no campo, em pistas atléticas e ginásios.\n\nTodas que não apresentam limitações físicas, podem caminhar.'},
  {id: 7, capa: require('../../../../assets/Imagens/consultas/exercicio8.png'), titulo:'Alongamento', beneficios:['.Promove melhorias na saúde ','\n\n','.Queima Gorduras.','\n\n','.Traz Bem estar'], beneficios2:'Caminhada é um exercício físico a custo muito baixo e pode ser realizada praticamente em qualquer lugar, como na rua, nos parques , na praia, no campo, em pistas atléticas e ginásios.\n\nTodas que não apresentam limitações físicas, podem caminhar.'},
]

//vARIAVEL GLOBAL PARA MANIPULAÇÃO DO MENU SCROLL
const HEADER_HEIGHT = 70

class Doesin_prev extends Component {
 

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
      Actions.emergencia_l(); 
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
      <Container style={{backgroundColor:'#f4f4f4'}}>
      {/* <Alertar/>*/}
      
      <View style={{position:'absolute',shadowColor:'white',elevation:1.5, zIndex:110,backgroundColor:'white', width:190, height:49.5, borderBottomRightRadius:23, borderbottomrightColor:'transparent', borderColor:'transparent'}}>{/* MANIPULAÇÃO DO SCROLL DO MENU */}
        <Right style={{left:70,flexDirection:'row',top:-5}}>
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
        //onScrollEndDrag={this.setState({fake_shadow:2})}
       // onScrollAnimationEnd={}
    >

          <View>
            <StatusBar barStyle = "dark-content" hidden = {false} 
            backgroundColor = "white" translucent = {false}
            />
          </View>

          <View style={{paddingTop:70, paddingBottom:10,flex:1, marginLeft:30, marginRight:30, justifyContent:'center', alignItems:'center'}}>
            <Text style={styles.titulo_normal}>Exercícios Físicos</Text>
          </View>

          
        <View style={{paddingTop:20}}>
          <Text style={[styles.descricao,{textAlign:'left', paddingBottom:10}]}>Porque é tão importante?</Text>
          <Card style={{elevation:0, backgroundColor:'white', borderRadius:23, borderColor:'transparent'}}>
            <View style={{paddingTop:10, paddingBottom:15, paddingLeft:5, paddingRight:5}}>
              <Text style={[styles.descricao,{textAlign:'left'}]}>
                Exercícios físicos são importantes porque trazem muitos benefícios ao nosso organismo, 
                diminuem as chances de doenças cardio vascular e melhoram a qualidade e expectativa de vida. 
              </Text>
            </View>
          </Card>  
        </View> 

        <View style={{paddingBottom:20,marginLeft:0, marginRight:0}}>
          {acoes.map(info =>(
          <View key={info.id}>
            <View style={{padding:30}}>
              <Divider/>
            </View>
            <Text style={[styles.descricao,{textAlign:'left', paddingBottom:30, fontFamily:'Roboto-Bold'}]}>{info.titulo}</Text>
            <View style={{paddingBottom:5, flexDirection:'row', justifyContent:'space-between'}}>
              <Image source={info.capa} style={{width:150, height:123, borderRadius:23, backgroundColor:'#2B9ECC'}}/>
              <Card style={[styles.card_pequeno,{top:-5}]}>
                <Text style={[styles.descricao,{textAlign:'left', fontSize:13, paddingRight:12, paddingTop:5}]}>
                  {info.beneficios}
                </Text>
              </Card>
            </View>
            
            <Card style={[styles.card_pequeno,{width:'100%', height:'auto', paddingBottom:10}]}>
              <View style={{paddingHorizontal:15}}>
                <Text style={[styles.descricao,{textAlign:'left', padding:10, fontSize:13}]}>
                {info.beneficios2} 
                {/*
                <Text style={{fontFamily:'Roboto-Bold', fontSize:13}}>{'\n\n'}Benefícios:</Text> {info.beneficios2}</Text>
                */}
                </Text>
              </View>
            </Card>
            </View>
          ))}
        </View>

      </Animated.ScrollView>
    </Container>
      
    );
  }
}

const styles = StyleSheet.create({
  
  card_pequeno:{
    elevation:0,
    backgroundColor:'white', 
    borderRadius:24, 
    width:150,
    height:123, 
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

  descricao_card: {
    color:'#1e2023',
    fontFamily:'Roboto-Regular',
    fontSize: 14,
    marginTop: 6,
    textAlign:'center',
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

export default Doesin_prev;