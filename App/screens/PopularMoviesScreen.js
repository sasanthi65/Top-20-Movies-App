import React,{Component} from "react";
import { StyleSheet, View, Text, ActivityIndicator, ScrollView,} from "react-native";

export default class PopularMoviesScreen extends Component{
  constructor(){
    super();
    this.state= {
      isFetching:true,
      movieList:null,
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
    .then(res => console.log(res.results))
    })
  }

  render(){
    return(
        <View>
            <Text></Text>
        </View>
    )
  }
}