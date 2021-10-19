import {connect} from "react-redux";

import App from '../components/App';
import * as actions from "../../Authentication/actions/auth";

const mapStateToProps = state => ({
    user: state.auth,
})

const mapActionToProps = {
    getUser: actions.GetUser
}

export default connect(mapStateToProps, mapActionToProps)(App);