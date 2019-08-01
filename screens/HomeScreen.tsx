
import React from 'react';

import LayoutTester from "react-native-device-screen-switcher";
import { Title, NormalText,TextInput } from '../styles/style'
import { ScrollView, SafeAreaView, View, Image, Dimensions, KeyboardAvoidingView, Platform, StyleSheet, Text, AppState } from 'react-native';
import {moderateScale,verticalScale,normalize} from '../components/Scalling'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import {getLoginState} from '../selectors'
import {loginAction} from '../actions'
const { width, height } = Dimensions.get('window');
import PropTypes from 'prop-types'
import {validateRequest} from '../utils'
import {SCHEMA} from '../types'
import Spinner from 'react-native-loading-spinner-overlay';


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

		if (this.username.trim().length < 5  && this.password.trim().length < 5) {

			this.inputUsername.shake();
			this.inputPassword.shake();

			this.setState(previousState => (
				{ 	errorMessageUsername: "Username is not valid.",
					errorMessagePassword: "Password is not valid.",
				}
			));
		
		}else if (this.username.trim().length < 5){

			this.setState(previousState => (
				{ 	errorMessageUsername: "Username is not valid.",
					errorMessagePassword: "",
				}
			));
			this.inputUsername.shake();

		} else if (this.password.trim().length < 5){
			this.setState(previousState => (
				{ 	errorMessageUsername: "",
					errorMessagePassword: "Password is not valid.",
				}
			));
			this.inputPassword.shake();
		
		}else {

			this.setState(previousState => (
				{ 	errorMessageUsername: "",
					errorMessagePassword: "",
				}
			));

			this.props.validateLogin()
		}
	}


	render() {

		console.log("-------render------------",this.props.isLoading);

		return (
			<SafeAreaView>
				<ScrollView style={{height:height}} >
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
					titleStyle={{fontSize:normalize(18)}}
					buttonStyle = {{borderRadius:normalize(14),margin:normalize(10),height:normalize(40)}}
					type="solid"
					title="Login"
					onPress = {()=>{this.login()}} 
				/>
				<Button
					containerStyle={{marginTop:normalize(20)}}
					titleStyle={{fontSize:normalize(20)}}
					buttonStyle = {{borderWidth:0}}
					type="outline"
					title="Forget Password?"
				/>
				<Button
					buttonStyle = {{borderWidth:0}}
					titleStyle={{fontSize:normalize(20)}}
					type="outline"
					title="Register Account"
				/>
				<View style={{ flex : 1 }} />
			</View>
		</ScrollView>
	</SafeAreaView>
// </KeyboardAvoidingView>
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
