
import AppActions from '../config'
export const intialUserState = ({
	login:{
		processing:false,
		error:false,
		isLogin:false
	},
	edit:{},
	add:{},
	users:[]
})

const users = (state = intialUserState, action) => {

	switch (action) {

		case AppActions.LOGIN_SUCCESS:


            let successObj = { ...state };
            successObj.login.processing = false;
            successObj.login.error = false;
            successObj.login.isLogin = true;
            return successObj 

		case AppActions.LOGIN_FAILED:
            let failedObj = { ...state };
            failedObj.login.processing = false;
            failedObj.login.error = true;
            failedObj.login.isLogin = false;
            return failedObj 
        
        case AppActions.LOGIN_STARTED:
            let startLoginObj = { ...state };
            startLoginObj.login.processing = true;
            startLoginObj.login.error = false;
            startLoginObj.login.isLogin = false;
            return startLoginObj     
		default:
			return state
	}
}

	export default users

