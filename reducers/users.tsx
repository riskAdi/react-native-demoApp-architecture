
import AppActions from '../config'

export const intialUserState = ({
	isLoggedIn:false,
	isLoading:false,
	userData:{},
	error:undefined
	})

const users = (state = intialUserState, action) => {

  /****  Testing purpose
  console.log("-------------------intialUserState----------------------");
  console.log(action);
	console.log(state);
  console.log("-------------------intialUserState----------------------");
  */

	switch (action.type) {

		case AppActions.LOGIN_SUCCESS:

			return{
				...state,
				isLoading:false,
				isLoggedIn:true,
				error:undefined
				} 

		case AppActions.LOGIN_FAILED:

			return{
				...state,
				isLoading:false,
				isLoggedIn:false,
				error:true
				} 

		case AppActions.LOGIN_STARTED:

			return{
				...state,
				isLoading:true,
        isLoggedIn:false
			}
		default:
			return state
	}
}

	export default users

