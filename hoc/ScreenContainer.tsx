import React, { Props } from 'react';
import  {View}  from 'react-native';
import PropTypes from 'prop-types'

const  ScreenContainer = ():any => {

  interface Props {
    addscroll:Boolean;
    keyboardScrollAware:Boolean;
  }

  class Container extends React.Component<Props> {
    constructor(props) {
      super(props);
    }

    render() {
      
      const { children ,addscroll,keyboardScrollAware,...otherProps } = this.props;
      return (<View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor:'white'
      }}>
            {children}
        </View>);
    }
  }

  Container.propTypes = {
    addscroll: PropTypes.bool.isRequired,
    keyboardScrollAware: PropTypes.bool.isRequired
  }

  return Container;
}

export default ScreenContainer;






  