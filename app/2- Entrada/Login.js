import React, {Component} from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Alert,
  TextInput,
  StatusBar, 
  TouchableOpacity, 
  Image,
  CheckBox,
  ActivityIndicator,
} from 'react-native';
import {Button, Card} from 'native-base';
import { Snackbar} from 'react-native-paper';
import { Actions } from 'react-native-router-flux';
import firebase from 'firebase';

export default class Login extends Component {

  componentDidMount(){
    /*firebase.database().ref('teste').push({
      name: 'teste'
    })*/

    setTimeout(() =>
    {this.setState({
      showMe:false
    })
    },150)
  }
  constructor(props) {
    super(props);
      this.state = { 
        user: '(+244) ', 
        user_save: '', 
        pass: '*****',
        pass_save: '', 
        user_name: 'Domingos Neto',
        showMe:false,
        //CONTROLO DAS CONTAS DE CADASTRO
        conta: 'Entrar', // CONTROLO DOS TEXTOS DA AREA 2
        conta1:'Criar Conta', // CONTROLO DOS TEXTOS DA AREA 1
        cor2:'#FFAA00', // CONTROLO DAS SEGUNDAS CORES
        cor1:'#5F9039', // CONTROLO DAS PRIMIERAS CORES
        entrega1:5,
        entrega2:0,
        entrar_icon: require('../../assets/icon/entrar.png'), // CONTROLO DO ICONE DA AREA 2
        conta_icon: require('../../assets/icon/new_user.png'), // CONTROLO DO ICONE DA AREA 1 
        //FIM CONTROLO DAS CONTAS DE CADASTRO

        //criar_conta: this._submit(2),
        };
    }  

/*
            //CONTROLO DAS CONTAS DE CADASTRO
            conta: 'Entrar', // CONTROLO DOS TEXTOS DA AREA 2
            conta1:'Criar Conta', // CONTROLO DOS TEXTOS DA AREA 1
            cor2:'#FFAA00', // CONTROLO DAS SEGUNDAS CORES
            cor1:'#5F9039', // CONTROLO DAS PRIMIERAS CORES
            entrega:0, // CONTROLO DAS LIGAÇÕES PARA OS DEPARTAMENTOS DE CADASTRO
            entrar_icon: require('../../assets/icon/entrar.png'), // CONTROLO DO ICONE DA AREA 2
            conta_icon: require('../../assets/icon/new_user.png'), // CONTROLO DO ICONE DA AREA 1 
            //FIM CONTROLO DAS CONTAS DE CADASTRO
    
*/
    state = {
        trueCheckBoxIsOn: true,
        falseCheckBoxIsOn: false,
        sucesso: false,
        erro: false,
        erro1: false,
        erro2: false,
        erro3: false,
        erro4: false,
    }


    _cadastro2(){
      /* A FUNÇÃO DO CADASTRO 2 E VERIFICAR SE OS BOTÕES FORMA MUDADOS 
      E DAR O LINK TODAL NO BOTÃO MUDADO */
      if(this.state.entrega1==1){
        Actions.cadastro();
      }
      if(this.state.entrega1==5 || this.state.entrega1 == 0){
        this.setState({ 
          entrega1:1, 
          entrega2:2, 
          conta:'Estudante',
          conta1:'Passiente', 
          cor1:'#C0223E', 
          cor2:'#1882B2', 
          conta_icon: require('../../assets/icon/passiente.png'), 
          entrar_icon: require('../../assets/icon/estudante.png')})
      }
    }


