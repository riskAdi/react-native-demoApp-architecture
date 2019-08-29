
import axios from 'axios';
import {LoginActions} from '../config'

console.log(LoginActions.LOGIN_SUCCESS);

const login = ({username,password}) => {

	return dispatch => { 

    dispatch({type: LoginActions.LOGIN_STARTED});
		axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
			.then(res => {
				dispatch({type: LoginActions.LOGIN_SUCCESS});
	        })
	        .catch(err => {
                dispatch({type: LoginActions.LOGIN_FAILED});
	        });
	};
}

export default {login}