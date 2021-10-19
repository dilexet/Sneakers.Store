import axios from "axios";
import {baseUrl} from "../../Shared/variables/baseUrl";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    cart(url = baseUrl.API_URL + 'cart/') {
        return {
            getCart: async (cartId) => await axios.get(url, {params: {cartId}}),

            // TODO: подумать как сократить эти методы в 2 метода
            // addToCart: async (Id, cartId) => await axios.post(url + Id, {params: {cartId: cartId}}),
            // updateCount: async (Id, cartId) => await axios.put(url + Id, {params: {cartId: cartId}}),
            removeFromCart: async (Id, cartId) => await axios.delete(url + Id, {params: {cartId: cartId}}),

            addToCart: async (Id, cartId) => await axios.post(url + `?id=${Id}&cartId=${cartId}`),
            updateCount: async (Id, cartId) => await axios.put(url + `?id=${Id}&cartId=${cartId}`),
        }
    }
}