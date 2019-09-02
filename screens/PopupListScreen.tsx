
import React from 'react';
import { FlatList, View } from 'react-native';
import { ListItem,Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import  countryList from "../assets/countryList.json";
import { ScreenContainer,InputHOCComp } from '../hoc';
const ContainerScreen = ScreenContainer()

	class PopupListScreen extends React.Component {
		constructor(props) {
			super(props);
		
			this.state = {
			  loading: false,
			  data: [],
			  error: null,
			};
		
			this.arrayholder = [];
		  }

	componentWillMount(){

		this.arrayholder = countryList
		this.setState({
			data: countryList,
			error:  null,
			loading: false,
		  });
	}

	SelectedItem = (item) => {
		
		let callback = this.props.navigation.getParam('callback');
		callback(item);
		this.props.navigation.goBack();
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

	searchFilterFunction = text => { 
				
				const newData = this.arrayholder.filter(item => { 
					const itemData = `${item.name.toUpperCase()} `;
					const textData = text.toUpperCase();
					return itemData.indexOf(textData) > -1; 
				});

				this.setState({ data: newData }); 
	}; 
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

			<InputHOCComp containerStyle={{borderBottomWidth: 0}} inputStyle = {{textAlign:'center'}}
				placeholder='Search your country'
				leftIcon={
					<Icon
						name='search'
						size={normalize(16)}
						color='black'
					/>
				}

				onChangeText={text => this.searchFilterFunction(text)}
					autoCorrect={false} 
				/>

			<FlatList
			keyExtractor={item =>  item.dial_code + item.code}
			data={this.state.data}
			renderItem={this.renderItem}
			/>
			</ContainerScreen>
			)
	}
}


export default PopupListScreen;

