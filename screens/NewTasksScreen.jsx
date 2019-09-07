import React from 'react';
import { Text, View,SafeAreaView } from 'react-native';
import { TaskListComp,ScreenContainer } from '../hoc';

class NewTasksScreen extends React.Component {

    render() {
      return (
       
        <View style={{flex:1, flexDirection: 'column' }}>
          <TaskListComp />
        </View>   
       
      );
    }
  }




  export default NewTasksScreen