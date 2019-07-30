
import React from 'react';

import LayoutTester from "react-native-device-screen-switcher";
import { Title, NormalText,TextInput } from '../styles/style'
import { ScrollView, SafeAreaView, View, Image, Dimensions, KeyboardAvoidingView, Platform, StyleSheet, Text } from 'react-native';
import {moderateScale,verticalScale,normalize} from '../components/Scalling'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import {getLoginState} from '../selectors'
import {loginAction} from '../actions'


const { width, height } = Dimensions.get('window');


interface loginProps {

	username:String;
	password:String;
	inputUsername:Input;
	inputPassword:Input;
}

interface loginState {

	errorMsgUsername:String;
	errorMsgPassword:String;
}



class HomeScreen extends React.Component<loginProps,loginState>{

	constructor(props){
		super(props);
		this.state={
			errorMsgUsername:'',
			errorMsgPassword:'' 
	}
	}

	login(){

		//username.shake(); 
		console.log(inputUsername);
		//input.errorMessage = "This is error here" 

		//errorStyle={{ color: 'red' }}
		//errorMessage='ENTER A VALID ERROR HERE' 

		//console.log(input);
		//input.props.errorMessage = "HEre"

		this.setState((state, props) => { 
			return {errorMsgUsername: 'something wronsdsdg 123'};
		}); 
	}

	render() {

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
					<Image style = {{alignSelf:'center',height:72,marginTop:normalize(40)}} source = {require('../assets/logo.png')} />
					<Title style={{marginTop:normalize(20),textAlign:'center'}}>{this.state.isLoading? 'Loading' : 'None'}</Title>
					<NormalText style={{marginTop:normalize(15),textAlign:'center'}}></NormalText>
					<NormalText style={{marginTop:normalize(15),textAlign:'center'}}>Please provide a valid phone number and passoword</NormalText>
					<Input ref={node => inputUsername = node} containerStyle={{marginTop:normalize(30),borderBottomWidth: 0}} inputStyle = {{textAlign:'center'}}
					placeholder='Your username'
					leftIcon={
						<Icon
							name='user'
							size={normalize(24)}
							color='black'
						/>
					}
					shake={this.props.error}
					errorMessage={this.state.errorMsgUsername}
					/>

				<Input ref={node => inputPassword = node} containerStyle={{marginTop:normalize(20)}} inputStyle = {{textAlign:'center'}}
					placeholder='Your Password'
					leftIcon={
					<Icon
						name='lock'
						size={normalize(24)}
						color='black'
					/>
					}
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

const mapStateToProps = state => {
	return getLoginState(state);
};

const mapDispatchToProps = dispatch => ({
	validateLogin: () => dispatch(loginAction.login({"username":"amjad","password":"123abc"}))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)
