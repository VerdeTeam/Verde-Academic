import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

import {Card} from 'native-base'

class Category extends Component {
    render() {
        return (
            <Card style={{elevation:0,width: null,  height: 99, marginLeft: 15, borderRadius:16, borderColor: 'transparent', flexDirection:'row' }}>
                <View style={{width:105}}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderBottomLeftRadius:16, borderTopLeftRadius:16 }}
                    />
                </View>
                <View style={{width:160, paddingTop: 5, left:12,flexDirection:'column'}}>
                    <Text style={styles.titulo}>{this.props.name}</Text>
                    <Text style={styles.descricao}>Especializada em: <Text style={[styles.descricao,{fontWeight:'bold', color:'black'}]}>QUEIMADURAS</Text></Text>
                    <View style={{flexDirection:'row',width:null, top:5, left:-1}}>
                        <Image source={require('../../../../assets/icon/footer/mapa1.png')} style={{width:15, height:15, marginTop:'4.9%', marginRight:'2%'}}/>
                        <Text style={styles.descricao}>Av- Comandante Gica - c3 - Bairro Anda</Text>
                    </View>
                    <View style={{bottom:'-6%', flexDirection:'row'}}>
                        <Text style={styles.descricao}>Qualidade de Serviço: </Text>
                        <View style={{left: 6, top:6, flexDirection:'row'}}>
                            <Image source={require('../../../../assets/icon/star.png')} style={{width:13, height:13, marginRight:'2%'}}/>
                            <Image source={require('../../../../assets/icon/star.png')} style={{width:13, height:13, marginRight:'2%'}}/>
                            <Image source={require('../../../../assets/icon/star.png')} style={{width:13, height:13, marginRight:'2%'}}/>
                            <Image source={require('../../../../assets/icon/star.png')} style={{width:13, height:13, marginRight:'2%'}}/>
                        </View>
                    </View>
                </View>
                <View style={{alignItems:'center', justifyContent:'center', left:25}}>
                    <Image source={require('../../../../assets/icon/avancar.png')} style={{width:20, height:20, marginRight:'2%'}}/>
                </View>
            </Card>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    titulo:{
        fontFamily:'Roboto-Bold',
        color:'black', 
        fontSize:16, 
        textAlign:'left',
    },
    descricao:{
        fontFamily:'Roboto-Condensed',
        color:'#5F6267', 
        fontSize:12, 
        textAlign:'left',
        top:5
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});