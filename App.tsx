import React from 'react';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import TaskScreen from './screens/NewTasksScreen';
import DashboardScreen from './screens/DashboardScreen';
import PopupListScreen from './screens/PopupListScreen';
import {Platform,TouchableOpacity,Text,View} from 'react-native';
import AuthLoadingScreen from './screens/AuthLoadingScreen'
import { Header } from 'react-native-elements';
import LinearGradient from 'react-native-linear-gradient';
import rootReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import Icon from 'react-native-vector-icons/FontAwesome';
import { createLogger } from 'redux-logger'
import { createAppContainer, createStackNavigator,createSwitchNavigator } from 'react-navigation';
import { zoomIn, zoomOut, fromRight } from 'react-navigation-transitions'
import { NavigationActions } from 'react-navigation';
import { AsyncStorage } from 'react-native';
import { SESSION } from './config';

import { MenuProvider, withMenuContext ,Menu,
	MenuOptions,
	MenuOption,
	MenuTrigger} from 'react-native-popup-menu';


const middleware = [ thunk ]
if (process.env.NODE_ENV !== 'production') {
	middleware.push(createLogger())
}

let _navigator

const AppStack = createStackNavigator(
	{ 	Login: LoginScreen, 
		SignUp:SignUpScreen
	},
	{
		initialRouteName: 'Login',
		transitionConfig: () => { return Platform.OS == 'android' ? fromRight(500): null}
	}
);

const Openner = (props) => (
	<TouchableOpacity 
	  onPress={() => props.ctx.menuActions.openMenu('menu-1')}>
	  <Icon
								name='ellipsis-h'
								size={normalize(24)}
								color='white'
							/>
	  <Menu>
      <MenuTrigger text='' />
	  <MenuOptions style={{padding:normalize(10),paddingLeft:normalize(5)}}>
	  
		<MenuOption onSelect={() => { 
			alert(`settings`)  
		}} >

		<View style={{height:normalize(15),flexDirection:'row',alignItems:'center'}}>
			<Icon style={{height:normalize(15)}} name='cogs' size={normalize(15)} color='black' />
			<Text style={{height:normalize(15), paddingLeft: normalize(5),paddingTop:2}}>Settings</Text>
			</View>
		</MenuOption>
		<MenuOption 
			onSelect={ async () =>{ 
				
				 await AsyncStorage.removeItem(SESSION.EMAIL)
				_navigator._navigation.navigate('App')
		}}
		 >

			<View style={{height:normalize(15),flexDirection:'row', flexWrap:'wrap'}}>
			<Icon style={{height:normalize(15)}} name='sign-out' size={normalize(15)} color='black' />
			<Text style={{height:normalize(15),paddingLeft: normalize(5)}}>Sign out</Text>
			</View>	
        </MenuOption>
      </MenuOptions>
    </Menu>
	</TouchableOpacity>
  );
  
const ContextOpenner = withMenuContext(Openner);

const DasboardStack = createStackNavigator(
	{ 	Dashboard: DashboardScreen
	},
	{
		initialRouteName: 'Dashboard',

		defaultNavigationOptions:{
			header:<Header
			centerComponent={{ text: 'Dashboard', style: { color: '#fff' } }}
			rightComponent={<ContextOpenner />}
		  />
		},
	
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
		headerMode: "none"
	});

const AppContainer = createAppContainer(
	createSwitchNavigator(
	{
		AuthLoading:{ screen:AuthLoadingScreen},
		App: {screen:AppModalStack},
		Dashboard:{screen:DasboardStack}
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
			<MenuProvider>
				<AppContainer ref={navigatorRef => {
					_navigator = navigatorRef
				  }}
				  />
			</MenuProvider>
			</Provider>
		)
	}
}



