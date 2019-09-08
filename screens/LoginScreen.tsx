
import React from 'react';
//import LayoutTester from "react-native-device-screen-switcher";
import { NormalText } from '../styles/style'
import { View, Image, Text,AsyncStorage } from 'react-native';
import {normalize,validateForm} from '../utils'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import {getLoginState} from '../selectors'
import {loginAction} from '../actions'
import PropTypes from 'prop-types'
import {LoginForm} from '../types'
import Spinner from 'react-native-loading-spinner-overlay';
import { NavigationScreenProp,NavigationState } from 'react-navigation';

//import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { loginScreenTheme } from '../theme';
import { SESSION } from '../config';
import { ScreenContainer,DialogComp,InputHOCComp,ButtonComp } from '../hoc';
const ContainerScreen = ScreenContainer()

interface Props {
	readonly isLoading?:boolean;
	validateLogin():void;
	readonly isLoggedIn:boolean;
	readonly error:boolean;
	navigation: NavigationScreenProp<NavigationState>;
}

interface State {
	errorMessageUsername:string;
	errorMessagePassword:string;
	error:boolean;
}

class LoginScreen extends React.Component<Props, State> {

	static navigationOptions = {
		header: null
	};

	inputUsername:InputHOCComp;
	inputPassword:InputHOCComp;
	username:string = "";
	password:string = "";

	state: Readonly<State> = {
		errorMessageUsername: '',
		errorMessagePassword: '',
		error:false
	};

	async componentWillReceiveProps(newProps:Props){

		await this.delay(200);
		const obj = newProps

		const error = (obj.error == undefined) ? false : obj.error
		this.setState(previousState => (
			{ error: error }
		));

		if(obj.isLoggedIn){

			try {
				await AsyncStorage.setItem(SESSION.PHONE, this.username)
				this.props.navigation.navigate('Dashboard');

			} catch (e) {
				
				//console.log('-----------------error-------------------')
				//console.log(e)
				//console.log('-----------------error-------------------')
			}
		}
	}

	delay(ms: number) {
		return new Promise( resolve => setTimeout(resolve, ms) );
	} 
	async login():Promise<void>{

		let errors:any= new Object()
		errors.errorMessageUsername = "";
		errors.errorMessagePassword = "";

		let loginForm = new LoginForm()
		loginForm.username = this.username.trim()
		loginForm.password = this.password.trim()

		const validateResp:[boolean,[any]?] = await validateForm(loginForm);
		if(validateResp[0] == true){

			for(const error of validateResp[1]){

				if (error.key == "username"){
					errors.errorMessageUsername = error.msg;
				}
				if (error.key == "password"){
					errors.errorMessagePassword = error.msg;
				}
			}

			this.setState(previousState => (
				errors
			));

		}else{

			this.props.validateLogin()
			this.setState(previousState => (
				errors
			));
		}
	}

	hideDialog(){}

	render() {

		return (

			<ContainerScreen addscroll = {false} >
				<KeyboardAwareScrollView >
				<View style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch',
					backgroundColor:'white'
					}}>
					<Spinner
						visible={this.props.isLoading}
						textContent={'Loading...'}
						textStyle={{color:'#000'}}
						/>

					<Image style = {{alignSelf:'center',height:72,marginTop:normalize(40)}} source = {require('../assets/logo.png')} />
					<NormalText style={{marginTop:normalize(15),textAlign:'center'}}>Please provide a valid phone number and passoword</NormalText>
					<InputHOCComp ref={node => this.inputUsername = node} containerStyle={{marginTop:normalize(30),borderBottomWidth: 0}} inputStyle = {{textAlign:'center'}}
						placeholder='Your phone number'
						leftIcon={
							<Icon
								name='user'
								size={normalize(24)}
								color='black' 
							/>
						}
						autoCorrect={false} 
						onChangeText = {text=>this.username = text}
						errorMessage={this.state.errorMessageUsername}
						keyboardType = "number-pad"
					/>
					<InputHOCComp ref={node => this.inputPassword = node} containerStyle={{marginTop:normalize(20)}} inputStyle = {{textAlign:'center'}}
						placeholder='Your Password'
						secureTextEntry={true} 
						leftIcon={
							<Icon
								name='lock'
								size={normalize(24)}
								color='black'
							/>
						
						}
						autoCorrect={false} 
						onChangeText = {text=>this.password = text}
						errorMessage={this.state.errorMessagePassword}
					/>
					<ButtonComp
						containerStyle={{marginTop:normalize(40)}}
						titleStyle={loginScreenTheme.Button.titleStyle}
						buttonStyle = {loginScreenTheme.Button.loginButton}
						type="solid"
						title="Login"
						onPress = {()=>{this.login()}} 
					/>
					<ButtonComp
						containerStyle={{marginTop:normalize(20)}}
						titleStyle={loginScreenTheme.Button.titleStyle}
						buttonStyle = {loginScreenTheme.Button.buttonStyle}
						type="outline"
						title="Forget Password?"
					/>
					<ButtonComp
						titleStyle={loginScreenTheme.Button.titleStyle}
						buttonStyle = {loginScreenTheme.Button.buttonStyle}
						type="outline"
						title="Register Account"
						onPress = {()=> { this.props.navigation.navigate('SignUp')}}
					/>
					<DialogComp 
						error={this.state.error} 
						title="Username or Password is invalid."
						content="You are not entered correct username or password. Please try again!"
						hideDialog = {()=>{ this.hideDialog(); }}
					></DialogComp>

				</View>
			</KeyboardAwareScrollView>
		</ContainerScreen>
	);
	}
}

LoginScreen.propTypes = {
	validateLogin: PropTypes.func.isRequired,
	isLoggedIn: PropTypes.bool.isRequired,
	isLoading: PropTypes.bool.isRequired,
	userData: PropTypes.object.isRequired
}

const mapStateToProps = state => {
	return getLoginState(state);
};

const mapDispatchToProps = dispatch => ({
	validateLogin: () => dispatch(loginAction.login({"username":"amjad","password":"123abc"}))
})

export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)
