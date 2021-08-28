import {connect} from "react-redux";
import orderBy from 'lodash/orderBy';

import * as actions from "../../actions/catalog/catalog";
import Catalog from '../../components/pages/Catalog';


const sort = (product, sortBy) => {
    switch (sortBy) {
        case 'name':
            return orderBy(product, 'Name', 'asc');
        case 'price_high':
            return orderBy(product, 'Price', 'desc');
        case 'price_low':
            return orderBy(product, 'Price', 'asc');
        case 'all':
        default:
            return product;

    }
}

const filter = (product, searchQuery) =>
    product.filter(
        o =>
            o.Name.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0 ||
            o.ShortDescription.toLowerCase().indexOf(searchQuery.toLowerCase()) >= 0,
    );

const search = (product, sortBy, searchQuery) => {
    return sort(filter(product, searchQuery), sortBy);
}


const mapStateToProps = state => ({
    productList: search(state.product.list, state.filter.sortBy, state.filter.searchQuery),
    isLoading: state.product.isLoading,
})

const mapActionToProps = {
    fetchAllProducts: actions.FetchAll,
}

export default connect(mapStateToProps, mapActionToProps)(Catalog);