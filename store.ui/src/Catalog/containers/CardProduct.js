import {connect} from "react-redux";
import * as actions from "../../Cart/actions/cart";
import * as actionsFavorite from "../../Favorite/actions/favorite";

import CardProduct from '../components/CardProduct';


const mapStateToProps = (state, {Id}) => ({
    product: state,
    addedCount: state.cart.list.reduce((count, product) =>
        count + (product.Product.Id === Id ? 1 : 0), 0
    ),
    favoriteCount: state.favorite.list.reduce((count, product) =>
        count + (product.Product.Id === Id ? 1 : 0), 0
    ),
})

//TODO: убрать updateCount
const mapActionToProps = {
    addToCart: actions.AddToCart,
    updateCount: actions.UpdateCount,
    addToFavorite: actionsFavorite.AddToFavorite,
    removeFromFavorite: actionsFavorite.RemoveFromFavorite,
}

export default connect(mapStateToProps, mapActionToProps)(CardProduct);