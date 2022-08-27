import React,{Component} from "react";
import { StyleSheet, View, Text, TouchableOpacity,FlatList, SafeAreaView} from "react-native";
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
    })
  }

  moreDetails=()=>{
    this.props.navigation.navigate('Details')
    };

  render(){
    // movie items are loaded with title, overview and poster
    const Item = ({ title , overview }) => (
        <TouchableOpacity onPress={this.moreDetails} style={styles.item}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.title}>{overview}</Text>
        </TouchableOpacity>
      );
      // render each movie item
    const renderItem = ({ item}) => (
        <Item title={item.title} 
        overview={item.overview}/>
        
      );
    
    const {movieList, isFetching}= this.state;
    // const message = isFetching? 'Connecting': movieList.title;
    return(
        <SafeAreaView style={styles.container}>
            <FlatList
                data={movieList}
                renderItem={renderItem}
                keyExtractor={item => item.id}/>
        </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
    },
    item: {
        flex:1,
        alignSelf:'stretch',
        margin:10,
        alignItems:'center',
        justifyContent:'center',
        borderBottomWidth:2,
        // borderBottomColor:'#eee',
        // borderRadius:4
    },
    title: {
        fontSize: 28,
        color:'black'
      },
  })