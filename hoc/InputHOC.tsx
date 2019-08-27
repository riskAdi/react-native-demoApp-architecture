import React from 'react';
import {ViewPropTypes} from 'react-native';
import PropTypes, { object } from 'prop-types'
import {NodeType} from '../types'
import { Input } from 'react-native-elements';

	class  InputHOCComp extends React.Component<any,{}> {

		constructor(prop){
			super(prop);
		}
		render() {
			
			return (<Input {...this.props} />);
		}
    }
    
    InputHOCComp.propTypes = {
        containerStyle: object.isRequired,
        inputContainerStyle: ViewPropTypes.style,
        leftIcon: NodeType,
        leftIconContainerStyle: ViewPropTypes.style,
        rightIcon: NodeType,
        rightIconContainerStyle: ViewPropTypes.style,
        inputStyle: object,
        inputComponent: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
        shake: PropTypes.any,
        errorProps: PropTypes.object,
        errorStyle: object,
        errorMessage: PropTypes.string,
        label: PropTypes.node,
        labelStyle: object,
        labelProps: PropTypes.object,
        theme: PropTypes.object,
      };

	
	
export default InputHOCComp;







