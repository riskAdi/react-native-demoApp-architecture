
import React from 'react';
import { View,Text } from 'react-native';
import Spinner from 'react-native-loading-spinner-overlay';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { ScreenContainer,ButtonComp } from '../hoc';
const ContainerScreen = ScreenContainer()
import { loginScreenTheme } from '../theme';
import {normalize} from '../utils'


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

export default class PopupListScreen extends React.Component<Props, State> {

	render() {
		return (
			
				
				<View style={{
					flex: 1,
					flexDirection: 'column',
					justifyContent: 'center',
					alignItems: 'stretch',
					backgroundColor:'white'
					}}>
					<Text>
                    Hello world !
                    </Text>
				</View>
		
	);
	}
}

