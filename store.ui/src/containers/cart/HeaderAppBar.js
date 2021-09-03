import {connect} from "react-redux";

import HeaderAppBar from '../../components/header/HeaderAppBar';
import * as actions from "../../actions/authentication/auth";
import * as actionsFav from "../../actions/favorite/favorite";



const mapStateToProps = state => ({
    count: state.cart.list.length,
    // TODO: получать количество favorite
    countFavorite: state.cart.list.length,
    isAuth: state.auth.isAuthorize,

})

const mapActionToProps = {
    logout: actions.Logout,
    getUser: actions.GetUser,
    getFavorite: actionsFav.GetFavorite,
}

export default connect(mapStateToProps, mapActionToProps)(HeaderAppBar);