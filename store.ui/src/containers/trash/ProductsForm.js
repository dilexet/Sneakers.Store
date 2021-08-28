import {connect} from "react-redux";
import * as actions from "../../actions/admin/admin";
import ProductsForm from '../../components/trash/ProductsForm';

const mapStateToProps = state => ({
    productList: state.product.list
})

const mapActionToProps = {
    createProduct: actions.Create,
    updateProduct: actions.Update
}

export default connect(mapStateToProps, mapActionToProps)(ProductsForm);