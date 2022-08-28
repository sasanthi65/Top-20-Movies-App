import React,{Component} from "react";
import { StyleSheet, View, Text, Image } from "react-native";


export default class DetailedScreen extends Component{
    render(){
        const name = this.props.route.params.title;
        const overview = this.props.route.params.overview;
        const poster_path = this.props.route.params.poster_path;
        const original_language = this.props.route.params.original_language; 
        const popularity = this.props.route.params.popularity;
        const release_date = this.props.route.params.release_date;
        return(
            <View style={styles.container}>
                <Text style={styles.title}> {name}</Text>
                <Image style={styles.image} source={{uri:"https://image.tmdb.org/t/p/w500/"+poster_path}}></Image>
                <Text style={styles.textStyle}>Overview: {overview}</Text>
                <Text style={styles.textStyle}>Original Language: {original_language}</Text>
                <Text style={styles.textStyle}>popularity: {Math.round(popularity/100)}%</Text>
                <Text style={styles.textStyle}>Release Date: {release_date}</Text>
            </View>    
        );
    }  
}

//.toLocaleString("en", {style: "percent"})
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
        backgroundColor:'#4d5967',
    },
    title:{
        marginTop:6,
        fontSize:28,
    },
    textStyle:{
        fontSize:14,
        marginLeft:20,
    },
    image:{
        width:300,
        height:320,
        resizeMethod:'auto',
        resizeMode:'contain',
        alignContent:'center', 
        justifyContent:'center',
        alignItems:'center',   
        borderWidth:0.5,
        padding: 20,
        margin:10,
        borderRadius:20,
    }
})