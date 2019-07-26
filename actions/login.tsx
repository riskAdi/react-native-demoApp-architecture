
import axios from 'axios';
import AppActions from '../config'
const login = ({username,password}) => {

	return dispatch => { 

    dispatch({type: AppActions.LOGIN_STARTED});
		axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
			.then(res => {
				dispatch({type: AppActions.LOGIN_SUCCESS});
	        })
	        .catch(err => {
                dispatch({type: AppActions.LOGIN_FAILED});
	        });
	};
}


export default {login}