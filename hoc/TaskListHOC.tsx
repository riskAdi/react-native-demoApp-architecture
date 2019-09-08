import React from 'react';
import PropTypes, { object, string, func } from 'prop-types'
import { FlatList, View } from 'react-native';
import { ListItem } from 'react-native-elements'
import { ScreenContainer } from '../hoc';

	class TaskListHOCComp extends React.Component<any,{}> {

        
		constructor(props) {
            super(props);
        
            this.state = {
              loading: false,
              data: [],
              error: null,
            };
        }

        componentWillMount(){

            this.setState({
                data: [{
                    name: 'Amy Farha',
                    subtitle: 'Vice President'
                  },
                  {
                    name: 'Chris Jackson',
                    avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
                    subtitle: 'Vice Chairman'
                  }],
                error:  null,
                loading: false,
              });
        }
        
        SelectedItem = (item) => {}
        keyExtractor = (item, index) => index.toString()
        renderItem = ({ item }) => 
        {

        return (
            <ListItem
    title= {item.name}
    subtitle={item.subtitle}
    leftAvatar={{
      source: item.avatar_url && { uri: item.avatar_url },
      title: item.name[0]
    }}
  />
        )
        }

		render() {
			
			return (
                
          <FlatList
            keyExtractor={this.keyExtractor}
            data={this.state.data}
            renderItem={this.renderItem}/>
          );
		}
    }
    
    TaskListHOCComp.propTypes = {
       // endPoint: string.isRequired,
       // didTapOnItem:func.isRequired
      };

	
	
export default TaskListHOCComp;







