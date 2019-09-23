import React, { Component } from 'react';
import {
  StyleSheet, 
  Text, 
  View,
  Image, 
} from 'react-native';
import { Card} from 'native-base';

class Registos_Medicos extends Component {
 
  render() {
    return (

      <View style={{marginLeft:'3%', marginRight:'3%'}}>
        
        <Card style={{elevation: 1,flex:1,width:'100%', height: 83 , borderRadius:12, borderColor:'white',}} >
         
          <View style={{marginRight:'65%'}}>
            <Image source={this.props.capa} style={{width: '64%', height:83, borderBottomLeftRadius:12,borderTopLeftRadius:12, marginRight:'1%'}}/>
          </View>
          
          <View style={{marginLeft:'26%', marginTop:'1%',marginRight:'13%', position:'absolute'}}>
            <Text style={styles.titulo2}>{this.props.titulo}</Text>
            <Card noShadow={true} style={{marginRight:'56%', marginLeft:'-1%', backgroundColor:this.props.statuscolor, borderRadius:6, borderColor:'white'}}>
              <Text style={[styles.status, {marginTop:'4%', marginBottom:'8%', textAlign:'center'}]}>{this.props.statusname}</Text>  
            </Card>
           
            <View style={{marginTop:'0%', flexDirection:'row'}}>
              <Image 
              style={{width:14.9, height:15.5}}
              source={this.props.iconeT}/>
              <Text style={[styles.infoNoticia,{marginTop:'0%',marginLeft: '4%', textAlign: 'left',}]}>{this.props.statusdata}</Text>
            </View>
          
          </View>

         
          <View style={{marginLeft:'90%', marginTop:'9.5%', position:'absolute'}}>
            <Image source={this.props.icon} style={{width: 10, height:18, borderRadius:5, marginRight:'1%'}}/>
          </View>
       
        </Card>     
      </View>
    );
  }
}

export default Registos_Medicos;

const styles = StyleSheet.create({
  titulo2: {
    color:"black",
    fontFamily:'Roboto-Bold',
    fontSize: 15,
    textAlign:'left',
    fontWeight:'500',
  },

  status: {
    color:"white",
    textAlign: 'left',
    fontFamily:'Roboto-Condensed',
    fontSize:14,
  },
  infoNoticia: {
    color:"#636363",
    fontFamily:'Roboto-Condensed',
    fontSize:12,    
  },
});