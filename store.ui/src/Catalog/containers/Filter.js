import {connect} from "react-redux";
import * as actions from "../actions/catalog";

import Filter from '../components/Filter';


const mapStateToProps = state => ({
    sortBy: state.catalog.sortBy,
    searchQuery: state.catalog.searchQuery
})

const mapActionToProps = {
    sortProduct: actions.Sort,
    searchProduct: actions.Search
}

export default connect(mapStateToProps, mapActionToProps)(Filter);