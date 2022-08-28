import React,{Component} from "react";
import { StyleSheet, View, Text, Image } from "react-native";


export default class DetailedScreen extends Component{
    render(){
        const name = this.props.route.params.title;
        const overview = this.props.route.params.overview;
        const poster_path = this.props.route.params.poster_path;
        return(
            <View style={styles.container}>
                <Text style={styles.title}> {name}</Text>
                <Image style={styles.image} source={{uri:"https://image.tmdb.org/t/p/w500/"+poster_path}}></Image>
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
        marginTop:3,
        alignItems:'flex-start',
        fontSize:28
    },
    textStyle:{
        fontSize:14,
    },
    image:{
        width:300,
        height:320,
        resizeMethod:'auto',
        resizeMode:'contain',
        alignContent:'center',    
        borderWidth:0.5,
        padding: 20,
        margin:10,
        borderRadius:20,
    }
})