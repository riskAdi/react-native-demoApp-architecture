
import React from 'react';
import { View, Text , Button } from 'react-native';

export default class Profilecreen extends React.Component{

    static navigationOptions = ({ navigation }) => {
        return {
          headerTitle: 'Header Ttile',
          headerRight: (
            <Button
              title="+1"
              color="#fff"
            />
          )
        };
      };

	componentDidMount(){

	console.log('This is component did mount Profile Screen');
}

render(){

	return (
		<View style={{ flexDirection: 'row', alignItems: 'center' }}>
		<Text>Profilecreen</Text>
		</View>

	);
}
}
