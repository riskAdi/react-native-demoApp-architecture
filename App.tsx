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
			screen:MainTab,
			path:'/'
		},
		SecondTab:{
			screen:SecondTab,
			path:'/'
		}
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: (focused,horizontal,tintColor) => {

			const { routeName } = navigation.state;
			console.log('----------routeName-----------');	
			console.log(routeName);	
			console.log('----------routeName-----------');	
			
			return <Image source = {require('./assets/home.png')} style = {{width:25,height:25}} />;
				},
		})
			}
);

	const App = createAppContainer(appTabStack);
	export default App;



