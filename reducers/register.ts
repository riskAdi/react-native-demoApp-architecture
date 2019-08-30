
import {RegisterActions} from '../config'

export const intialSignupState = ({
	
	isLoading:false,
	userData:{},
	error:undefined
})

const register = (state = intialSignupState, action) => {

	/**** Testing purpose
	console.log("-------------------intialregisterState----------------------");
	console.log(action);
	console.log(state);
	console.log("-------------------intialregisterState----------------------");
	*/

	switch (action.type) {

		case RegisterActions.REGISTER_SUCCESS:

			return{
				...state,
				isLoading:false,
				error:false
			} 

		case RegisterActions.REGISTER_FAILED:

			return{
				...state,
				isLoading:false,
				error:false
			} 

		case RegisterActions.REGISTER_STARTED:

			return{
				...state,
				isLoading:true,
				error:undefined
			}
		default:
			return state
	}
}

	export default register

