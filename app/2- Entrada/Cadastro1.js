import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
  StatusBar, 
  TouchableOpacity, 
  TouchableWithoutFeedback,
  TextInput,
  DatePickerAndroid,
  Picker,
} from 'react-native';
import {Content} from 'native-base';

import firebase from 'firebase';

import { Actions } from 'react-native-router-flux';



export default class Cadastro1 extends Component {

  state = {
    simpleDate: new Date(2018, 18, 4),
    simpleText: 'Selecionar',
  };

  criarUsuario(){
    var email="domingosamandionet@gmail.com";
    var senha="Domingos92";

    const usuario = firebase.auth();
    usuario.createUserWithEmailAndPassword(
      email,
      senha
    );

  
  }

  showPicker = async (stateKey, options) => {
    try {
      var newState = {};
      const {action, year, month, day} = await DatePickerAndroid.open(options);
      if (action === DatePickerAndroid.dismissedAction) {
        newState[stateKey + 'Text'] = 'Cancelado';
      } else {
        var date = new Date(year, month, day);
        newState[stateKey + 'Text'] = date.toLocaleDateString();
        newState[stateKey + 'Date'] = date;
      }
      this.setState(newState);
    } catch ({code, message}) {
      console.warn(`Error in example '${stateKey}': `, message);
    }
  };

  _submit() {
    Actions.login();    
  }


  render() {
    return (
   

      <View style={styles.container}>
        
        <StatusBar barStyle = "dark-content" hidden = {false} 
          backgroundColor = "white" translucent = {true}
        />
       
        <View>
          <TouchableOpacity onPress={() => this._submit()}> 
            <Image style={styles.logo}source = {require('../../assets/icon/padrão/logo.png')} />
          </TouchableOpacity>
        </View>

        <View>
          <Text style={styles.titulo}>Criar Conta</Text>
          <Image style={styles.icone_2}source = {require('../../assets/icon/padrão/cadastro1.png')} />
        </View>

      <Content>

        <View style={styles.bloco1}> 

          <View style={styles.inputdefault}>
            <Text style={styles.descricao}>Nome Completo</Text>
            <TextInput underlineColorAndroid='gray' 
            placeholder="Maria Gaspar" placeholderTextColor="gray"
            ref="nome" returnKeyType= {'next'}
            autoCapitalize= "none" autoCorrect= {false}
            onSubmitEditing={(event) => {this.refs.bi.focus();}}
            ref="nomecompleto" returnKeyType= {'next'}/>
          </View>  
          

          <View style={styles.inputdefault}>              
            <Text style={styles.descricao}>Nº do Bilhete de Identidade</Text>
            <TextInput underlineColorAndroid='gray'
            ref="bi" returnKeyType= {'next'} autoCapitalize= "none" autoCorrect= {false}
            maxLength={13} placeholder="12345678LA901" onSubmitEditing={(event) => {this.refs.telefone.focus();}}/>
          </View>

          <View style={styles.inputdefault}>
            <Text style={styles.descricao}>Nº Telefónico</Text>
            <TextInput ref="telefone" underlineColorAndroid='gray'
            dataDetectorTypes= 'phoneNumber'maxLength={9} placeholder="(+244)"
            onSubmitEditing={(event) => {this.refs.passe.focus();}}
            />
          </View>

          <View style={{marginTop:-10, marginBottom:20,flexDirection:'row'}}>
            
            <View style={styles.inputdefault}>
              <Text style={styles.descricao}>Turma</Text>
              <TextInput underlineColorAndroid='gray' 
              placeholder="ET11B" placeholderTextColor="gray"
              ref="turma" returnKeyType= {'next'}
              autoCapitalize= "none" autoCorrect= {false}
              maxLength={5}
              onSubmitEditing={(event) => {this.refs.bi.focus();}}
              ref="nomecompleto" returnKeyType= {'next'}/>
            </View>  

            <View style={[styles.inputdefault,{width:'40%'}]}>
              <Picker 
                selectedValue={this.state.language}
                onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
                <Picker.Item label="Instituição" value="" />
                <Picker.Item label="Piaget" value="m" />
                <Picker.Item label="Imil" value="f" />
              </Picker>
            </View>
          </View>
          
        
        </View>
      
      </Content>

      <TouchableOpacity style={[styles.botao_entrar,{elevation:0}]} onPress={()=>{this.criarUsuario}}>
        <Text style={styles.textoBotao}>Criar Conta Estudante</Text>
      </TouchableOpacity>           
    
    </View> 
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent:'center',
    backgroundColor: 'white',
    justifyContent: 'center'
  },
  /* BOTÃO */
  botao_entrar:{
    backgroundColor:'#5F9039',
    padding:10,
    marginBottom:'4%',
    borderRadius:18,
    marginLeft:'3%',
    marginRight:'3%',
  },
  textoBotao:{
    fontFamily:'Roboto-Condensed',
    fontSize:14,
    color:'white',
    alignSelf: 'center',
  },
  botao_fundo2:{
    backgroundColor:'#FFAA00',
    padding:10,
    borderWidth:1,
    borderColor:'white',
    borderRadius: 2,
    shadowColor:'red',
    shadowOpacity: 0.4,
  },
  /*Icones - IMAGENS*/
  logo:{
    marginTop:25,
    marginBottom: 10,
    width: 221, 
    height: 113,
    alignSelf: 'center',
  },

  icone_2:{
    width: 68, 
    height: 5,
    marginTop: 3,
    marginLeft: 26,
  },
  /* SCROLL VIEW */
  Picker:{
    marginRight:50,
    height: 90, 
    width: 320, 
    fontSize:14,
    
  },
  /* INPUT */

  inputdefault:{
      marginLeft:50,
      marginRight:50, 
      marginTop:30,
  },

  /*Textos*/
  titulo: {
    color:"#1e2023",
    fontFamily:'Roboto-Bold',
    fontSize: 18,
    marginTop: 25,
    marginLeft: 25,
    textAlign:'left',
    fontWeight:'700'
  },
  descricao: {
    marginTop:12,
    marginLeft: 3,
    color:'#1e2023',
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },
  bloco1: {
    flex: 2,
  },
});