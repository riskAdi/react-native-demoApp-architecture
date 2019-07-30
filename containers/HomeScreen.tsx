
import {getLoginState} from '../selectors'
import {loginAction} from '../actions'
import { connect } from 'react-redux'
import HomeScreen from '../screens/HomeScreen';

const mapStateToProps = state => {
   return getLoginState(state);
};

const mapDispatchToProps = dispatch => ({
	validateLogin: () => dispatch(loginAction.login({"username":"amjad","password":"123abc"}))
})

export default connect(mapStateToProps,mapDispatchToProps)(HomeScreen)