import React from 'react';
import { StyleSheet, Text, View , TextInput , Image } from 'react-native';
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from './components/Icon';
import Ionicons from 'react-native-vector-icons/Ionicons';




const MainTab = createStackNavigator({
	Home: {
		navigationOptions: {
		title: 'Home Screen'
			},
			path: '/',
			screen: HomeScreen
	},
	Profile: {
		navigationOptions: {
		title: 'Profile Screen'
			},
			path: '/',
			screen: ProfileScreen
	}
	});


	const SecondTab = createStackNavigator({

		Profile: {
			navigationOptions: {
			title: 'Profile Screen'
				},
				path: '/',
				screen: ProfileScreen
		},
		Home: {
			navigationOptions: {
			title: 'Home Screen'
				},
				path: '/',
				screen: HomeScreen
		}
		});

const appTabStack = createBottomTabNavigator(
	{
		Home:{
			/** If we remove this navigationOt*/
			navigationOptions: {
				tabBarIcon: ({
					tintColor,
					focused,
				}) => (
					<Ionicons
					name={focused ? 'ios-home' : 'ios-home'}
					size={26}
					style={{ color: tintColor }}
						/>
				),
				tabBarLabel: 'Home',
					},
			screen:MainTab,
			path:'/'
		},
		SecondTab:{

			navigationOptions: {
				tabBarIcon: ({
					tintColor,
					focused,
				}) => (
					<Ionicons
					name={focused ? 'ios-settings' : 'ios-settings'}
					size={26}
					style={{ color: tintColor }}
						/>
				),
				tabBarLabel: 'Profile',
					},
			screen:SecondTab,
			path:'/'
		}
	}
);

	const App = createAppContainer(appTabStack);
	export default App;



