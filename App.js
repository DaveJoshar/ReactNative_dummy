import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import ListItem from "./src/components/ListItem/ListItem.js";
import PlaceInput from "./src/components/PlaceInput/PlaceInput.js"
import PlaceList from "./src/components/PlaceList/PlaceList"

export default class App extends Component {
  state = {
    placeName:' ',
    places:[]
  }
  // // to handle or take text input in textInput
  // placeNameChangedHandler = (val)=>{
  //   this.setState({
  //     placeName:val
  //   });
    
  // };

  placeAddedHandler = (placeName) =>{
    
    this.setState(prevState => {
        return{
          // concat to pervious state places
            places : prevState.places.concat(placeName)
        };
    });
  }

  placeDeletedHandler = index =>{
    this.setState(prevState=>{
      return{

        //return false if index passed is equal to i
        //filter returns new array satisfying specific criteria
        places: prevState.places.filter((place,i)=>{
          return i !== index;
        })
      }
    })
  }
  render(){

  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
      <PlaceList places={this.state.places} 
                onItemDeleted={this.placeDeletedHandler}
      />
    </View>
  );
}}

const styles = StyleSheet.create({
  container: {
    flex:1,
    paddingTop:50,
    margin:10,
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
  
});
