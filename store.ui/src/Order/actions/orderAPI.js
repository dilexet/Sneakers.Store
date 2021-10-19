import axios from "axios";
import {baseUrl} from "../../Shared/variables/baseUrl";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    order(url = baseUrl.API_URL + 'order/') {
        return {
            checkout: async (cartId, order) => await axios.post(url + cartId, order),
        }
    }
}