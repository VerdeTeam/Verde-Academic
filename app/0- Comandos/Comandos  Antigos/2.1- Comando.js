import React, { Component } from 'react';

import {
  Platform,
  BackHandler,
  Alert,
} from 'react-native';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AAAAt906FIA:APA91bFFVq-5E5WSDEEtA6XQ9dlGJy1dKDcUjFLWAPOujWErNm2TvF_a5UfBs0UPsTybBJyD4SEZz8l3he8LiVfcxC5cL--XV0sXKVRkGjtxfxWcLVR-Glg4YOvbmvNB32eCS4zzgFOL',
  databaseURL:'https://saude-2b6a7.firebaseio.com/',
  storageBucket:'',
  authDomain: '',

}

firebase.initializeApp(firebaseConfig);


import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

/* IMPORTAÇÃO DO LOGIN */
import Lost1 from '../2- Entrada/0- Recuperação/Lost1';
import Lost2 from '../2- Entrada/0- Recuperação/Lost2';
import Lost3 from '../2- Entrada/0- Recuperação/Lost3';

/* IMPORTAÇÃO DOS COMANDOS */
import Login from './2- Comando'; // RETORNA COMANDO DE LOGIN


/**
 * Registeres all the components used in the application for navigation
 */
class Reset extends Component {

  componentDidMount() {

    // Cadastro
    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene === 'cadastro'){     
          Alert.alert('Alerta',
            'Deseja cancelar o cadastro?',[
              {text: 'Sim', onPress: () => {
                Actions.pop();
              }},
              {text: 'Não', onPress: () => {
                
              }},
            ],
            { cancelable: false }
          );
          return true;
        } else {
          return false;
        }
      });
    }
    // REcuperação de senha

    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene === 'lost2' || Actions.currentScene === 'lost3'){     
          Alert.alert('Alerta',
            'Deseja cancelar o processo?',[
              {text: 'Sim', onPress: () => {
                Actions.login();
              }},
              {text: 'Não', onPress: () => {
                
              }},
            ],
            { cancelable: false }
          );
          return true;
        } else {
          return false;
        }
      });
    }
  }

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>}/>
          <Scene key={'lost1'} component={Lost1} type={ActionConst.RESET} initial/>
          <Scene key={'lost2'} component={Lost2} type={ActionConst.JUMP}/>
          <Scene key={'lost3'} component={Lost3} type={ActionConst.JUMP}/>
          <Scene key={'Login'} component={Login} type={ActionConst.RESET}/>
        </Scene>
      </Router>
    );
  }
}

export default Reset;
