import {connect} from "react-redux";

import * as actions from "../../actions/catalog/catalog";
import Catalog from '../../components/pages/Catalog';

const mapStateToProps = state => ({
    productList: state.product.list,
    isLoading: state.product.isLoading,
})

const mapActionToProps = {
    fetchAllProducts: actions.FetchAll,
}

export default connect(mapStateToProps, mapActionToProps)(Catalog);