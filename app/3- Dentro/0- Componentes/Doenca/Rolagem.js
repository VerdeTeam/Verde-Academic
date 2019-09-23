import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    Image
} from "react-native";
import { Surface} from 'react-native-paper';

class Rolagem extends Component {
    render() {
        return (
            <Surface style={[styles.surface,{backgroundColor:'white', borderRadius:6, width: 106, height: 120, borderWidth: 0.5, borderColor: 'white'}]}>
                <View style={{borderColor:'white', borderRadius:5, width: 106, height: '115%', borderWidth: 0.5, borderColor: 'white' }}>
                    <View style={{ flex: 1.6 }}>
                        <Image source={this.props.imageUri}
                            style={{ flex: 1, width: '98%', height: '80%', borderRadius:3 }}
                        />
                    </View>
                    <View style={{flex: 1, marginLeft:'2%', marginRight:'2%', paddingTop: 6}}>
                        <Text style={{color:'black', fontSize:11, textAlign:'center'}}>{this.props.name}</Text>
                    </View>
                </View>
           </Surface>
        );
    }
}
export default Rolagem;

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