/** *

COMANDO DE CONTROLO DO LOGIN

*/
import React, { Component } from 'react';

import {
  Platform,
  BackHandler,
  Alert,
} from 'react-native';

/*
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AAAAt906FIA:APA91bFFVq-5E5WSDEEtA6XQ9dlGJy1dKDcUjFLWAPOujWErNm2TvF_a5UfBs0UPsTybBJyD4SEZz8l3he8LiVfcxC5cL--XV0sXKVRkGjtxfxWcLVR-Glg4YOvbmvNB32eCS4zzgFOL',
  databaseURL:'https://saude-2b6a7.firebaseio.com/',
  storageBucket:'',
  authDomain: '',

}

firebase.initializeApp(firebaseConfig);
*/

import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

/* IMPORTAÇÃO DO LOGIN */
import Login from '../2- Entrada/Login';

/* IMPORTAÇÃO DO CADASTRO */
import Cadastro from '../2- Entrada/Cadastro';


/* IMPORTAÇÃO DOS COMANDOS */
//import Entrar from '';
import Recuperar from '../0- Comandos/2.1- Comando'; // COMANDO PARA A RECUPERAÇÃO DE SENHA


/**
 * Registeres all the components used in the application for navigation
 */
class App extends Component {

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

    {/* SAIR DA APLICAÇÃO - LOGIN*/}

    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene === 'login'){     
          Alert.alert('Alerta',
            'Deseja sair?',[
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
        <Scene key="root" hideNavBar>
          <Scene key={'login'} component={Login} type={ActionConst.RESET} initial/>
          <Scene key={'cadastro'} component={Cadastro} />
         {/* <Scene key={'entrar'} component={Entrar} type={ActionConst.RESET} />*/}
          <Scene key={'recuperar'} component={Recuperar} />
        </Scene>
       {/* <Scene key={'recuperar'} component={Recuperar} type={ActionConst.RESET} /> */}
      </Router>
    );
  }
}

export default App;
