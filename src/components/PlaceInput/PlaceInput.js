import React, {Component} from 'react';
import {Text,TextInput,Button,View, StyleSheet} from 'react-native';
export default class placeInput extends Component{
	
	state = {
	    placeName:''
  	}
  	// to handle or take text input in textInput
	  placeNameChangedHandler = (val)=>{
	    this.setState({
	      placeName:val
	    });
	    
	  };

	  placeSubmitHandler = () =>{
	    if(this.state.placeName.trim() === ""){
	      // if empty none is returned
	      return;
	    }
	    this.props.onPlaceAdded(this.state.placeName);
	    
	  }
		render()
		{
			return(
				<View style={styles.inputContainer}>
			        <TextInput
			          onChangeText={this.placeNameChangedHandler}
			          placeholder="Write your Name here"
			          style={styles.placeInput}
			        />
			        <Button title="add" 
			          style={styles.placeButton}
			          onPress = {this.placeSubmitHandler}
			        />
		      	</View>

			);
		}
}

const styles = StyleSheet.create({
	inputContainer:{
    // flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    width:"100%"

  },
  placeInput:{
    width:"70%",
  },
  placeButton:{
    width:"30%"
  }
});