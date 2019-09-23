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
            <View style={{ height: 130, width: 100, marginLeft: 20, borderWidth: 0.5, borderColor: 'white' }}>
                <View style={{ flex: 2 }}>
                    <Image source={this.props.imageUri}
                        style={{ flex: 1, width: null, height: null, resizeMode: 'cover',borderRadius:3 }}
                    />
                </View>
                <View style={{ flex: 1, alignItems:'center', paddingTop: 10}}>
                    <Text style={{color:'black', fontSize:11}}>{this.props.name}</Text>
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
    }
});