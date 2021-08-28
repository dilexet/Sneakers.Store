import {connect} from "react-redux";
import * as actionsCart from "../../actions/cart/cart";
import * as actionsProduct from "../../actions/catalog/catalog";
import CardProduct from '../../components/sections/CardProduct';


const mapStateToProps = (state, {Id}) => ({
    product: state,
    addedCount: state.cart.list.reduce((count, product) =>
        count + (product.Product.Id === Id ? 1 : 0), 0
    )
})

//TODO: убрать updateCount
const mapActionToProps = {
    addToCart: actionsCart.AddToCart,
    updateCount: actionsCart.UpdateCount,

    fetchById: actionsProduct.FetchById,
}

export default connect(mapStateToProps, mapActionToProps)(CardProduct);