import React, { Props } from 'react';
import  {View}  from 'react-native';

const  ScreenContainer = ():any => {

  class Authenticate extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { children ,...otherProps } = this.props;
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

  return Authenticate;
}

export default ScreenContainer;






  