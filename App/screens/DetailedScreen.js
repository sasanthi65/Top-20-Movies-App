import React,{Component} from "react";
import { StyleSheet, View, Text } from "react-native";

export default class DetailedScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Detailed Screen</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    textStyle:{
        fontSize:28,
    }
})