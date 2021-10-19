import {connect} from "react-redux";

import Login from '../components/Login';
import * as actions from "../actions/auth";

const mapStateToProps = state => ({
    response: state.auth.response,
})

const mapActionToProps = {
    login: actions.Login,
    getUser: actions.GetUser
}

export default connect(mapStateToProps, mapActionToProps)(Login);