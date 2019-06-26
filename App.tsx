import React from 'react';
import { StyleSheet, Text, View , TextInput , Image } from 'react-native';
import {createStackNavigator,createAppContainer,createBottomTabNavigator} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import Icon from './components/Icon';


const HomeScreenStack = createStackNavigator({
	Home:HomeScreen
});

const ProfileScreenStack = createStackNavigator({
	Profile:ProfileScreen
});

const appTabStack = createBottomTabNavigator(
	{
		Home:{
			screen:HomeScreen,
			path:'Home'
		},
		Profile:{
			screen:ProfileScreen,
			path:'Profile'
		}
	},
	{
		defaultNavigationOptions: ({ navigation }) => ({
			tabBarIcon: () => {
			const { routeName } = navigation.state;
			return <Image source = {require('./assets/home.png')} style = {{width:25,height:25}} />;
				},
		})
			}
);

	const App = createAppContainer(appTabStack);
	export default App;



