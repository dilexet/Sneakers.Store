import {connect} from "react-redux";

import * as actions from "../actions/favorite";
import FavoriteMenu from '../components/FavoriteMenu';


const mapStateToProps = state => ({
    products: state.favorite.list,
})

const mapActionToProps = {
    getFavorite: actions.GetFavorite,
}

export default connect(mapStateToProps, mapActionToProps)(FavoriteMenu);