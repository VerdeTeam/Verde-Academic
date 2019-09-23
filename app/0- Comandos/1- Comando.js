import React , {Component} from 'react';
import { Platform, BackHandler, Alert} from 'react-native';
import { Image, Text, StyleSheet} from 'react-native';
import {Button} from 'native-base';
import { Router, Scene, ActionConst, Actions} from 'react-native-router-flux';

/* IMPORTAÇÃO DAS TELAS */
import Home1 from '../3- Dentro/1- Pagina/home1';
import Emergencia_Principal from '../3- Dentro/1- Pagina/1 - Emergencia/1- emergencia';
import Emergencia_Prevencao from '../3- Dentro/1- Pagina/1 - Emergencia/2- emergencia';
import Emergencia_Prevencao_Final from '../3- Dentro/1- Pagina/1 - Emergencia/2.1- emergencia';
import Emergencia_Local from '../3- Dentro/1- Pagina/1 - Emergencia/1.1- emergencia';
import Emergencia_Final from '../3- Dentro/1- Pagina/1 - Emergencia/1.2- emergencia';
import Emergencia_Espera from '../3- Dentro/1- Pagina/1 - Emergencia/20- emergencia-final';
import DOESIN_Principal from '../3- Dentro/1- Pagina/2 - doencas e sintomas/1- doencas e sintomas';
import DOESIN_Prevencao from '../3- Dentro/1- Pagina/2 - doencas e sintomas/1.1- prevencao';
import DOESIN_Prevencao_Higiene from '../3- Dentro/1- Pagina/2 - doencas e sintomas/1.1.1- prevencao';
import DOESIN_Prevencao_Exercicio from '../3- Dentro/1- Pagina/2 - doencas e sintomas/1.1.2- prevencao';
import DOESIN_Doencas from '../3- Dentro/1- Pagina/2 - doencas e sintomas/1.2- prevencao';
import Nutricao_Principal from '../3- Dentro/1- Pagina/3 - Nutrição/1- nutricao';
import Gravidez_Principal from '../3- Dentro/1- Pagina/4 - Gravidez/1- gravidez';
//import Clinicas from '../3- Dentro/1- Pagina/0 - Discover/clinicas';
// FIM HOME 2
/*
import Home2 from '../3- Dentro/2- Pagina/home2';
import Rdoencas from '../3- Dentro/2- Pagina/rdoencas';
import Rmedicacao from '../3- Dentro/2- Pagina/rmedicacao';
*/
// FIM HOME 3
import Home3 from '../3- Dentro/2- Pagina/home3';
//import Artigo from '../3- Dentro/2- Pagina/artigo';
// FIM HOME 4
//import Home4 from '../3- Dentro/4- Pagina/home4';

// PADRÃO DE COMPORTAMENTO DOS ICONS DO FOOTER
import FooterIcon from '../3- Dentro/0- Componentes/Explore/FooterIcon';


//Drawable - MENU
import Menu from '../3- Dentro/0.1 - Menu/menu';
//import { Button } from 'react-native-paper'; 

{/* ICONES */}


const icon1 = ({title,focused}) => {
  var imgp = focused? require('../../assets/icon/footer/home1.png'):require('../../assets/icon/footer/home.png')
  return(
    <FooterIcon top={5} left={9} w={25} h={25} objeto={imgp}/>      
  );
};

/*
const icon2 = ({focused}) => {
  var imgp = focused? require('../../assets/icon/footer/registos1.png'):require('../../assets/icon/footer/registo.png')
  return(
    <FooterIcon top={0} w={25} h={25} objeto={imgp}/>
  );
};

*/


const icon3 = ({focused}) => {
  var imgp = focused? require('../../assets/icon/footer/registos1.png'):require('../../assets/icon/footer/registos.png')
  return(
    <FooterIcon top={0} w={25} h={25} objeto={imgp}/>
  );
};

/*
const icon4 = ({focused}) => {
  var imgp = focused? require('../../assets/icon/footer/notificacao1.png'):require('../../assets/icon/footer/notificacao.png')
 // var size = focused? 22:18
  return(
    <FooterIcon top={0} w={25} h={25} objeto={imgp}/>
  );
};

*/
const icon5 = ({focused}) => {
  var imgp = focused? require('../../assets/icon/footer/mapa1.png'):require('../../assets/icon/footer/mapa.png')
  return(
    <FooterIcon top={0} w={25} h={25} objeto={imgp}/>
  );
};

const MenuIcon = () => {  
  return(
   // <Button transparent onPress={()=> Actions.pop()}>
      <Image style={{ marginTop:-45 ,marginLeft:9, width:20, height:20}}
      source = {require('../../assets/icon/menu/menu.png')}/>
 //   </Button>
  );
};


