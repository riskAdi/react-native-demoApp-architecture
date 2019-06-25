import React from 'react';
import { StyleSheet, Text, View , TextInput } from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';

const AppStack = createStackNavigator({
	Home:HomeScreen,
	Profile:ProfileScreen
},{
	initialRouteName: 'Home',
	defaultNavigationOptions: {
		headerStyle: {
			backgroundColor: '#f4511e',
		},
		headerTintColor: '#eee',
		headerTitleStyle: {
			fontWeight: 'bold',
		},
	},
});

	const App = createAppContainer(AppStack);
	export default App;



