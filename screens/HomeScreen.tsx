
import React from 'react';
import {View,Text,Button} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default class HomeScreen extends React.Component{
	static navigationOptions = {
		tabBarIcon: ({
			tintColor,
			focused,
			horizontal,
		}: {
			tintColor: string;
			focused: boolean;
			horizontal: boolean;
		}) => (
			<Ionicons
				name={'ios-chatboxes'}
				size={horizontal ? 20 : 26}
				style={{ color: tintColor }}
			/>
		),
		tabBarLabel: 'Home',
	};

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
