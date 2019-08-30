
import axios from 'axios';
import {RegisterActions} from '../config'

const register = ({mobile,password}) => {

	return dispatch => { 

    dispatch({type: RegisterActions.REGISTER_STARTED});
		axios.get('https://my-json-server.typicode.com/typicode/demo/posts')
			.then(res => {
				dispatch({type: RegisterActions.REGISTER_SUCCESS});
	        })
	        .catch(err => {
                dispatch({type: RegisterActions.REGISTER_FAILED});
	        });
	};
}

export default {register}