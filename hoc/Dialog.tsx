import React from 'react';
import  {Text}  from 'react-native';


const  Dialog = ():any => {

    class DialogHOC extends React.Component {
    
        render:() => {
            
            return (
                // @ts-ignore 
                <Text>
                    Hello
                </Text>
            );
        }
    }

    return DialogHOC
}

export default Dialog;