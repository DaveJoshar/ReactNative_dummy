import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput,Button } from 'react-native';
import ListItem from "./src/components/ListItem/ListItem.js";
import PlaceInput from "./src/components/PlaceInput/PlaceInput.js"
import PlaceList from "./src/components/PlaceList/PlaceList.js"

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
  render(){

  return (
    <View style={styles.container}>
      <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
      // <PlaceList places={this.state.places}/>
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
