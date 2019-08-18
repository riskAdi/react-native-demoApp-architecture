
import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem,Button } from 'react-native-elements'
import { ScreenContainer } from '../hoc';
const ContainerScreen = ScreenContainer()

	class PopupListScreen extends React.Component {

		list:[object] = [];

			componentWillMount(){
			
				for (let index = 0; index < 50; index++) {

					if (index%2 == 0){
					this.list.push({
						name: 'Amy Farha',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
						subtitle: 'Vice President'
						});
					}else{
						this.list.push({
							name: 'Chris Jackson',
							avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
							subtitle: 'Vice Chairman'
						}); 
					}
				}
			}

			keyExtractor = (item, index) => index.toString()
			renderItem = ({ item }) => (
				<ListItem
					title={item.name}
					subtitle={item.subtitle}
					leftAvatar={{ source: { uri: item.avatar_url } }}
				/>
			)

	render() {

		return (
            <ContainerScreen addscroll = {false} >
            <View style={{
                flexDirection: 'row',
                justifyContent: 'flex-end',
                marginBottom:10
              }}>
              
          <Button
              title="Cancel"
              type="outline"
              style={{marginRight:10}}
              onPress = { ()=> this.props.navigation.goBack()}
          />
              </View>
           
			<FlatList
			keyExtractor={this.keyExtractor}
			data={this.list}
			renderItem={this.renderItem}
			/>
			</ContainerScreen>
			)
	}
}


export default PopupListScreen;

