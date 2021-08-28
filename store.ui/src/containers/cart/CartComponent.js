import {connect} from "react-redux";

import * as actions from "../../actions/cart/cart";
import CartComponent from '../../components/header/cart/CartComponent';

const mapStateToProps = () => ({})

// TODO: использовать для +/- только updateCount
const mapActionToProps = {
    updateCount: actions.UpdateCount,
    removeFromCart: actions.RemoveFromCart,
}

export default connect(mapStateToProps, mapActionToProps)(CartComponent);