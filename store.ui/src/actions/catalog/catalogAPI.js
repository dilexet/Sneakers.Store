import axios from "axios";
import {baseUrl} from "../../variables/baseUrl";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    catalog(url = baseUrl.API_URL + 'catalog/') {
        return {
            fetchAll: async () => await axios.get(url),
            fetchById: async id => await axios.get(url + id),

            sort: async sortBy => await axios.get(url, {params: {sortBy}}),
            search: async sortBy => await axios.get(url, {params: {sortBy}}),
        }
    }
}