import {connect} from "react-redux";
import * as actionsCart from "../../Cart/actions/cart";
import * as actionsProduct from "../../Catalog/actions/catalog";
import Product from '../components/Product';


const mapStateToProps = (state) => ({
    item: state.catalog.item,
    isLoading: state.catalog.isOk,
    list: state.cart.list,
    addedCount: state.cart.list.reduce((count, product) =>
        count + (product.Product.Id === (state.catalog.item ? state.catalog.item.Id : "") ? 1 : 0), 0
    )
})

//TODO: убрать updateCount
const mapActionToProps = {
    addToCart: actionsCart.AddToCart,
    updateCount: actionsCart.UpdateCount,

    fetchById: actionsProduct.FetchById,
}

export default connect(mapStateToProps, mapActionToProps)(Product);