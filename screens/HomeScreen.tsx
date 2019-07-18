
import React from 'react';
import {Container,Title,SecondContainer} from '../styles/style'
import { ScrollView,SafeAreaView,View } from 'react-native';

export default class HomeScreen extends React.Component{


	render() {
		return (

			<View style={{
				flex: 1,
				flexDirection: 'row',
				justifyContent: 'flex-end',
				alignItems: 'flex-start',
			  }}>
				<View style={{width: 50, height: 50, backgroundColor: 'powderblue'}} />
				<View style={{height: 50, backgroundColor: 'skyblue'}} />
				<View style={{height: 100, backgroundColor: 'steelblue'}} />
			  </View>
		);
	}

}
