
import React from 'react';
//import LayoutTester from "react-native-device-screen-switcher";
import { NormalText } from '../styles/style'
import { View, Image, Text } from 'react-native';
import {normalize} from '../utils'
import { connect } from 'react-redux'
import {getLoginState} from '../selectors'
import {loginAction} from '../actions'
import PropTypes from 'prop-types'
import {LoginForm} from '../types'
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
	errorMessageCountry:string;
	errorMessageMobile:string;
	setCountry:string;
	numberContent:string;
	pressSubmit:boolean;
}

class SignUpScreen extends React.Component<Props, State> {

	inputCountry:InputHOCComp;
	inputMobile:InputHOCComp;
	country:string = "";
	mobile:string = "";

	state: Readonly<State> = {
		errorMessageCountry: '',
		errorMessageMobile: '',
		setCountry:'',
		numberContent:'',
		pressSubmit:false
	};

	dimissCountryList = (country) => {
		this.setState(previousState => ({setCountry:country.dial_code}));
	}

	submitForm = () =>{

		let number = this.state.setCountry + this.mobile 
		this.setState(previousState=>({pressSubmit:true,numberContent:"Are your number correct "+number+"."}));
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
	return getLoginState(state);
};

const mapDispatchToProps = dispatch => ({
	validateLogin: () => dispatch(loginAction.login({"username":"amjad","password":"123abc"}))
})

export default connect(mapStateToProps,mapDispatchToProps)(SignUpScreen)
