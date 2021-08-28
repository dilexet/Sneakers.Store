import {connect} from "react-redux";
import * as actions from "../../actions/catalog/catalog";

import Filter from '../../components/other/Filter';


const mapStateToProps = state => ({
    sortBy: state.product.sortBy,
    searchQuery: state.product.searchQuery
})

const mapActionToProps = {
    sortProduct: actions.Sort,
    searchProduct: actions.Search
}

export default connect(mapStateToProps, mapActionToProps)(Filter);