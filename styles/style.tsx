import styled from 'styled-components/native';
import {moderateScale,verticalScale} from '../components/Scalling'

const Container = styled.View`
	flex: 1,
    flexDirection: column,
    justifyContent: center,
    alignItems: stretch,
    backgroundColor: white
`;


const NormalText = styled.Text`
	font-size: ${moderateScale(18)};
	font-weight: 600;
	color: 'rgb(104,104,104)';
	padding-left:${moderateScale(10)};
	padding-right:${moderateScale(10)};
`;

module.exports = {
	Container:Container,
	NormalText:NormalText
}; 
