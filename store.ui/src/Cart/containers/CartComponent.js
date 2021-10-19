import {connect} from "react-redux";

import * as actions from "../actions/cart";
import CartComponent from '../components/CartComponent';

const mapStateToProps = () => ({})

// TODO: использовать для +/- только updateCount
const mapActionToProps = {
    updateCount: actions.UpdateCount,
    removeFromCart: actions.RemoveFromCart,
}

export default connect(mapStateToProps, mapActionToProps)(CartComponent);