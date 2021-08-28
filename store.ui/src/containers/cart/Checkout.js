import {connect} from "react-redux";

import Checkout from '../../components/header/cart/Checkout';
import * as actions from "../../actions/order/order";

const mapStateToProps = () => ({})

const mapActionToProps = {
    checkout: actions.Checkout,
}

export default connect(mapStateToProps, mapActionToProps)(Checkout);