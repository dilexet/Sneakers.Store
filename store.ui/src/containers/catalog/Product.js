import {connect} from "react-redux";
import * as actionsCart from "../../actions/cart/cart";
import * as actionsProduct from "../../actions/catalog/catalog";
import Product from '../../components/pages/Product';


const mapStateToProps = (state, {Id}) => ({
    product: state.catalog,
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

export default connect(mapStateToProps, mapActionToProps)(Product);