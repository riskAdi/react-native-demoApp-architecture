
import React from 'react';
import { View, Text , Button } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


export default class Profilecreen extends React.Component{
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
		tabBarLabel: 'Profile',
  };
  

	componentDidMount(){

	console.log('This is component did mount Profile Screen');
}

render(){

	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
		<Text>Profilecreen</Text>
		</View>

	);
}
}
