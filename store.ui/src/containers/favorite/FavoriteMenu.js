import {connect} from "react-redux";

import * as actions from "../../actions/favorite/favorite";
import FavoriteMenu from '../../components/header/favorite/FavoriteMenu';


const mapStateToProps = state => ({
    products: state.favorite.list,
})

const mapActionToProps = {
    getFavorite: actions.GetFavorite,
}

export default connect(mapStateToProps, mapActionToProps)(FavoriteMenu);