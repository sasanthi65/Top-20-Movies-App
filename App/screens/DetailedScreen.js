import React,{Component} from "react";
import { StyleSheet, View, Text } from "react-native";


export default class DetailedScreen extends Component{
    render(){
        const name = this.props.route.params.title;
        // const {route} = this.props.route;
        return(
            // <Text> {this.props.navigation.getParam('title')}</Text>
            <Text> {name}</Text>
        );
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