    _cadastros(b){

      if (b == 1) {
        Actions.cadastro();  
      }

      if (b == 2) {
        Actions.cadastro1();  
      }

      if (b == 0) {
      
        if (this.state.user_save == '123' && this.state.pass_save == '123') {
          this.setState({ sucesso: true });
          //this.setState.visible=true;
          //this.state.visible = true;
          // Actions.entrar(); 
          return;
        }
  
        //
  
        if (this.state.user_save.length == 0 && this.state.pass_save.length == 0) {
          this.setState({ erro: true });
          return;
        }
  
        if (this.state.user_save.length == 0 && this.state.pass_save.length >= 1) {
          this.setState({ erro4: true });
          return;
        }
        
        if (this.state.user_save.length < 9 && this.state.user_save.length >=0) {
          this.setState({ erro1: true });
          return;
        }
        if (this.state.user_save.length == 9 && this.state.pass_save == '' ) {
          this.setState({ erro2: true });
          return;
        }
        if (this.state.user_save.length == 9 && this.state.pass_save.length < 8 ) {
          this.setState({ erro3: true });
          return;
        }
        if (this.state.pass_save.length > 1) {
          this.setState({ erro3: true });
          return;
        }
        
       // Actions.dashBoard();  
      }

      if(b == 4){
        Actions.entrar(); 
      }

      /*
      if(b==1){
        
          Alert.alert('Função Ativada', 'Bem Vindo'),[
            {text: 'Esta bem'},
          ];
          return;
        
      }
      if(b==2){
        Alert.alert('Função 2 Ativada', 'Bem Vindo'),[
          {text: 'Esta bem'},
        ];
        return;
      }

      */

    }


  _submit(a) {
    
    
    if (a == 'pressao') {
      Alert.alert('Pressão', 'Bem Vindo'),[
        {text: 'Esta bem'},
      ];
      return;
    }

    if (a == 1) {
      Actions.lost1(); 
    }
    
    if (a == 2) {
      Actions.cadastro();  
    }
    
    if (a == 3) {
      
      if (this.state.user_save == '123' && this.state.pass_save == '123') {
        this.setState({ sucesso: true });
        //this.setState.visible=true;
        //this.state.visible = true;
        // Actions.entrar(); 
        return;
      }

      //

      if (this.state.user_save.length == 0 && this.state.pass_save.length == 0) {
        this.setState({ erro: true });
        return;
      }

      if (this.state.user_save.length == 0 && this.state.pass_save.length >= 1) {
        this.setState({ erro4: true });
        return;
      }
      
      if (this.state.user_save.length < 9 && this.state.user_save.length >=0) {
        this.setState({ erro1: true });
        return;
      }
      if (this.state.user_save.length == 9 && this.state.pass_save == '' ) {
        this.setState({ erro2: true });
        return;
      }
      if (this.state.user_save.length == 9 && this.state.pass_save.length < 8 ) {
        this.setState({ erro3: true });
        return;
      }
      if (this.state.pass_save.length > 1) {
        this.setState({ erro3: true });
        return;
      }
      
     // Actions.dashBoard();  
    }
    if(a == 4){
      Actions.entrar(); 
    }
  }

  

