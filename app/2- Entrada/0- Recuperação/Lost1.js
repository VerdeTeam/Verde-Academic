import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
  StatusBar, 
  TouchableOpacity, 
  TextInput,
  ActivityIndicator,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Lost1 extends Component {



  constructor(props) {
    super(props);
      this.state = { 
        showMe:false,
        color:'#FFAA00',
        contacto:'',
        validacao:false,
        //TRR: Actions.introducao() 
      };
  }


  _submit(a) {

    if(this.state.contacto.length==9){
      this.setState({color:'#FFAA00',validacao:false})
      //  return;
    }

   // if(a=='verificacao' && this.state.contacto.length == 9){
     // if(this.state.contacto.length==9){
      //  this.setState({color:'#FFAA00',validacao:false})
      //  return;
      //}
    //}
    if(a==2){
        this.setState({showMe:true})
        this._submit('pular')
    }
    if(a=='pular'){
      this._contador()
    }
  }

  _contador(){
    setTimeout(() =>
    {
      this.setState({showMe:false})
      Actions.lost2(); 
    },2500)
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="dark-content" hidden={false}
          backgroundColor="white" translucent={true}
        />

        <View style={styles.bloco1}>
          <TouchableOpacity>
            <Image style={styles.logo}source = {require('../../../assets/icon/padrão/logo.png')} />
          </TouchableOpacity>
        </View>

        <View style={styles.bloco2}>
          <View style={{top:16}}>
            <Text style={styles.titulo}>Palavra Passe</Text>
            <Image style={styles.icone_2}source = {require('../../../assets/icon/padrão/reset1.png')} />
          </View>
        </View>

        <View style={styles.bloco3}>

          <View style={styles.inputdefault}>

            <Text style={styles.descricao_desc}>
            Introduza abaixo o seu numero do telemóvel e nós
            iremos envialo um código de confirmação!{'\n\n\n'}
            </Text>
            <Text style={styles.descricao2}>Nº do Telemóvel</Text>
            <TextInput underlineColorAndroid='gray' keyboardType='numeric'
            placeholder="(+244)" autoCapitalize= "none"
            dataDetectorTypes= 'phoneNumber'
            onChange={()=> this._submit('verificacao')}
            onChangeText={(contacto) => this.setState({contacto})}
            //  onChangeText={(contacto)=>this.setState({contacto})}
            maxLength={9} autoCorrect= {false}/>
         
          </View>
        
          <View style={{ flex: 1,marginTop:60}}>
          {
            this.state.showMe?
            <ActivityIndicator color="#5F9039" size="large" />
            :
            this._submit()
          }
          </View>

        </View>
      
        <TouchableOpacity disabled={this.state.validacao} style={[styles.botao_entrar,{backgroundColor:this.state.color}]} onPress={() => this._submit(2)}>
          <Text style={styles.textoBotao}>Solicitar Código de Confirmação</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  /* BOTÃO */
  botao_entrar: {
    backgroundColor:'#FFAA00',
    padding:10,
    marginBottom:'4%',
    borderRadius:18,
    marginLeft:'3%',
    marginRight:'3%',
  },
  textoBotao: {
    fontFamily: 'Roboto-Condensed',
    fontSize: 14,
    color: 'white',
    alignSelf: 'center',
  },
  /*Icones - IMAGENS*/
  logo: {
   // position: "absolute",
    zIndex: 20,
    marginTop: 25,
    width: 221,
    height: 113,
    alignSelf: 'center',
  },
  icone_2: {
    width: 75,
    height: 5,
    marginTop: 3,
    marginLeft: 26,
  },
  /* INPUT */
  inputdefault: {
    marginLeft: 30,
    marginRight: 25,
    top: 16,
  },

  /*Textos*/
  titulo: {
    color: '#1e2023',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    marginTop: 30,
    marginLeft: 25,
    textAlign: 'left',
    fontWeight: '700'
  },
  descricao: {
    marginTop: 50,
    marginLeft: 3,
    color: '#5f6267',
    textAlign: 'left',
    fontFamily: 'Roboto-Condensed',
    fontSize: 14,
  },
  descricao2: {
    marginTop: 12,
    marginLeft: 3,
    color: '#1e2023',
    textAlign: 'left',
    fontFamily: 'Roboto-Condensed',
    fontSize: 14,
  },
  descricao_desc: {
    marginTop: 16,
    marginLeft: 3,
    color: '#5f6267',
    textAlign: 'left',
    fontFamily: 'Roboto-Condensed',
    fontSize: 14,
  },
  /*BLOCOS*/
  bloco1: {
   // flex: 0.8,
    alignContent: 'center',
  //  backgroundColor:'blue'
  },
  bloco2: {
    flex: 0.3,
   // backgroundColor:'pink'
  },
  bloco3: {
  //  backgroundColor:'red',
    flex: 1,
  },
});
