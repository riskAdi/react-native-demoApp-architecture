
import React from 'react';
//import LayoutTester from "react-native-device-screen-switcher";
import { NormalText } from '../styles/style'
import { View, Image, Text } from 'react-native';
import {normalize} from '../utils'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import {getLoginState} from '../selectors'
import {loginAction} from '../actions'
import PropTypes from 'prop-types'
import {LoginForm} from '../types'
import Spinner from 'react-native-loading-spinner-overlay';
//import AsyncStorage from '@react-native-community/async-storage';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { loginScreenTheme } from '../theme';
import { SESSION } from '../config';
import {validate, ValidationError} from "class-validator";
import { ScreenContainer,DialogComp,InputHOCComp,ButtonComp } from '../hoc';
const ContainerScreen = ScreenContainer()

interface Props {
	readonly isLoading?:boolean;
	validateLogin():void;
	readonly isLoggedIn:boolean;
	readonly error:boolean;
}

interface State {
	errorMessageUsername:string;
	errorMessagePassword:string;
	error:boolean;
}

class SignUpScreen extends React.Component<Props, State> {

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

			/*try {
				await AsyncStorage.setItem(SESSION.EMAIL, this.username)
			} catch (e) {
				
				console.log('-----------------error-------------------')
				console.log(e)
				console.log('-----------------error-------------------')
			}*/

		}
	}

	delay(ms: number) {
		return new Promise( resolve => setTimeout(resolve, ms) );
	} 
	async signup():Promise<void>{

		let loginForm = new LoginForm()
		loginForm.username = this.username.trim()
		loginForm.password = this.password.trim()

		const response: ValidationError[] = await validate(loginForm) 
		if (response.length > 0) {

			let errorUserName:string = ""
			let errorPassword:string = ""

			for(const error of response){

				if (error.property == "username"){
					const key:string[] = Object.keys(error.constraints)
					const errorMessage:string = error.constraints[key[0]]
					errorUserName = errorMessage 
				}
				if (error.property == "password"){
					const key:string[] = Object.keys(error.constraints)
					const errorMessage:string = error.constraints[key[0]]
					errorPassword = errorMessage
				}
			} 

			this.setState(previousState => (
				{ errorMessageUsername: errorUserName,
					errorMessagePassword: errorPassword,
				}
			));

		}else {

			this.props.validateLogin()
			this.setState(previousState => (
				{ errorMessageUsername: "",
					errorMessagePassword: "",
				}
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
					
					<ButtonComp
						containerStyle={{marginTop:normalize(40)}}
						titleStyle={loginScreenTheme.Button.titleStyle}
						buttonStyle = {loginScreenTheme.Button.loginButton}
						type="solid"
						title="Login"
						onPress = {()=>{this.signup()}} 
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

SignUpScreen.propTypes = {
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

export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen)
