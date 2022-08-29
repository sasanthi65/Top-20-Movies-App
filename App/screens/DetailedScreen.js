import React,{Component} from "react";
import { StyleSheet, View, Text, Image} from "react-native";

 
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
                <Text style={styles.percentage}>Popularity: {Math.round(popularity/100)}%</Text>
                <Image style={styles.image} source={{uri:"https://image.tmdb.org/t/p/w500/"+poster_path}}></Image>
                <Text style={styles.textStyle}>Release Date: {release_date}</Text>
                <Text style={styles.textStyle}>Original Language: {original_language}</Text>
                <Text style={styles.topic}>Overview:</Text>
                <Text style={styles.textStyle}>{overview}</Text>
            </View>    
        );
    }  
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'flex-start',
        alignItems:'center',
    },
    title:{
        marginTop:9,
        fontSize:26,
        fontWeight:'bold',
        color:'black',
    },
    topic:{
        fontSize:20,
        color:'#db1358',
        paddingRight:270,
        marginTop:10,
    },
    textStyle:{
        fontSize:17,
        marginLeft:20,
        marginRight:20,
        textAlign:'justify',
        color:'black'
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
    },
    percentage:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        fontSize:20,
        color:'#db1358'
    }
})