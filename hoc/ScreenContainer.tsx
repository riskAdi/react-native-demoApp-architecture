import React from 'react';
import  {SafeAreaView,Dimensions,ScrollView}  from 'react-native';
import PropTypes from 'prop-types'
const { width, height } = Dimensions.get('window');

const  ScreenContainer = ():any => {

  interface Props {
    addscroll:Boolean;
  }

  class Container extends React.Component<Props> {
    constructor(props) {
      super(props);
    }

    render() {

      const { children,addscroll} = this.props;
      if (addscroll) {
       return (
        <SafeAreaView>
          <ScrollView style={{height:height}} >
            {children}
          </ScrollView >     
        </SafeAreaView>
        );
      
      }  else {
        return (
          <SafeAreaView>
              {children}
          </SafeAreaView>
          );
      }
    }
  }

  Container.propTypes = {
    addscroll: PropTypes.bool.isRequired
  }

  return Container;
}

export default ScreenContainer;






  