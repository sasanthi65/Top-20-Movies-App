import React,{Component} from "react";
import { StyleSheet, View, Text, TouchableOpacity,FlatList, SafeAreaView, ActivityIndicator, Image} from "react-native";
export default class PopularMoviesScreen extends Component{
  constructor(){
    super();
    this.state= {
      isFetching:false,
      movieList:[],
    }
  };

  componentDidMount(){
    this.setState({isFetching:true}, ()=>{
      fetch('https://api.themoviedb.org/3/movie/popular?api_key=c4669cfb558067fec6d01ab4552a4c26&language=en-US&page=1',{
      method:'GET',
      headers:{
        Accept : 'application/json',
      }
    }).then(res => res.json())
    .then(res => this.setState({isFetching:false, movieList:res.results}))
    .catch((error) =>{(console.error(error))})
    });
  }

  render(){
    // movie items are loaded with title, overview and poster
    const Item = ({ list, title , overview , poster_path}) => (
        <TouchableOpacity onPress={()=> this.props.navigation.navigate('Details',list)}
            style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <Image style={styles.image} source={{uri:"https://image.tmdb.org/t/p/w500/"+poster_path}}/>
          <Text style={styles.textStyle}>{overview}</Text>
        </TouchableOpacity>
      );

      // render each movie item
    const renderItem = ({item}) => (
        <Item list={item} 
        title={item.title}
        poster_path={item.poster_path}
        overview={item.overview}/> 
      );
    
    const {movieList, isFetching}= this.state;
    if(isFetching){
        return(
            <View style={styles.container}>
              <ActivityIndicator/>
            </View>
          );
    }else{
        return(
        <SafeAreaView style={styles.container}>
            <FlatList 
            data={movieList}
            renderItem={renderItem}
            keyExtractor={item => item.id}/>    
        </SafeAreaView>
    )}   
  }
};

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:"#ddd"
    },
    item: {
        flex:1,
        backgroundColor:"#fff",
        padding: 20,
        margin:10,
        borderRadius:20,
        alignSelf:'stretch',
        alignItems:'center',
        justifyContent:'center',   
    },
    title: {
        fontSize: 28,
        color:'black',
        marginBottom:5,
    },
    textStyle:{
        fontSize:15,
        color:'black',
        alignContent:'space-between',
        textAlign:'justify'
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