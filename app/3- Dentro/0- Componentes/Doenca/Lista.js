import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Surface} from 'react-native-paper';

class Lista extends Component {
    render() {
        return (
            <Surface style={[styles.surface,{backgroundColor:'white', borderRadius:6, width: 106, height: 90, borderWidth: 0.5, borderColor: 'white'}]}>
                <View style={{borderColor:'white', borderRadius:5, width: 106, height: '100%', borderWidth: 0.5, borderColor: 'white' }}>
                    <View style={{ flex: 1 }}>
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: '98%', height: '60%', borderRadius:3 }}
                        />
                    </View>
                </View>
           </Surface>
        );
    }
}
export default Lista;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    surface: {
        elevation: 5,
      },
});