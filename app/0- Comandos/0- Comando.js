
/** *

COMANDO DE CONTROLO INICIAL

*/

import React, { Component } from 'react';

import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

import { Platform, BackHandler, Alert} from 'react-native';


// INICIALIZAÇÃO DO APP
import start from '../1- Abertura/start';
// ENTRADA CADASTRO
import Login from '../2- Entrada/Login';
import Cadastro from '../2- Entrada/Cadastro';
import Cadastro1 from '../2- Entrada/Cadastro1';
// RECUPERAR
import Recuperar from '../2- Entrada/0- Recuperação/Lost1';
import Lost2 from '../2- Entrada/0- Recuperação/Lost2';
import Lost3 from '../2- Entrada/0- Recuperação/Lost3';

// COMANDO DE NAVEGAÇÃO INTERNA
import COMANDO_INTERNO from '../0- Comandos/1- Comando'




/**
 * Registeres all the components used in the application for navigation
 */
class App extends Component {

  componentDidMount() {

    // Recuperação de Senha
    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene === 'lost1'){     
          Alert.alert('Alerta',
            'Deseja cancelar a recupeação da senha?',[
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

    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene ==='lost2'){     
          Alert.alert('Alerta',
            'Já lhe enviamos o codigo de confirmação!\nTem a certeza que quer cancelar?',[
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

    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene ==='lost2'){     
          Alert.alert('Alerta',
            'Já lhe enviamos o codigo de confirmação!\nTem a certeza que já não quer recuperar a sua senha?',[
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

    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene ==='lost3'){     
          Alert.alert('Alerta',
            'Esta a um passo de ter uma nova senha!\nSabe mesmo o que esta fazendo?',[
              {text: 'Sim, quero cancelar', onPress: () => {
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

    
    /** ALERTAS COM ARRAY 
     * Alert.alert(
    *   'Alert Title',
    *   'My Alert Msg',
    *   [
    *     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
    *     {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
    *     {text: 'OK', onPress: () => console.log('OK Pressed')},
    *   ]
    * )
     * 
     * 
     * 
     */


    // Cadastro
    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene === 'cadastro'){     
          Alert.alert('Alerta',
            'Tem a Certeza Que Deseja Cancelar o Cadastro?',[
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

    // Login
    if(Platform.OS !== 'ios'){
      BackHandler.addEventListener('hardwareBackPress', () => {
        if(Actions.currentScene === 'login'){     
          Alert.alert('Alerta',
            'Deseja fechar o Verde por agora?',[
              {text: 'Sim', onPress: () => {
                BackHandler.exitApp()
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
          <Scene key={'start'} component={start} initial/>
          <Scene key={'login'} component={Login} type={ActionConst.RESET}/>
          <Scene key={'recuperar'} component={Recuperar} />
          <Scene key={'cadastro'} component={Cadastro} />
          <Scene key={'cadastro1'} component={Cadastro1} />
          <Scene key={'lost1'} component={Recuperar} type={ActionConst.RESET}/>
          <Scene key={'lost2'} component={Lost2} type={ActionConst.RESET}/>
          <Scene key={'lost3'} component={Lost3} type={ActionConst.RESET}/>
          <Scene key={'entrar'} component={COMANDO_INTERNO} type={ActionConst.JUMP}/>
        </Scene>
      </Router>
    );
  }
}

export default App;
