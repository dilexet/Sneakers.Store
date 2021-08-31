import {connect} from "react-redux";

import App from '../App';
import * as actions from "../actions/authentication/auth";

const mapStateToProps = state => ({
    user: state.auth,
})

const mapActionToProps = {
    getUser: actions.GetUser
}

export default connect(mapStateToProps, mapActionToProps)(App);