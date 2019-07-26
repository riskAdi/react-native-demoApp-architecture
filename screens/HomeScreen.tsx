
import React from 'react';

import LayoutTester from "react-native-device-screen-switcher";
import { Title, NormalText,TextInput } from '../styles/style'
import { ScrollView,SafeAreaView,View,Image, Dimensions,KeyboardAvoidingView,Platform ,StyleSheet} from 'react-native';
import {moderateScale,verticalScale,normalize} from '../components/Scalling'
import { connect } from 'react-redux'
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input,Button } from 'react-native-elements';
import {getLoginState} from '../selectors'
import {loginAction} from '../actions'

const { width, height } = Dimensions.get('window');

export default class HomeScreen extends React.Component{

	constructor(props) {
		super(props);
		this.state = { text: '' };
	}

	componentDidMount(){
		
		console.log("---------store state-----------");
		console.log(this.props.validateLogin);
		console.log("---------store state-----------");
	}

	render() {

		return (
//marginLeft:100,marginRight:100
//<KeyboardAvoidingView
  //              behavior={Platform.OS === "ios" ? "padding" : null}
    //            style={{ flex: 1 }}
      //      >
	<SafeAreaView>
	<ScrollView style={{height:height}} >
	<View   style={{
		flex: 1,
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'stretch',
		backgroundColor:'white'
			}}>
		<Image style = {{alignSelf:'center',height:72,marginTop:normalize(40)}} source = {require('../assets/logo.png')} />
		<Title style={{marginTop:normalize(20),textAlign:'center'}}>Login</Title>
		<NormalText style={{marginTop:normalize(15),textAlign:'center'}}>{this.props.login.processing ? "Processing":""}</NormalText>
		<NormalText style={{marginTop:normalize(15),textAlign:'center'}}>Please provide a valid phone number and passoword</NormalText>

		
		<Input onFocus = {(e)=>{}} containerStyle={{marginTop:normalize(30),borderBottomWidth: 0}} inputStyle = {{textAlign:'center'}}
		placeholder='Your username'
		leftIcon={
			<Icon
				name='user'
				size={normalize(24)}
				color='black'
			/>
		}
		shake={this.props.login.error}
		/>

<Input containerStyle={{marginTop:normalize(20)}} inputStyle = {{textAlign:'center'}}
	placeholder='Your Password'
	leftIcon={
		<Icon
			name='lock'
			size={normalize(24)}
			color='black'
		/>
	}
	shake={this.props.login.error}
	/>
	

<Button
containerStyle={{marginTop:normalize(40)}}
titleStyle={{fontSize:normalize(18)}}
	buttonStyle = {{borderRadius:normalize(14),margin:normalize(10),height:normalize(40)}}
		type="solid"
		title="Login"
		onPress = {()=>{this.props.validateLogin()}}  
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
//	</KeyboardAvoidingView>


	);
	}
}

const mapStateToProps = state => {
	console.log('------login---------');
	console.log(getLoginState(state));
	console.log('------login---------');
	return getLoginState(state);
  };

  const mapDispatchToProps = dispatch => ({
	validateLogin: () => dispatch(loginAction.login({"username":"amjad","password":"123abc"}))
  })

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    inner: {
        padding: 24,
        flex: 1,
        justifyContent: "flex-end",
    },
    header: {
        fontSize: 36,
        marginBottom: 48,
    },
    input: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36,
    },
    btnContainer: {
        backgroundColor: "white",
        marginTop: 12,
    },
});
