import Spinner from 'react-native-loading-spinner-overlay';
import React from 'react';
import { View } from 'react-native';
import { NavigationScreenProp,NavigationState } from 'react-navigation';

interface NavProp {
    navigation: NavigationScreenProp<NavigationState>;
  }
export default class AuthLoadingScreen extends React.Component<NavProp> {
  constructor(props) {
    super(props);
    this._bootstrapAsync();
  }

  // Fetch the token from storage then navigate to our appropriate place
  _bootstrapAsync = async () => {
    //const userToken = await AsyncStorage.getItem('userToken');
    this.props.navigation.navigate('App');
  };

  // Render any loading content that you like here
  render() {
    return (
      <View>
      <Spinner
        visible={true}
        textContent={'Loading...'}
        textStyle={{color:'#000'}}
      />
      </View>
    );
  }
}