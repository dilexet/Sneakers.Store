import {connect} from "react-redux";

import * as actions from "../actions/admin";
import Products from '../components/Products';


// const sortBy = (catalog, sortBy) => {
//     switch (sortBy) {
//         case 'all':
//             return catalog;
//         case 'name':
//             return orderBy(catalog, 'Name', 'asc');
//         case 'price_high':
//             return orderBy(catalog, 'Price', 'desc');
//         case 'price_low':
//             return orderBy(catalog, 'Price', 'asc');
//         default:
//             return catalog;
//
//     }
// }


const mapStateToProps = state => ({
    productList: state.product.list,
    isLoading: state.product.isLoading,
})

const mapActionToProps = {
    fetchAllProducts: actions.FetchAll,
    deleteProduct: actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(Products);