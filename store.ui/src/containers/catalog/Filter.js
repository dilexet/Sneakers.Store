import {connect} from "react-redux";
import * as actions from "../../actions/filter";

import Filter from '../../components/other/Filter';


const mapStateToProps = state => ({
    sortBy: state.filter.sortBy,
    searchQuery: state.filter.searchQuery
})

const mapActionToProps = {
    sortProduct: actions.Sort,
    searchProduct: actions.Search
}

export default connect(mapStateToProps, mapActionToProps)(Filter);