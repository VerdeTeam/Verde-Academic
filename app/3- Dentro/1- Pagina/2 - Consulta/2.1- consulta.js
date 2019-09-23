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
import Swiper from 'react-native-swiper';
import {Divider} from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import Animated from 'react-native-reanimated';
import { white } from 'ansi-colors';


import Dialog, {
    DialogTitle,
    DialogContent,
    DialogFooter,
    DialogButton,
    SlideAnimation,
    ScaleAnimation,
  } from 'react-native-popup-dialog';
  

{/*
import Alertando from '../../app/Alerts'
const Alertar = () => {
  return(
    <Alertando nome={'Domingos'}/>
  );
};
*/}

const medicacao =[
  {id: 1, produto:'Paracetamol', propriedade: '500 G'},
  {id: 2, produto:'Mebentazol', propriedade: 'Pumada'},
  {id: 3, produto:'Triplex', propriedade: '10 G'},
  {id: 4, produto:'Diclorofinacol', propriedade: '500 G'},
  {id: 5, produto:'Bi Carbonato', propriedade: 'Sódio'},
]

const medicacao_produto =[
    {id: 1, horario:['08 h : 30 m','pedra','porra'], quantidade: '2', dias:'7'},
    {id: 2, horario:'14 h : 20 m', quantidade: '1'},
    {id: 3, horario:'18 h : 30 m', quantidade: '2'},
    {id: 4, horario:'22 h : 10 m', quantidade: '3'},
  ]

const medicacao_datas =[
    {id: 1, horario:'08 h : 30 m', quantidade: '2', dias:'7'},
    {id: 2, horario:'14 h : 20 m', quantidade: '1'},
    {id: 3, horario:'18 h : 30 m', quantidade: '2'},
    {id: 4, horario:'22 h : 10 m', quantidade: '3'},
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

    _medicacao(a){
        if(a==1){
            this.setState({
                defaultAnimationDialog: true,
            })
        }
    }

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
      customBackgroundDialog: false,
      defaultAnimationDialog: false,
      scaleAnimationDialog: false,
      slideAnimationDialog: false,
      titulo_produto:'Pedra',
      titulo_propriedade:'Pedra',
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
      
      <View style={{position:'absolute',shadowColor:'white',elevation:1.5, zIndex:110,backgroundColor:'white', width:210, height:49.5, borderBottomRightRadius:23, borderbottomrightColor:'transparent', borderColor:'transparent'}}>{/* MANIPULAÇÃO DO SCROLL DO MENU */}
        <Right style={{left:70,flexDirection:'row',top:-2}}>
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
          
          <View  style={{paddingTop:20}}>   
            <Image style={{ zIndex:10,width:24, height:24, position:'absolute', left:22,top:20}}
            source = {require('../../../../assets/icon/atencao_circulo.png')}/>
                <Card style={{elevation:0,marginTop:'3%',             
                borderRadius:23, 
                borderColor:'transparent',
                backgroundColor:'#C0223E',
                height:140,
                }}
                >
                    <View style={{flex:1, marginLeft:5, marginRight:20, marginTop:20}}>
                     <Text style={[styles.descricao,{color:'white'}]}>As nossas receitas são geradas com base em analises antes feitas 
                     em outros pacientes e na recuperação deles, apesar desta certeza que podemos 
                     lhe transmitir, ainda assim, sugerimos que visite um hospital para mais detalhes… 
                     <Text style={{fontFamily:'Roboto-Bold'}}>Cumprimentos do Verde!</Text></Text>
                    </View>
                </Card>
          </View>

          <View style={{paddingTop:30, paddingBottom:15}}>
          <Text style={[styles.descricao,{textAlign:'left', paddingBottom:10}]}>Receita Médica - <Text style={{fontFamily:'Roboto-Bold'}}>Gerada Pelo Verde</Text></Text>
           <Card style={{elevation:0, backgroundColor:'white', borderRadius:23, borderColor:'transparent'}}>
              <View style={{paddingTop:15, paddingBottom:15}}>
                <View style={{marginLeft:15, marginRight:33}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={styles.titulo_normal}>PRODUTO</Text>
                        <Text style={styles.titulo_normal}>PROPRIEDADE</Text>
                    </View>
                    {medicacao.map(conteudo =>(
                    <TouchableOpacity key={conteudo.id} onPress={()=> this.setState({titulo_produto:(conteudo.produto),titulo_propriedade:(conteudo.propriedade),defaultAnimationDialog: true})} style={{paddingTop:10}}>
                    <View style={{paddingLeft:20, paddingRight:4, paddingTop:5, paddingBottom:5}}>
                       <Divider style={{borderWidth:0.5}}/>
                    </View>
                        <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                            <Text style={[styles.titulo_normal,{fontFamily:'Roboto-Regular'}]}>{conteudo.produto}</Text>
                            <Text style={[styles.titulo_normal,{fontFamily:'Roboto-Regular'}]}>{conteudo.propriedade}</Text>
                        </View>
                    </TouchableOpacity>
                    ))}
                </View>
              </View>
            </Card>
          </View>

          <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          dialogStyle={{borderRadius:23}}
          width={0.9}
          visible={this.state.defaultAnimationDialog}
          dialogTitle={
           <View style={{justifyContent:'center', alignItems:'center', paddingTop:10, paddingBottom:10, flexDirection:'row'}}>
                <Text style={[styles.titulo_normal,{fontSize:16}]}>{this.state.titulo_produto} de {this.state.titulo_propriedade}</Text>
           </View>
          }
          footer={
            <View style={{alignItems:'center', backgroundColor:'white', paddingBottom:10}} >
                <Button transparent 
                style={{justifyContent:'center', alignItems:'center', alignSelf:'center'}}
                  onPress={() => {
                    this.setState({ defaultAnimationDialog: false });
                  }}
                >
                    <Image style={{zIndex:10,width:34, height:34}}
                        source = {require('../../../../assets/icon/fechar_circulo.png')}
                    />
                </Button>
            </View>
          }
        >
          <DialogContent
            style={{
              backgroundColor: 'white',
            }}
          >
            <View style={{paddingTop:15, paddingBottom:15}}>
                <View style={{marginLeft:5, marginRight:23}}>
                    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                        <Text style={[styles.titulo_normal,{fontSize:12}]}>HORARIO</Text>
                        <Text style={[styles.titulo_normal,{fontSize:12}]}>QUANTIDADE</Text>
                        <Text style={[styles.titulo_normal,{fontSize:12}]}>DIAS</Text>
                    </View>
                    <View style={{paddingTop:10}}>
                    {medicacao_datas.map(conteudo =>(
                        <View key={conteudo.id}>
                            <View style={{paddingLeft:20, paddingRight:4, paddingTop:5, paddingBottom:5}}>
                            <Divider style={{borderWidth:0.5}}/>
                            </View>
                            <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                                <Text style={[styles.titulo_normal,{fontFamily:'Roboto-Regular'}]}>{conteudo.horario}</Text>
                                <Text style={[styles.titulo_normal,{fontFamily:'Roboto-Regular'}]}>{conteudo.quantidade}</Text>
                                <Text style={[styles.titulo_normal,{fontFamily:'Roboto-Regular'}]}>{conteudo.dias}</Text>
                            </View>
                        </View>
                    ))}
                    </View>
                </View>
              </View>
          </DialogContent>
        </Dialog>

      </Animated.ScrollView>
    </Container>
      
    );
  }
}

