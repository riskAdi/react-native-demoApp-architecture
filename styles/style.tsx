import styled from 'styled-components';
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
	font-size: ${props => props.fontSize};
	font-weight: 600;
    color: ${props => props.background};
`;

module.exports = {
	Container:Container,
    Title:Title,
    SecondContainer:SecondContainer
}; 
