import {connect} from "react-redux";

import Header from '../../components/header/Header';
import * as actions from "../../actions/authentication/auth";

const mapStateToProps = state => ({
    isAuth: state.auth.isAuthorize,
})

const mapActionToProps = {
    logout: actions.Logout,
    getUser: actions.GetUser
}

export default connect(mapStateToProps, mapActionToProps)(Header);