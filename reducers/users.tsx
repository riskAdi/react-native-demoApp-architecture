
import AppActions from '../config'

export const intialUserState = ({
    isLoggedIn:false,
    isLoading:false,
    userData:{},
    error:undefined
  })

const users = (state = intialUserState, action) => {

	switch (action.type) {

		case AppActions.LOGIN_SUCCESS:

                return{
                    ...state,
                    isLoading:false,
                    isLoggedIn:true,
                    userData:action.userData,
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
                
                console.log(state);
                

			return state
	}
}

	export default users

