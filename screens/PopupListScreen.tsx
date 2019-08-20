
import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem,Button } from 'react-native-elements'
import { ScreenContainer,InputHOCComp } from '../hoc';
const ContainerScreen = ScreenContainer()

	class PopupListScreen extends React.Component {

		list:[object] = [];

		renderItemSeparator() {
			return (
				<View style={{ height: StyleSheet.hairlineWidth, backgroundColor: 'rgba(0,0,0,0.3)' }} />
			);
		}
			componentWillMount(){
			
				for (let index = 0; index < 50; index++) {

					if (index%2 == 0){
					this.list.push({
						name: 'Pakistan',
						avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/ladylexy/128.jpg',
						subtitle: '+92'
						});
					}else{
						this.list.push({
							name: 'Italy',
							avatar_url: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
							subtitle: '+39'
						}); 
					}
				}
			}

			keyExtractor = (item, index) => index.toString()
			renderItem = ({ item }) => (
				<ListItem
					title={item.name}
					chevronColor="black"
					  chevron
					  containerStyle style = {{marginBottom: 1,
						borderBottomWidth: 0.5,
						backgroundColor: "#000000"}}
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
			
			<InputHOCComp  containerStyle={{marginTop:normalize(30),borderBottomWidth: 0}} inputStyle = {{textAlign:'center'}}
						placeholder='Search your country'
					/>
           
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

