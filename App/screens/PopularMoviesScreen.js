import { NavigationHelpersContext } from "@react-navigation/native";
import React,{Component} from "react";
import { StyleSheet, View , Text, Button} from "react-native";

export default class PopularMoviesScreen extends Component{
    onPressButton =()=>{this.props.navigation.navigate('Details')};
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.textStyle}>Popular Movies Screen</Text>
                <Button onPress={this.onPressButton} title="Click Me"/>
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