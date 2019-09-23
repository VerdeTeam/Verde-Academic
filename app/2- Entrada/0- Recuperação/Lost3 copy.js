import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
  StatusBar, 
  TouchableOpacity, 
  TextInput,
} from 'react-native';

import { Actions } from 'react-native-router-flux';

export default class Lost3 extends Component {


  _submit(a) {
    if(a==1){
      Actions.login(); 
    }   
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
          
          <View style={{marginTop:'-6%'}}>
            <Text style={styles.titulo}>Palavra Passe</Text>
            <Image style={styles.icone_2}source = {require('../../../assets/icon/padrão/reset1.png')} />
          </View>
        
        </View>

        <View style={styles.bloco3}>
      
          <View style={styles.inputdefault}>
            <Text style={styles.descricao_desc}>
            Introduza a nova palvra passe{'\n\n\n'}
            </Text>
            <Text style={styles.descricao2}>Nova Palavra Passe</Text>
            <TextInput underlineColorAndroid='gray' 
            returnKeyType='next' placeholder="Password"
            onSubmitEditing={(event) => {this.refs.confirm.focus();}}/>
            <Text style={styles.descricao2}>{'\n'}Repita a Palavra Passe</Text>
            <TextInput underlineColorAndroid='gray' 
            placeholder="Repita" ref="confirm"
            secureTextEntry={true}/>
          </View>
      
        </View>

        <TouchableOpacity style={styles.botao_entrar}>
          <Text style={styles.textoBotao}>Salvar</Text>
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
    zIndex: 20,
    marginTop: '6%',
    marginBottom: 10,
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
    marginLeft: 25,
    marginRight: 25,
    marginTop: -12,
  },
  /*Textos*/
  titulo: {
    color: '#1e2023',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
    marginTop: 25,
    marginLeft: 25,
    textAlign: 'left',
    fontWeight: '700'
  },
  descricao: {
    marginTop: 50,
    marginLeft: 3,
    color: "black",
    textAlign: 'left',
    fontFamily: 'Roboto-Condensed',
    fontSize: 14,
  },
  descricao2: {
    marginTop: 12,
    marginLeft: 3,
    color: "black",
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
    flex: 0.8,
    alignContent: 'center'
  },
  bloco2: {
    flex: 0.3,
  },
  bloco3: {
    flex: 1,
  },
});
