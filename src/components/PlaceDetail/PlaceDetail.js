import React from 'react';
import {Modal,View,Image,Text,Button,StyleSheet} from 'react-native';
const PlaceDetail = props =>{
	let modalContent = null;
	if(props.selectedPlace){
		modalContent = (
			<View>
				<Image source={props.selectedPlace.image}/>
				<Text>
					{props.selectedPlace.name}
				</Text>
			</View>
		)
	}

	return(
		<Modal visible={props.selectedPlace!==null} animationType="fade">

			<View style={styles.modalContainer}>
				{modalContent}
				<View>
					<Button title="delete" color="red"/>

					<Button title="Close"/>
				</View>
			</View>
		</Modal>


	)
	
}

const styles = StyleSheet.create({
	modalContainer:{
		margin:30
	}
});
export default PlaceDetail;