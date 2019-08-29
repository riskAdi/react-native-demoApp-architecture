
import {RegisterActions} from '../config'

export const intialSignupState = ({
	
	isLoading:false,
	userData:{},
	error:undefined
})

const register = (state = intialSignupState, action) => {

	/**** Testing purpose
	console.log("-------------------intialUserState----------------------");
	console.log(action);
	console.log(state);
		console.log("-------------------intialUserState----------------------");
		*/

	switch (action.type) {

		case RegisterActions.REGISTER_SUCCESS:

			return{
				...state,
				isLoading:false,
				isLoggedIn:true,
				error:false
			} 

		case RegisterActions.REGISTER_FAILED:

			return{
				...state,
				isLoading:false,
				isLoggedIn:false,
				error:true
			} 

		case RegisterActions.REGISTER_STARTED:

			return{
				...state,
				isLoading:true,
				isLoggedIn:false,
				error:undefined
			}
		default:
			return state
	}
}

	export default register

