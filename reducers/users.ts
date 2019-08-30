
import {LoginActions} from '../config'

export const intialUserState = ({
	isLoggedIn:false,
	isLoading:false,
	userData:{},
	error:undefined
})

const users = (state = intialUserState, action) => {

	/**** Testing purpose
	console.log("-------------------intialLoginState----------------------");
	console.log(action);
	console.log(state);
		console.log("-------------------intialLoginState----------------------");
		*/

	switch (action.type) {

		case LoginActions.LOGIN_SUCCESS:

			return{
				...state,
				isLoading:false,
				isLoggedIn:true,
				error:false
			} 

		case LoginActions.LOGIN_FAILED:

			return{
				...state,
				isLoading:false,
				isLoggedIn:false,
				error:true
			} 

		case LoginActions.LOGIN_STARTED:

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

	export default users

