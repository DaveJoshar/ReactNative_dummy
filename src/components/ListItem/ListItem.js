import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity,Image} from 'react-native';


const listItem =(props) =>(
	//view doesnot have onPress prop
	// TOuchable can only have one child which could be view with text or text only

	<TouchableOpacity onPress={props.onItemPressed}>
		<View style={styles.listItem} >
			// here image resize mode is by default cover
			<Image resizeMode="contain" style={styles.placeImage} source={props.placeImage}/>
			<Text>{props.placeName}</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	listItem:{
		width:"100%",
		backgroundColor:"#eee",
		padding:10,
		marginBottom:5,
		flexDirection: 'row',
		alignItems:'center'  
	},
	placeImage:{
		marginRight:8,
		height:40,
		width:40
	}
});

export default listItem;