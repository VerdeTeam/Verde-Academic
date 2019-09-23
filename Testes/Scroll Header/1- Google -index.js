import React, {Component} from 'react';
import {
  StyleSheet, Text, View, ScrollView, Image,
  StatusBar,
  TextInput,
} from 'react-native';

import Animated from 'react-native-reanimated';


const images =[
    {id: 1, uri: require('../../assets/Imagens/home/teste.png')},
    {id: 2, uri: require('../../assets/Imagens/home/teste.png')},
    {id: 3, uri: require('../../assets/Imagens/home/teste.png')},
    {id: 4, uri: require('../../assets/Imagens/home/teste.png')},
]

const HEADER_HEIGHT = 55


export default class New_Header extends Component {

  render() {

    const scrollY = new Animated.Value(2);
    const diffClampScrollY = Animated.diffClamp(scrollY, 0,
      HEADER_HEIGHT);
    const headerY = Animated.interpolate(diffClampScrollY,{
        inputRange:[0,HEADER_HEIGHT],
        outputRange:[0,-HEADER_HEIGHT],
    })
    
    return (
       <View style={{flex:1}}>  
            <Animated.View
                style={{ position:'absolute', 
                left:10, 
                right:10, 
                top:10,
                height:HEADER_HEIGHT, 
                backgroundColor:'white', 
                zIndex:1000, 
                elevation:2,
                borderRadius:12,
                borderColor:'transparent',
                //flexDirection:'row',
               // alignItems:'center',
              // justifyContent:'center',
                transform:[{ translateY: headerY}],
            }}
            >
                  <View style={{flexDirection:'row',alignItems:'center',justifyContent:'center',position:'absolute', width:'100%', height:'100%'}}>
                    <Image style={{ left:'4%',width:20, height:20, position:'absolute'}}
                    source = {require('../../assets/icon/menu/menu.png')}/>
                     <TextInput ref="pesquisa" textContentType='name' 
                        underlineColorAndroid='gray'// secureTextEntry={true}
                       // onChangeText={(passwordInputTxt) => this.setState({passwordInputTxt})}
                       // onChangeText={(pass_save) => this.setState({pass_save})}
                        placeholder="Pesquisar"/>
                    <Image style={{ right:'4%',width:23, height:23, position:'absolute'}}
                    source = {require('../../assets/icon/menu/definicao.png')}/>
                  </View>
            </Animated.View>
           <Animated.ScrollView
           bounces={false}
           scrollEventThrottle={10}
           style={{paddingTop:HEADER_HEIGHT}}
           onScroll={Animated.event([
               {
                   nativeEvent:{contentOffset:{ y: scrollY}}
               }
           ])}
           >
               {images.map(image =>(
                   <View key={image.id} style={{height:400, margin:20}}>
                      <Image source={image.uri}
                        style={{flex:1, height:null, width:null, borderRadius:10}}
                      />
                      
                      {/* <Image 
                       source={images.uri} 
                     //  style={{flex:1, height:null,
                     //   width:null, borderRadius:10}}
                     />
                     */}
                   </View>
               ))}  
           </Animated.ScrollView>
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
    }
});