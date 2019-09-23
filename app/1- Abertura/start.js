import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  Image,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

export default class start extends Component {

  constructor(){
    super()
    this.state = {
      showMe:true,
     // TRR: Actions.introducao() 
    }
  }

  componentWillMount(){

    setTimeout(() =>
    {
      Actions.entrar(); 
     // Actions.login(); 
    },500)

  }

  _submit(a) {
    
  //  Actions.login(); 
    Actions.entrar();
    return;
  }

  
  render() {
    return (
      <View style={styles.container}>
      
        <StatusBar barStyle = "dark-content" hidden = {true} 
        backgroundColor = "white" translucent = {true}
        />
      
        <View style={styles.bloco1}>
          <Image style={styles.logo} source = {require('../../assets/icon/padrão/icone.png')} />
        </View>
    
        <View style={{ flex: 1,marginTop:'90%', marginBottom:'20%'}}>
          {
            this.state.showMe?
            <ActivityIndicator color="#4C8E38" size="large" />
            :
            this._submit(1)
          }
        </View>
    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  //<ProgressBarAndroid  color="#FFAA00" progress={0.0}/>
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  logo:{
    width:90,
    height:94,
    marginTop:'60%',
    marginLeft:'38%',
    marginRight:'38%',
   // backgroundColor:'red',
  },

  /*BLOCOS*/
  bloco1: {
    flex: 1,
    alignContent:'center',
    //backgroundColor:'red',
  },
});
