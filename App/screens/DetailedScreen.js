import React,{Component} from "react";
import { StyleSheet, View, Text } from "react-native";


export default class DetailedScreen extends Component{
    render(){
        const name = this.props.route.params.title;
        const overview = this.props.route.params.overview;
        return(
            <View style={styles.container}>
                <Text style={styles.title}> {name}</Text>
                <Text style={styles.textStyle}>{overview}</Text>
            </View>
            
        );
    }
    
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        fontSize:28
    },
    textStyle:{
        fontSize:14,
    }
})