import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";

class Category extends Component {
    render() {
        return (
            <View style={{width: 104,  height: 130, marginLeft: 15, borderWidth: 0.5, borderColor: 'white' }}>
                <View style={{ flex: 2 }}>
                    <View style={{ flex: 1, width: '100%', height: 20, resizeMode: 'cover',borderRadius:12, backgroundColor:this.props.fundo,borderColor:this.props.cor , borderWidth:1, justifyContent:'center', alignItems:'center'}}
                    >
                        <Text style={[styles.desc,{textAlign:'center', color:this.props.cor}]}>{this.props.media}</Text>
                        <View style={{position:'absolute'}}>
                            <Image source={this.props.download} style={{width:this.props.largura, height:this.props.altura}}/>
                        </View>
                    </View>
                </View>
                <View style={{flex: 1, paddingTop: 10}}>
                    <Text style={styles.titulo}>{this.props.name}</Text>
                </View>
            </View>
        );
    }
}
export default Category;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    desc:{
        fontFamily:'Roboto-Bold',
        fontSize:20,
        fontWeight:'bold'
    },
    titulo:{
        fontFamily:'Roboto-Condensed',
        color:'#1e2023', 
        fontSize:13, 
        textAlign:'center'
    }
});