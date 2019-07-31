import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';


const listItem =(props) =>(
	<TouchableOpacity onPress={props.onItemPressed}>
		<View style={styles.listItem} >
			<Text>{props.placeName}</Text>
		</View>
	</TouchableOpacity>
);

const styles = StyleSheet.create({
	listItem:{
		width:"100%",
		backgroundColor:"#eee",
		padding:10,
		marginBottom:5

	}
});

export default listItem;