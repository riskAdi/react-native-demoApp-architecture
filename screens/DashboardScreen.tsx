import React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
import { createAppContainer,createMaterialTopTabNavigator,createBottomTabNavigator } from 'react-navigation';
import NewTaskScreen from './NewTasksScreen'

import {
  Menu,
  MenuOptions,
  MenuOption,
  MenuTrigger,
} from 'react-native-popup-menu';

class SettingsScreen extends React.Component {
  render() {
    return (
     
      <View>
    <Text>Settings</Text>
    
  </View>
     
    );
  }
}


const TabNavigator = createMaterialTopTabNavigator({
  Home: NewTaskScreen,
  Settings: SettingsScreen,
},
{
    tabBarPosition: 'top',
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: 'blue',
      inactiveTintColor: '#000000',
      showIcon:true,
      style: {
        backgroundColor: '#FFFFFF'
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      },
    },
  }
);


export default TabNavigator;