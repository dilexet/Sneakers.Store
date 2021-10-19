import {connect} from "react-redux";

import * as actions from "../actions/favorite";
import FavoriteComponent from '../components/FavoriteComponent';

const mapStateToProps = () => ({})

const mapActionToProps = {
    removeFromFavorite: actions.RemoveFromFavorite,
}

export default connect(mapStateToProps, mapActionToProps)(FavoriteComponent);