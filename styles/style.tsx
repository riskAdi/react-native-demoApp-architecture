import styled from 'styled-components';
import {moderateScale,verticalScale} from '../components/Scalling'

const Container = styled.View`
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const SecondContainer = styled.View`
    flex: 1;
	justify-content: center;
	align-items: center;
`;

const Title = styled.Text`
	font-size: ${moderateScale(28)};
	font-weight: 600;
	color: 'rgb(43,128,182)';
	padding-left:${moderateScale(10)};
	padding-right:${moderateScale(10)};
`;

const NormalText = styled.Text`
	font-size: ${moderateScale(18)};
	font-weight: 600;
	color: 'rgb(104,104,104)';
	padding-left:${moderateScale(10)};
	padding-right:${moderateScale(10)};
`;
	
const TextInput = styled.TextInput`
	height: ${moderateScale(45)};
	editable= true;
	borderColor: 'rgb(213,213,213)';
	borderWidth: 1;
`;

module.exports = {
	Container:Container,
	Title:Title,
	TextInput:TextInput,
	NormalText:NormalText,
    SecondContainer:SecondContainer
}; 
