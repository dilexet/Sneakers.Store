import {connect} from "react-redux";

import Register from '../components/Register';
import * as actions from "../actions/auth";

const mapStateToProps = state => ({
    response: state.auth.response,
})

const mapActionToProps = {
    register: actions.Register,
}

export default connect(mapStateToProps, mapActionToProps)(Register);