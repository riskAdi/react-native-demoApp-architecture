import React from 'react';
import PropTypes, { object, string, func } from 'prop-types'
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements'

	class TaskListHOCComp extends React.Component<any,{}> {

		constructor(prop){
			super(prop);
        }
        
        SelectedItem = (item) => {
		
            //let callback = this.props.navigation.getParam('callback');
            //callback(item);
            //this.props.navigation.goBack();

            console.log("GetSelected");
        }
        renderItem = ({ item }) => (
            <ListItem
                title={item.name}
                rightTitle={item.dial_code}
                chevronColor="black"
                chevron
                bottomDivider = {true}
                onPress = {()=>{ this.SelectedItem(item) }}
            />
        )

		render() {
			
			return (
                <View>
                <FlatList
                keyExtractor={item =>  item.dial_code + item.code}
                data={this.state.data}
                renderItem={this.renderItem}
                /></View>);
		}
    }
    
    TaskListHOCComp.propTypes = {
        endPoint: string.isRequired,
        didTapOnItem:func.isRequired
      };

	
	
export default TaskListHOCComp;







