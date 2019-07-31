import React from 'react';
import {FlatList,StyleSheet} from 'react-native';
import ListItem from '../ListItem/ListItem';

const PlaceList = props =>{
	// to output the places array using map function
    // const placesOutput = props.places.map((place,i) => (
    //     <ListItem 
    //     	key={i} placeName={place} 
    //     	onItemPressed={()=>props.onItemDeleted(i)}/>
    // ));
	return(
		// data prop define what data it is going to render
		// without data list is not render
		<FlatList style={styles.listContainer}
				data={props.places}
				renderItem={(info)=>(
					<ListItem
		        		placeName={info.item.name}
		        		placeImage={info.item.image}
		        		keys={info.item.key}
		        		onItemPressed={()=>props.onItemDeleted(info.item.key)}
        			/>
				)}
		/>
	);
};

const styles = StyleSheet.create({
	listContainer:{
    	width:"100%"
  	}
}
);
export default PlaceList;