const App = () => {

  

  return (

  <Router>
    
    <Scene key="root">
    {/*drawerIcon={MenuIcon}*/}
      <Scene initial key="drawable" drawer contentComponent={Menu} drawerIcon={MenuIcon} drawerWidth={280} hideNavBar hideBackImage>

        <Scene key="tabbar" tabs={true} showLabel = {false} activeTintColor="black" labelStyle={{fontFamily:'Roboto-Regular', fontSize:10}}
        tabBarStyle={{zIndex:1000,elevation:12,backgroundColor:'white', borderTopColor:'white'}}>

          {/* Navegação entre Tabs (Footer - TELAS)*/}

          {/* TELA 1*/}
          <Scene key="tab1" title="Início" titleStyle={styles.titulo} navTransparent icon={icon1}>
            
            <Scene initial key={'home1'} component={Home1} type={ActionConst.RESET} initial/>  
            <Scene key="emergencia_p" title="Evite Acidentes" component={Emergencia_Principal} type={ActionConst.PUSH} />
            <Scene key="emergencia_pr" title="Previnir Acidente" component={Emergencia_Prevencao} type={ActionConst.PUSH} />
            <Scene key="emergencia_prf" title="Previnir Acidente" component={Emergencia_Prevencao_Final} type={ActionConst.PUSH} />
            <Scene key="emergencia_l" title="Pronto Socorro" component={Emergencia_Local} type={ActionConst.PUSH} />
            <Scene key="emergencia_f" title="Pronto Socorro" component={Emergencia_Final} type={ActionConst.PUSH} />
            <Scene key="doesin_p" title="Doenças e Sintomas" component={DOESIN_Principal} type={ActionConst.JUMP} />
            <Scene key="doesin_pr" title="Prevenção" component={DOESIN_Prevencao} type={ActionConst.PUSH} />
            <Scene key="doesin_pr_h" title="Higiene" component={DOESIN_Prevencao_Higiene} type={ActionConst.PUSH} />
            <Scene key="doesin_pr_e" title="Exercícios" component={DOESIN_Prevencao_Exercicio} type={ActionConst.PUSH} />
            <Scene key="doesin_d" title="Doenças" component={DOESIN_Doencas} type={ActionConst.PUSH} />
            <Scene key="nutricao_p" title="Nutrição" component={Nutricao_Principal} type={ActionConst.PUSH} />
            <Scene key="gravidez_p" title="Dicas Para Gravidas" component={Gravidez_Principal} type={ActionConst.PUSH} />
         
          </Scene>
          
          
          {/* TELA 2
          <Scene key="tab2" title="Registos" titleStyle={styles.titulo} navTransparent icon={icon2}> 
        
            <Scene title="Registos Médicos" key={'home2'} component={Home2}/>
            <Scene key={'rdoencas'} component={Rdoencas}/> 
            <Scene key={'rmedicacao'} component={Rmedicacao}/> 

          </Scene>

          */}
          
          {/* TELA 3*/}
          <Scene key="tab3" title="Atalhos"titleStyle={styles.titulo} navTransparent icon={icon3}> 
            
            <Scene key={'home3'} component={Home3} type={ActionConst.JUMP}/> 
           
          </Scene>

          {/* TELA 4
          <Scene key="tab4" title="Notificações" titleStyle={styles.titulo} navTransparent icon={icon4}> 
            
            <Scene key={'home4'} component={Home4}/> 

          </Scene>
          */}

          {/* TELA 5*/}
          <Scene key="tab5" title="Mapa" titleStyle={styles.titulo} navTransparent icon={icon5}> 
            
            <Scene key={'home1'} component={Home1}/> 
            
          </Scene>

        </Scene>
       
      </Scene>
      
      {/**NAVEGAÇÃO ENTRE O DEPARTAMENTO CLINICAS
      <Scene key="clinicas" hideNavBar component={Clinicas} type={ActionConst.PUSH} />   
      */}
      <Scene key="emergencia_espr" title="Pronto Socorro" 
      component={Emergencia_Espera} type={ActionConst.RESET} hideNavBar/>
    </Scene>

  </Router>
  );
}


const styles = StyleSheet.create({
  titulo: {
    fontFamily:'Medium', 
    fontSize:20, 
    marginLeft:1,
    marginTop:-48,
    color:'#181819',
  },
  titulo_noticia:{
    fontFamily:'times', 
    fontWeight:'bold',
    fontSize:20, 
    marginLeft:1,
    marginTop:-48,
    color:'#181819',
  }
});

export default App;