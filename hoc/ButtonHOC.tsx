import React from 'react';
import { Button } from 'react-native-elements';
import {ViewPropTypes} from 'react-native';
import PropTypes, { object } from 'prop-types'
import {NodeType} from '../types'

	class ButtonComp extends React.Component<any,{}> {

		render() {
			console.log({...this.props});
			return (
				<Button {...this.props}> </Button>
				);
		}
	}

	ButtonComp.propTypes = {
		title: PropTypes.string,
		titleStyle: object,
		titleProps: PropTypes.object,
		buttonStyle: ViewPropTypes.style,
		type: PropTypes.oneOf(['solid', 'clear', 'outline']),
		loading: PropTypes.bool,
		loadingStyle: ViewPropTypes.style,
		loadingProps: PropTypes.object,
		onPress: PropTypes.func,
		containerStyle: ViewPropTypes.style,
		icon: NodeType,
		iconContainerStyle: ViewPropTypes.style,
		iconRight: PropTypes.bool,
		linearGradientProps: PropTypes.object,
		TouchableComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		ViewComponent: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
		disabled: PropTypes.bool,
		disabledStyle: ViewPropTypes.style,
		disabledTitleStyle: object,
		raised: PropTypes.bool,
		theme: PropTypes.object,
	};



export default ButtonComp;







