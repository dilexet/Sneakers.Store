import axios from "axios";
import {baseUrl} from "../../variables/baseUrl";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    favorite(url = baseUrl.API_URL + 'favorite/') {
        return {
            getFavorite: async (cartId) => await axios.get(url, {params: {cartId}}),
            removeFromFavorite: async (Id, cartId) => await axios.delete(url + Id, {params: {cartId: cartId}}),
            addToFavorite: async (Id, cartId) => await axios.post(url + `?id=${Id}&cartId=${cartId}`),
        }
    }
}