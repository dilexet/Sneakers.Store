import {connect} from "react-redux";

import * as actions from "../../actions/cart/cart";
import CartMenu from '../../components/header/cart/CartMenu';


const mapStateToProps = state => ({
    totalPrice: state.cart.list.reduce((total, product) => total + product.Product.Price * product.CountProducts, 0),
    count: state.cart.list.length,
    products: state.cart.list,
})

const mapActionToProps = {
    getCart: actions.GetCart,
}

export default connect(mapStateToProps, mapActionToProps)(CartMenu);