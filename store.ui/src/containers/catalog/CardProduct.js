import {connect} from "react-redux";
import * as actions from "../../actions/cart/cart";
import * as actionsFavorite from "../../actions/favorite/favorite";

import CardProduct from '../../components/sections/CardProduct';


const mapStateToProps = (state, {Id}) => ({
    product: state,
    addedCount: state.cart.list.reduce((count, product) =>
        count + (product.Product.Id === Id ? 1 : 0), 0
    ),
    isFavorite: state.favorite.list.find((item) => item.Product.Id === Id) === null,
})

//TODO: убрать updateCount
const mapActionToProps = {
    addToCart: actions.AddToCart,
    updateCount: actions.UpdateCount,
    addToFavorite: actionsFavorite.AddToFavorite,
    removeFromFavorite: actionsFavorite.RemoveFromFavorite,
}

export default connect(mapStateToProps, mapActionToProps)(CardProduct);