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
            <View style={{width: 104,  height: 130, marginLeft: 20, borderWidth: 0.5, borderColor: 'transparent' }}>
                <View style={{ flex: 2, borderRadius:12, backgroundColor:this.props.corfundo,  }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderRadius:12 }}
                    />
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
    titulo:{
        fontFamily:'Roboto-Condensed',
        color:'black', 
        fontSize:12, 
        textAlign:'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});