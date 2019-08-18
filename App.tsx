import React from 'react';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import PopupListScreen from './screens/PopupListScreen';
import {Platform} from 'react-native';
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createAppContainer, createStackNavigator,createSwitchNavigator } from 'react-navigation';
import {  zoomIn, zoomOut, fromRight } from 'react-navigation-transitions'


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
}

const AppStack = createStackNavigator(
	{ Login: LoginScreen, 
		SignUp:SignUpScreen
	},
	{
		initialRouteName: 'Login',
		transitionConfig: () => { return Platform.OS == 'android' ? fromRight(500): null}
	}
	);

const AppModalStack = createStackNavigator(
	{
		App: AppStack,
		PopupDialog: {
			screen: PopupListScreen
		}
	},
	{
		mode: "modal",
		headerMode: "none",
		transitionConfig: () => { zoomIn(1000)}
	});

const AppContainer = createAppContainer(
	createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppModalStack
	},
	{
		initialRouteName: 'AuthLoading'
	}
	));
const store = createStore(
	rootReducer,
	applyMiddleware(...middleware)
	)

export default class App extends React.Component {

	render(){
		return (
			<Provider store={store}>
				<AppContainer/>
			</Provider>
		)
	}
}



