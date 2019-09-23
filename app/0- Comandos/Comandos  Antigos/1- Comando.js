
/** *

COMANDO DE CONTROLO DA ABERTURA DO APP

*/

import React, { Component } from 'react';

import { Router, Scene, ActionConst, Actions } from 'react-native-router-flux';

/* IMPORTAÇÃO DO TUTORIAL */
import start from '../1- Abertura/start';


/* IMPORTAÇÃO DO TUTORIAL */
import tutorial from '../1- Abertura/tutorial';

/* IMPORTAÇÃO DOS COMANDOS */
import Login from './2- Comando'; // RETORNA COMANDO PARA A AREA DE LOGIN


/**
 * Registeres all the components used in the application for navigation
 */
class App extends Component {

  render() {
    return (
      <Router>
        <Scene key="root" hideNavBar>

          <Scene key={'start'} component={start} initial/>
          <Scene key={'tutorial'} component={tutorial} type={ActionConst.RESET}/>
          <Scene key={'login'} component={Login} type={ActionConst.RESET} />
        </Scene>
      </Router>
    );
  }
}

export default App;
