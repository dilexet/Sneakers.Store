import {connect} from "react-redux";
import * as actions from "../../actions/cart/cart";
import CardProduct from '../../components/sections/CardProduct';


const mapStateToProps = (state, {Id}) => ({
    product: state,
    addedCount: state.cart.list.reduce((count, product) =>
        count + (product.Product.Id === Id ? 1 : 0), 0
    )
})

//TODO: убрать updateCount
const mapActionToProps = {
    addToCart: actions.AddToCart,
    updateCount: actions.UpdateCount,
}

export default connect(mapStateToProps, mapActionToProps)(CardProduct);