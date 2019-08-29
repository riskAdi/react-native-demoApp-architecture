
import React from 'react';
//import LayoutTester from "react-native-device-screen-switcher";
import { NormalText } from '../styles/style'
import { View, Image, Text } from 'react-native';
import {normalize,validateForm} from '../utils'
import { connect } from 'react-redux'
import {getRegisterState} from '../selectors'
import {loginAction} from '../actions'
import PropTypes from 'prop-types'
import {SignupForm} from '../types'
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { loginScreenTheme } from '../theme';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationScreenProp } from 'react-navigation';

import { ScreenContainer,DialogComp,InputHOCComp,ButtonComp } from '../hoc';
const ContainerScreen = ScreenContainer()

interface Props {
	readonly isLoading?:boolean;
	validateLogin():void;
	readonly isLoggedIn:boolean;
	readonly error:boolean;
	navigation: NavigationScreenProp<any,any>;
}

interface State {
	country:string;
	mobile:string;
	password:string;
	setCountry:string;
	numberContent:string;
	pressSubmit:boolean;
}

class SignUpScreen extends React.Component<Props, State> {

	inputCountry:InputHOCComp;
	inputMobile:InputHOCComp;
	country:string = "";
	mobile:string = "";
	password:string="";

	state: Readonly<State> = {
		country: '',
		mobile: '',
		password:'',
		setCountry:'',
		numberContent:'',
		pressSubmit:false
	};

	dimissCountryList = (country) => {
		this.setState(previousState => ({setCountry:country.dial_code}));
	}

	async submitForm(){

		let cloneSignup = new SignupForm()
		let signupForm = new SignupForm()
		signupForm.mobile = this.mobile.trim()
		signupForm.password = this.password.trim()
		signupForm.country = this.state.setCountry
		const validateResp:[boolean,[any]?] = await validateForm(signupForm);
		if(validateResp[0] == true){

			for(const error of validateResp[1]){
				cloneSignup[error.key] = error.msg;
			}

			console.log(cloneSignup);
			this.setState(previousState => (
				cloneSignup
			));

		}else{
			let number = this.state.setCountry + this.mobile 
			this.setState(previousState=>({...cloneSignup,pressSubmit:true,numberContent:"Are your number correct "+number+"."}));
		}
	}

	dialogOkPress(){

		console.log("press")
	}

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
					
					<InputHOCComp  
						ref={node => this.inputCountry = node}
						containerStyle={{marginTop:normalize(20)}} inputStyle = {{textAlign:'center'}}
						placeholder='Your country'
						onChangeText = {text=>this.country = text}
						errorMessage={this.state.country}
						leftIcon={
							<Icon
								name='globe'
								size={normalize(24)}
								color='black'
							/>
						
						}
						value= {this.state.setCountry}
						onFocus={()=>{this.props.navigation.navigate('PopupDialog',{ callback: this.dimissCountryList })}}
					/>
					<InputHOCComp  containerStyle={{marginTop:normalize(20)}} inputStyle = {{textAlign:'center'}}
						placeholder='Your mobile numer'
						errorMessage={this.state.mobile}
						onChangeText = {text=>this.mobile = text}
						leftIcon={
							<Icon
								name='phone'
								size={normalize(24)}
								color='black'
							/>
						
						}
						keyboardType = "number-pad"
					/>
					<InputHOCComp  containerStyle={{marginTop:normalize(20)}} inputStyle = {{textAlign:'center'}}
						placeholder='Your Password'
						leftIcon={
							<Icon
								name='lock'
								size={normalize(24)}
								color='black'
							/>
						}
						errorMessage={this.state.password}
						autoCorrect={false} 
						onChangeText = {text=>this.password = text}
					/>	
					<ButtonComp
						containerStyle={{marginTop:normalize(40)}}
						titleStyle={loginScreenTheme.Button.titleStyle}
						buttonStyle = {loginScreenTheme.Button.loginButton}
						type="solid"
						title="SignUp"
						onPress = {()=>{this.submitForm()}} 
					/>
					
					<DialogComp 
						error={this.state.pressSubmit} 
						title="confirm?"
						content={this.state.numberContent}
						okHandler = {()=>{ this.dialogOkPress()  }}
						hideDialog = {()=>{  }}
						
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
	return getRegisterState(state)
};

const mapDispatchToProps = dispatch => ({
	validateLogin: () => dispatch(loginAction.login({"username":"amjad","password":"123abc"}))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen)
