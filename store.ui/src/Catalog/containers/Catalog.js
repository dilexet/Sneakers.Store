import {connect} from "react-redux";

import * as actions from "../actions/catalog";
import Catalog from '../components/Catalog';

const mapStateToProps = state => ({
    productList: state.catalog.list,
    isLoading: state.catalog.isLoading,
})

const mapActionToProps = {
    fetchAllProducts: actions.FetchAll,
}

export default connect(mapStateToProps, mapActionToProps)(Catalog);