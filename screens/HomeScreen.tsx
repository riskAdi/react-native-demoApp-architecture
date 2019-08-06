
import React from 'react';

import LayoutTester from "react-native-device-screen-switcher";
import { Title, NormalText,TextInput } from '../styles/style'
import { ScrollView, SafeAreaView, View, Image, Dimensions, KeyboardAvoidingView, Platform, StyleSheet, Text, AppState } from 'react-native';
import {normalize} from '../components/Scalling'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button,ThemeProvider } from 'react-native-elements';
import {getLoginState} from '../selectors'
import {loginAction} from '../actions'
const { width, height } = Dimensions.get('window');
import PropTypes, { any } from 'prop-types'
import {validateRequest} from '../utils'
import {LoginForm} from '../types'
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { loginScreenTheme } from '../theme';
import {validate, ValidationError} from "class-validator";
import { ScreenContainer } from '../hoc';

const ContainerScreen = ScreenContainer()

interface Props {
	isLoading?:Boolean;
	validateLogin():void;
}

interface State {
	errorMessageUsername:string;
	errorMessagePassword:string;
}

class HomeScreen extends React.Component<Props, State> {

	inputUsername:Input;
	inputPassword:Input;
	username:string = "";
	password:string = "";

	state: Readonly<State> = {
		errorMessageUsername: '',
		errorMessagePassword: ''
	};

	async login():Promise<void>{
		
		/************** testing to validate runtime check ********** 
		const obj = {type:SCHEMA.LOGIN,model:{password:this.password,username:this.username}};
		const response = await validateRequest(obj)
		console.log("------async------");
		console.log(response);
		console.log("------async------");
		***************  testing to validate runtime ******* */

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
				{ 	errorMessageUsername: errorUserName,
					errorMessagePassword: errorPassword,
				}
			));
		
		}else {

			this.props.validateLogin()
			this.setState(previousState => (
				{ 	errorMessageUsername: "",
					errorMessagePassword: "",
				}
			));
		}
	}

	render() {
		console.log("-------render------------",this.props.isLoading);
		return (
			<SafeAreaView>
				<ScrollView style={{height:height}} >
				<KeyboardAwareScrollView>
				<ContainerScreen addscroll = {true} keyboardScrollAware = {true} >
				
				<Spinner
          			visible={this.props.isLoading}
          			textContent={'Loading...'}
          			textStyle={{color:'#fff'}}
        		/>
				
				<Image style = {{alignSelf:'center',height:72,marginTop:normalize(40)}} source = {require('../assets/logo.png')} />
				<NormalText style={{marginTop:normalize(15),textAlign:'center'}}>Please provide a valid phone number and passoword</NormalText>
				<Input ref={node => this.inputUsername = node} containerStyle={{marginTop:normalize(30),borderBottomWidth: 0}} inputStyle = {{textAlign:'center'}}
					placeholder='Your username'
					leftIcon={
						<Icon
							name='user'
							size={normalize(24)}
							color='black'
						/>
					}
					onChangeText = {text=>this.username = text}
					errorMessage={this.state.errorMessageUsername}
					/>
				<Input ref={node => this.inputPassword = node} containerStyle={{marginTop:normalize(20)}} inputStyle = {{textAlign:'center'}}
					placeholder='Your Password'
					leftIcon={
					<Icon
						name='lock'
						size={normalize(24)}
						color='black'
					/>
					}
					onChangeText = {text=>this.password = text}
					errorMessage={this.state.errorMessagePassword}
				/>
				<Button
					containerStyle={{marginTop:normalize(40)}}
					titleStyle={loginScreenTheme.Button.titleStyle}
					buttonStyle = {loginScreenTheme.Button.loginButton}
					type="solid"
					title="Login"
					onPress = {()=>{this.login()}} 
				/>
				<Button
					containerStyle={{marginTop:normalize(20)}}
					titleStyle={loginScreenTheme.Button.titleStyle}
					buttonStyle = {loginScreenTheme.Button.buttonStyle}
					type="outline"
					title="Forget Password?"
				/>
				<Button
					titleStyle={loginScreenTheme.Button.titleStyle}
					buttonStyle = {loginScreenTheme.Button.buttonStyle}
					type="outline"
					title="Register Account"
				/>
				<View style={{ flex : 1 }} />
			</ContainerScreen>
			</KeyboardAwareScrollView>
		</ScrollView>
	</SafeAreaView>
	);
		}
}

HomeScreen.propTypes = {
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

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