  render() {
    
    return (
    <View style={styles.container}>


        <Snackbar
          style={{backgroundColor:'red', borderRadius:16}}
          visible={this.state.erro1}
          duration={1200}
          onDismiss={() => this.setState({ erro1: false })}
        >
            Numero Telefonico Desconhecido.
        </Snackbar>


        <Snackbar
          style={{backgroundColor:'#42952A', borderRadius:16}}
          visible={this.state.sucesso}
          duration={2200}
          onDismiss={() => this._cadastros(4)}
        >
          Bem Vindo <Text style={styles.Sucesso}>Domingos Neto</Text>                
        </Snackbar>

        <Snackbar
         // style={{backgroundColor:'red'}}
          style={{ borderRadius:16}}
          visible={this.state.erro}
          duration={800}
          onDismiss={() => this.setState({ erro: false })}
          /*action={{
            label: 'Re Introduzir',
            onPress: () => {
              // Do something
            },
          }}*/
        >
          Prencha os Campos.
        </Snackbar>

        <Snackbar
          style={{backgroundColor:'red', borderRadius:16}}
          visible={this.state.erro1}
          duration={1200}
          onDismiss={() => this.setState({ erro1: false })}
        >
          Numero Telefonico Desconhecido.
        </Snackbar>

        <Snackbar
          style={{backgroundColor:'black', borderRadius:16}}
          visible={this.state.erro2}
          duration={1200}
          onDismiss={() => this.setState({ erro2: false })}
        >
          Digite a Sua Palavra Passe.
        </Snackbar>

        <Snackbar
          style={{backgroundColor:'red', borderRadius:16}}
          visible={this.state.erro3}
          duration={1200}
          onDismiss={() => this.setState({ erro3: false })}
        >
          Palavra Passe Incorreta.
        </Snackbar>

        <Snackbar
          style={{borderRadius:16}}
          visible={this.state.erro4}
          duration={1200}
          onDismiss={() => this.setState({ erro4: false })}
        >
          Digite o Seu Numero Telefonico.
        </Snackbar>

      <View>
        <StatusBar barStyle = "dark-content" hidden = {false} 
          backgroundColor = "white" translucent = {true}
        />
      </View>
      <View style={styles.bloco1}>
        <Image style={styles.logo}source = {require('../../assets/icon/padrão/logo.png')} />
      </View>

      <View style={styles.bloco2}>
        <Text style={styles.titulo}>Entrar</Text>
        <Image style={styles.icone_2}source = {require('../../assets/icon/padrão/login1.png')} />
      </View>

      <View style={styles.bloco3}>  
        
        <Card noShadow={true} style={{marginLeft:'8%', marginRight:'8%', borderWidth:1, borderColor:'white', borderRadius: 8}}>
          
          <View style={styles.inputdefault}>
            <Text style={styles.descricao}>Nº do Telemóvel</Text>
            <TextInput underlineColorAndroid='gray' returnKeyType= {'next'} 
            autoCapitalize= "none" dataDetectorTypes= 'phoneNumber'
            maxLength={9} autoCorrect= {false}
            onSubmitEditing={(event) => {this.refs.passwordTextInputRef.focus();}}
            keyboardType="numeric" returnKeyType= {'next'} 
            onChangeText={(user_save) => this.setState({user_save})}
            placeholder={this.state.user}/>
          </View>  
          
          <View style={styles.inputdefault}>
            <Text style={styles.descricao}>Palavra Passe</Text>
            <TextInput ref="passwordTextInputRef" textContentType='password' 
            underlineColorAndroid='gray' secureTextEntry={true}
            onChangeText={(passwordInputTxt) => this.setState({passwordInputTxt})}
            onChangeText={(pass_save) => this.setState({pass_save})}
            placeholder={this.state.pass}/>
          </View>
          
          <View style={[styles.inputdefault,{justifyContent:'center'}]}>
          
            <TouchableOpacity style={{color:'#FFAA00',}}>
              <Text style={styles.forgetpass} onPress={() => this._submit(1)}>Esqueceu a Palavra Passe ?</Text>
            </TouchableOpacity>
          
          </View>  
        
        </Card>
        
        {/* FUNÇÃO DOS BOTÕES DE AÇÃO */}
        <View style={{flex:1, bottom:'6%', position:'absolute'}}>
        
          <View style={{flexDirection:'row'}}>
            {/* BOTÃO 1*/}
            <TouchableOpacity 
             // onPress={()=> this._cadastros(this.state.entrega1)} 
              onPress={() => this._cadastro2()}
              onLongPress={() => this.setState({ entrega1:0, entrega2:0, conta:'Entrar', conta1:'Criar Conta', cor1:'#5F9039', cor2:'#FFAA00', entrar_icon: require('../../assets/icon/entrar.png'),conta_icon: require('../../assets/icon/new_user.png')})}
              style={[styles.botao_entrar,{backgroundColor:this.state.cor1, width:'28%'}]}
            >
              {/* CLIQUE 2*/}
              <TouchableOpacity
                onLongPress={() => this.setState({ entrega1:0, entrega2:0, conta:'Entrar', conta1:'Criar Conta', cor1:'#5F9039', cor2:'#FFAA00', entrar_icon: require('../../assets/icon/entrar.png'),conta_icon: require('../../assets/icon/new_user.png')})}
                onPress={() =>this.setState({ entrega1:1, entrega2:2, conta:'Estudante', conta1:'Passiente', cor1:'#C0223E', cor2:'#1882B2', conta_icon: require('../../assets/icon/passiente.png'), entrar_icon: require('../../assets/icon/estudante.png')})}
                //onPressOut={() => this._cadastro2()}
                style={{alignItems:'center', justifyContent:'center', flexDirection:'row'}}
              >
                {/* CLIQUE 1*/}
                <Image style={{ width:15, height:15}}source = {this.state.conta_icon} />
                <View style={{width:'auto', marginLeft:'3%'}}>
                  <Text style={styles.textoBotao}>{this.state.conta1}</Text>
                </View>
              
              </TouchableOpacity> 
            </TouchableOpacity>
          {/* BOTÃO 2*/}
            <TouchableOpacity  
              onPress={()=> this._cadastros(this.state.entrega2)}
              style={[styles.botao_entrar,{width:'60%', backgroundColor:this.state.cor2}]} 
            >
              {/* CLIQUE 2*/}
              <TouchableOpacity          
              onPress={() => this._cadastros(this.state.entrega2)}
              style={{alignItems:'center', justifyContent:'center'}}
              >
                {/* CLIQUE 1*/}
                <View style={{flexDirection:'row'}}>
                
                  <Image style={{ width:15, height:15}}source = {this.state.entrar_icon} />
                  <View style={{width:'auto', marginLeft:'3%'}}>
                    <Text style={styles.textoBotao}>{this.state.conta}</Text>
                  </View>
                
                </View>

              </TouchableOpacity> 
            </TouchableOpacity>     
          </View>

        </View>


      </View>   
    
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
    backgroundColor:'#FFAA00',
    padding:10,
    marginBottom:'2%',
    borderRadius:18,
    marginLeft:'3%',
    marginRight:'3%',
  },
  Sucesso: {
    marginLeft: 3,
    color:"white",
    textAlign: 'center',
    fontFamily:'Roboto-Bold',
    fontSize:14,
    //fontWeight:'700',
  },
  textoBotao:{
    fontFamily:'Roboto-Condensed',
    fontSize:14,
    color:'white',
    textAlign:'left',
  },
  /*Icones - IMAGENS*/
  logo:{
    position: "absolute",
    zIndex: 20,
    marginTop:'4%',
    width: 221,
    height: 113,
    alignSelf: 'center',
  },
  icone_2:{
    width: 38, 
    height: 5,
    marginTop: 3,
    marginLeft: 26,
  },

  /* INPUT */
  inputdefault:{
      marginLeft:'5%',
      marginRight:'5%', 
      marginTop:'5%',
  },

  /*Textos*/
  titulo: {
    color:'#1e2023',
    fontFamily:'Roboto-Bold',
    fontSize: 18,
    marginTop: 0,
    marginLeft: 25,
    textAlign:'left',
  },
  descricao: {
    marginTop:12,
    marginLeft: 3,
    color:'#1e2023',
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },
  salvarsessao:{
      marginTop:'-2%',
      marginLeft: 35,
      color:"#FFAA00",
      textAlign: 'left',
      fontFamily:'Roboto-Bold',
      fontSize:12,
  },

  forgetpass:{
      color:'#FFAA00',
      marginBottom: '4%',
      textAlign: 'left',
      fontFamily:'Roboto-BoldCondensed',
      fontSize:13,
    },

  /*BLOCOS*/
  bloco1: {
    flex: 0.3,
    alignContent: 'center',
   // backgroundColor:'red'
  },
  bloco2: {
    flex: 0.1,
    //backgroundColor:'yellow'
  },
  bloco3: {
    flex: 0.7,
    //backgroundColor:'green'
  },
  bloco4: {
      flex: 0.2,
      alignContent: 'center',
     // backgroundColor:'pink',
  },
});
