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

export default class Lost2 extends Component {


  constructor(){
    super()
    this.state = {
      showMe:false,
      repor_texto:'Enviar o Codigo Novamente',
      repo_texto_cor:'#FFAA00',
      repo_texto_toque:false,
      //TRR: Actions.introducao() 
    }
  }


  _submit(a) { 
    if(a==2){
      Actions.lost3(); 
    } 
    if(a=='re_enviar'){
      this.setState({showMe:true, repo_texto_toque:true})
      this._contador_stop()
    }  
  }

  _contador_stop()
  {
    setTimeout(() =>
    {
      this.setState({showMe:false, repor_texto:'Codigo Enviado, por favor aguarde!', repo_texto_cor:'#5F9039'})
      setTimeout(() =>
      {
        this.setState({ repor_texto:'Enviar o Codigo Novamente', repo_texto_cor:'#FFAA00',repo_texto_toque:false})
      },30000)
    },5500)

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
          Introduza o codigo que acabamos de enviar para o seu contacto: <Text style={[styles.descricao_desc,{fontWeight:'bold'}]}>994-301-106</Text>!{'\n\n\n'}
          </Text>
          <Text style={styles.descricao2}>Código de Confirmação</Text>
          <TextInput maxLength={6} underlineColorAndroid='gray' keyboardType='numeric'
          placeholder="00 - 00 - 00"/>
       
          <View style={{flexDirection:'row'}}>
            <TouchableOpacity disabled={this.state.repo_texto_toque} onPress={()=> this._submit('re_enviar')}>
              <Text style={{marginLeft:3, marginTop:12, color:this.state.repo_texto_cor, fontFamily: 'Roboto-Condensed',}}>{this.state.repor_texto}</Text>
            </TouchableOpacity>
            <View style={{ left:6,flex: 1,top:13, alignItems:'flex-start'}}>
              {
                this.state.showMe?
                <ActivityIndicator color="#5F9039" size={16} />
                :
                this._submit('a')
              }
            </View>
          </View>
          <TouchableOpacity disabled={this.state.repo_texto_toque} onPress={(() => Actions.lost1())}>
            <Text style={{marginLeft:3, fontSize:12,marginTop:16, color:'gray', fontFamily: 'Roboto-Condensed',}}>Re-introduzir o numero de telefónico</Text>
          </TouchableOpacity>

        </View>
      
      </View>
    
      <TouchableOpacity style={styles.botao_entrar} onPress={() => this._submit(2)}>
        <Text style={styles.textoBotao}>Confirmar</Text>
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
    marginTop: 8,
    marginLeft: 3,
    color: '#1e2023',
    textAlign: 'left',
    fontFamily: 'Roboto-Condensed',
    fontSize: 14,
  },
  descricao_desc: {
    marginTop: 12,
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
