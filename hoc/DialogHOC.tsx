import React from 'react';
import  {Text}  from 'react-native';
import PropTypes from 'prop-types'

import Dialog, { DialogFooter, DialogButton, DialogContent,DialogTitle,SlideAnimation } from 'react-native-popup-dialog'

interface Props {
	readonly title:string;
    readonly content:string;
    readonly error:boolean;
    hideDialog:Function;
}

interface State  {
	error:boolean;
}

const  DialogComp = ():any => {

    class DialogHOC extends React.Component<Props,State> {
        
        state: Readonly<State> = {
            error:false
        };

        componentWillReceiveProps(newProps:Props){

            const obj = newProps
            const error = (obj.error == undefined) ? false : obj.error
            this.setState(previousState => (
                { error: error }
            ));
         }
    
        render() {
            
            console.log("----------error------------");
            console.log(this.props);
            console.log("----------error------------");

            return (  
                <Dialog
                visible={this.state.error}
                dialogTitle={<DialogTitle title={this.props.title} />}
                dialogAnimation={new SlideAnimation({
                    slideFrom: 'bottom',
                  })}
                footer={
                    <DialogFooter>
                      <DialogButton
                        text="CANCEL"
                        onPress={() => {}}
                      />
                      <DialogButton
                        text="OK"
                        onPress={() => {}}
                      />
                    </DialogFooter>
                  }
                width = {0.8}
                onTouchOutside={() => {
                  this.setState({ error: false });
                  this.props.hideDialog();
                }}
              >
                <DialogContent>
                  <Text>{this.props.content}</Text>
                </DialogContent>
              </Dialog>
            )
        }
    }


    DialogHOC.propTypes = {
        error: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired,
        content: PropTypes.string.isRequired,
        hideDialog: PropTypes.func.isRequired
    }
    return DialogHOC
}

export default DialogComp;