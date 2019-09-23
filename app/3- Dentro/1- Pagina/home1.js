import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  StatusBar,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {Card, Container, Button, Right} from 'native-base';
import Swiper from 'react-native-swiper'
import { Actions } from 'react-native-router-flux';
import Animated from 'react-native-reanimated';



const slide = [
  { id: 1, uri: require('../../../assets/Imagens/publicidade/1.jpg') },
  { id: 2, uri: require('../../../assets/Imagens/publicidade/2.jpg') },
  { id: 3, uri: require('../../../assets/Imagens/publicidade/3.jpg') },
  { id: 4, uri: require('../../../assets/Imagens/publicidade/4.jpg') },
  { id: 5, uri: require('../../../assets/Imagens/publicidade/5.jpg') },
]



{/*
import Alertando from '../app/Alerts'
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
    if (a == 'doencas') {
      Actions.adoencas()
    }
    if (a == 'categoria') {
      Actions.hospital_categoria()
    }
    if (a == 'categoriaall') {
      Actions.hospital_categorias()
    }
  }

  constructor(props) {
    super(props)
    this.state = {
      active: 'true',
      shadow: true,
      fake_shadow: 0,
      // {/*DROP DOWN*/}selected: undefined
    };
  }




  render() {

    //SCROLL MENU FUNCTIOM
    const scrollY = new Animated.Value(0);
    const diffClampScrollY = Animated.diffClamp(scrollY, 0,
      HEADER_HEIGHT);
    const headerY = Animated.interpolate(diffClampScrollY, {
      inputRange: [0, HEADER_HEIGHT],
      outputRange: [0, -HEADER_HEIGHT],
    })


    return (
      <Container style={{ backgroundColor: '#f4f4f4' }}>
        {/* <Alertar/>*/}

        <View style={{ position: 'absolute', shadowColor: 'white', elevation: 1.5, zIndex: 110, backgroundColor: 'white', width: 160, height: 49.5, borderBottomRightRadius: 23, borderbottomRightColor: 'transparent', borderColor: 'transparent' }}>{/* MANIPULAÇÃO DO SCROLL DO MENU */}
          <Right style={{ left: 60, flexDirection: 'row', top: -2 }}>
            <Button transparent>
              <Image style={{ left: -15, width: 24, height: 24 }}
                source={require('../../../assets/icon/menu/pesquisa.png')} />
            </Button>
            {/*
          <Button transparent>
            <Image style={{ width:24, height:24}}
            source = {require('../../../assets/icon/menu/notificacao.png')}/>
          </Button>
          */}
          </Right>
        </View>

        {/* <View style={{position:'absolute',elevation:1, zIndex:110,backgroundColor:'white', width:115, height:49.5, borderBottomRightRadius:10}}/>{/* MANIPULAÇÃO DO SCROLL DO MENU */}


        <Animated.ScrollView
          bounces={true}
          scrollEventThrottle={18}
          showsVerticalScrollIndicator={false}
          style={{ zIndex: -100, left: 17, marginRight: 33 }}
          // onScrollEndDrag={this.setState({fake_shadow:2})}
          onScroll={Animated.event([
            {
              nativeEvent: { contentOffset: { y: scrollY } }
            }
          ])}
        //onScrollEndDrag={this.setState({fake_shadow:2})}
        // onScrollAnimationEnd={}
        >

          <View>
            <StatusBar barStyle="dark-content" hidden={false}
              backgroundColor="white" translucent={false}
            />
          </View>

          <View style={{ paddingTop: 65 }}>

            <Card style={{
              elevation: 0, marginTop: '3%',
              borderRadius: 23,
              borderColor: 'transparent',
              backgroundColor: 'white'
            }}
            >
              <View style={{ width: '100%', height: 155 }}>
                <Swiper height={200} horizontal={true} autoplayTimeout={4.5} autoplay showsPagination={false}
                  dotColor={'#3E3D3F'}
                  activeDotColor={'white'}
                >
                  {slide.map(imagens => (
                    <View key={imagens.id}>
                      <View style={{zIndex:10}}>
                       <Image style={styles.card_popup} source={imagens.uri} /> 
                      </View>
                      <View style={{zIndex:-10, position:'absolute', top:'2%', left:'2%'}}>
                        <ActivityIndicator color="black" size='small'/>
                      </View>
                    </View>
                  ))}
                </Swiper>
              </View>
            </Card>
          </View>

          <View style={{ paddingTop: 20 }}>

            <TouchableOpacity onPress={() => Actions.doesin_p()}>
              <Card style={{ elevation: 0, backgroundColor: '#2B9ECC', borderRadius: 23, width: null, height: 83, borderColor: 'transparent' }}>
                <Image source={require('../../../assets/Imagens/home/consulta.png')} style={{ width: '100%', height: '100%', borderRadius: 23 }} />
                <View style={{ width: '100%', flexDirection: 'row', position: 'absolute', top: 23 }}>
                  <Text style={[styles.titulo, { backgroundColor: '#2B9ECC' }]}>DOENÇAS E SINTOMAS</Text>
                  <Button style={{
                    elevation: 0, right: 12, backgroundColor: 'white', borderRadius: 23,
                    alignItems: 'center', justifyContent: 'center',
                    width: 29, height: 29, position: 'absolute'
                  }}>
                    <Image style={{ width: 24, height: 24 }}
                      source={require('../../../assets/icon/menu/avancar.png')} />
                  </Button>
                </View>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingTop: 15 }} onPress={() => Actions.nutricao_p()}>
              <Card style={{ elevation: 0, backgroundColor: '#5F9039', borderRadius: 23, width: null, height: 83, borderColor: 'transparent' }}>
                <Image source={require('../../../assets/Imagens/home/dicasdenutricao1.png')} style={{ width: '100%', height: '100%', borderRadius: 23 }} />
                <View style={{ width: '100%', flexDirection: 'row', position: 'absolute', top: 23 }}>
                  <Text style={[styles.titulo, { backgroundColor: '#5F9039' }]}>DICAS DE NUTRIÇÃO</Text>
                  <Button style={{
                    elevation: 0, right: 12, backgroundColor: 'white', borderRadius: 23,
                    alignItems: 'center', justifyContent: 'center',
                    width: 29, height: 29, position: 'absolute'
                  }}>
                    <Image style={{ width: 24, height: 24 }}
                      source={require('../../../assets/icon/menu/avancar.png')} />
                  </Button>
                </View>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingTop: 15 }} onPress={() => Actions.gravidez_p()}>
              <Card style={{ elevation: 0, backgroundColor: '#DE9E30', borderRadius: 23, width: null, height: 83, borderColor: 'transparent' }}>
                <Image source={require('../../../assets/Imagens/home/dicasparagravidas1.png')} style={{ width: '100%', height: '100%', borderRadius: 23 }} />
                <View style={{ width: '100%', flexDirection: 'row', position: 'absolute', top: 23 }}>
                  <Text style={[styles.titulo, { backgroundColor: '#DE9E30' }]}>DICAS PARA GRAVIDAS</Text>
                  <Button style={{
                    elevation: 0, right: 12, backgroundColor: 'white', borderRadius: 23,
                    alignItems: 'center', justifyContent: 'center',
                    width: 29, height: 29, position: 'absolute'
                  }}>
                    <Image style={{ width: 24, height: 24 }}
                      source={require('../../../assets/icon/menu/avancar.png')} />
                  </Button>
                </View>
              </Card>
            </TouchableOpacity>

            <TouchableOpacity style={{ paddingTop: 15, paddingBottom: 20 }} onPress={() => Actions.emergencia_p()}>
              <Card style={{ elevation: 0, backgroundColor: '#C0223E', borderRadius: 23, width: null, height: 83, borderColor: 'transparent' }}>
                <Image source={require('../../../assets/Imagens/home/emergencia1.png')} style={{ width: '100%', height: '100%', borderRadius: 23 }} />
                <View style={{ width: '100%', flexDirection: 'row', position: 'absolute', top: 23 }}>
                  <Text style={[styles.titulo, { backgroundColor: '#C0223E' }]}>KIT DE PRIMEIROS SOCORROS</Text>
                  <Button style={{
                    elevation: 0, right: 12, backgroundColor: 'white', borderRadius: 23,
                    alignItems: 'center', justifyContent: 'center',
                    width: 29, height: 29, position: 'absolute'
                  }}>
                    <Image style={{ width: 24, height: 24 }}
                      source={require('../../../assets/icon/menu/avancar.png')} />
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
  card: {
    elevation: 1,
    marginLeft: '3%',
    marginRight: '3%',
    borderRadius: 13,
    borderColor: 'transparent',
  },
  card_image: {
    width: '100%',
    height: '100.2%',
    // borderBottomLeftRadius:18,
    // borderBottomRightRadius:18, 
    borderRadius: 13,
    borderColor: 'transparent',
  },
  card_popup: {
    width: '100%',
    height: '100%',
    // borderBottomLeftRadius:18,
    // borderBottomRightRadius:18, 
    borderRadius: 23,
    borderColor: 'transparent',
  },
  titulo: {
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 14,
    marginTop: 6,
    marginLeft: 16,
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: 'left',
    backgroundColor: 'black',
    borderRadius: 23
  },
  subtitulo_apoio: {

    backgroundColor: '#5F9039',
    width: 'auto',
    height: 25,
    paddingLeft: 6,
    paddingRight: 6,
    borderRadius: 12,
    top: 50,
    alignSelf: 'center',
    color: 'white',
    fontFamily: 'Roboto-Bold',
    fontSize: 20,
    textAlign: 'center',
    position: 'absolute',
    zIndex: 30
  },
  subtitulo: {
    fontFamily: 'Roboto-Condensed',
    color: '#5f6267',
    fontSize: 12,
    textAlign: 'center',
  },
  descricao_botao: {
    color: "white",
    alignSelf: 'center',
    fontFamily: 'Roboto-Condensed',
    fontSize: 14,
  },

  /*BLOCOS*/

  bloco2: {
    flex: 1,
    alignContent: 'center',
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