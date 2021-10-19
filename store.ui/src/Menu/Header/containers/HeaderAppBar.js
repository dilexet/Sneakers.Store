import {connect} from "react-redux";

import HeaderAppBar from '../components/HeaderAppBar';
import * as actions from "../../../Authentication/actions/auth";
import * as actionsFav from "../../../Favorite/actions/favorite";



const mapStateToProps = state => ({
    count: state.cart.list.length,
    // TODO: получать количество favorite
    countFavorite: state.favorite.list.length,
    isAuth: state.auth.isAuthorize,

})

const mapActionToProps = {
    logout: actions.Logout,
    getUser: actions.GetUser,
    getFavorite: actionsFav.GetFavorite,
}

export default connect(mapStateToProps, mapActionToProps)(HeaderAppBar);