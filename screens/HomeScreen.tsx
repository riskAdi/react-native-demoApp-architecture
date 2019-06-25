
import React from 'react';
import {View,Text,Button} from 'react-native';

export default class HomeScreen extends React.Component{

	componentDidMount(){
	console.log('This is component did mount Home Screen');
}

moveProfileScreen(){
    this.props.navigation.navigate('Profile');
}

render(){

	return (

		<View style={{ flexDirection: 'column', alignItems: 'center' }}>
			<Text>Home Screen</Text>
				<Button title = "Go Profile"
				onPress={()=>this.moveProfileScreen()}
				/>
		</View>
	);

}

}
