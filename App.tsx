import React from 'react';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createAppContainer, createStackNavigator,createSwitchNavigator } from 'react-navigation';

const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
}

const AppStack = createStackNavigator({ Login: LoginScreen , SignUp:SignUpScreen },{
	initialRouteName: "Login"
	});
const AppContainer = createAppContainer(createSwitchNavigator(
	{
		AuthLoading: AuthLoadingScreen,
		App: AppStack
	},
	{
		initialRouteName: 'AuthLoading',
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