/*



          <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          width={0.9}
          visible={this.state.defaultAnimationDialog}
          rounded
          actionsBordered
          // actionContainerStyle={{
          //   height: 100,
          //   flexDirection: 'column',
          // }}
          dialogTitle={
            <DialogTitle
              title="PARACETAMOL"
              style={{
                backgroundColor: 'white',
              }}
              hasTitleBar={true}
              align="center"
            />
          }
          footer={
            <DialogFooter>
              <DialogButton
                text="CANCELAR"
                textStyle={{color:'red'}}
                bordered
                onPress={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                key="button-1"
              />
              <DialogButton
                textStyle={{color:'green'}}
                text="CADASTRAR"
                bordered
                onPress={() => {
                  this.setState({ defaultAnimationDialog: false });
                }}
                key="button-2"
              />
            </DialogFooter>
          }
        >
          <DialogContent
            style={{
              backgroundColor: '#F7F7F8',
            }}
          >
            <Text>Ao Clicar em cadastrar, está concordando com os nossos <Text style={{color:'orange'}}>Termos de Utilização</Text> e <Text style={{color:'orange'}}>Politica de Privacidade.</Text></Text>
            
          </DialogContent>
        </Dialog>


*/

/** ALERT 2 PERSONALIZADO
 * 
 *  <Dialog
          onDismiss={() => {
            this.setState({ defaultAnimationDialog: false });
          }}
          style={{borderRadius:23}}
          width={0.9}
          visible={this.state.defaultAnimationDialog}
          rounded
          actionsBordered
          // actionContainerStyle={{
          //   height: 100,
          //   flexDirection: 'column',
          // }}
          dialogTitle={
            <DialogTitle
              title="PARACETAMOL"
              textStyle={{fontFamily:'Roboto-Bold', fontSize:14}}
              style={{
                  backgroundColor: 'white',
              }}
              hasTitleBar={false}
              align="center"
            />
          }
          footer={
            <View >
                <Button transparent 
                style={{width:'100%', justifyContent:'center', alignItems:'center'}}
                  onPress={() => {
                    this.setState({ defaultAnimationDialog: false });
                  }}
                >
                    <Image style={{zIndex:10,width:34, height:34}}
                        source = {require('../../../../assets/icon/fechar_circulo.png')}
                    />
                </Button>
            </View>
          }
        >
          <DialogContent
            style={{
              backgroundColor: 'white',
            }}
          >
            <Text>Ao Clicar em cadastrar, está concordando com os nossos <Text style={{color:'orange'}}>Termos de Utilização</Text> e <Text style={{color:'orange'}}>Politica de Privacidade.</Text></Text>
            
          </DialogContent>
        </Dialog>

 * 
 * 
 */

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

  titulo_receita: {
    color:'#1e2023',
    fontFamily:'Roboto-Bold',
    fontSize: 14,
    marginTop: 6,
    textAlign:'left'
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