import axios from "axios";
import {baseUrl} from "../../Shared/variables/baseUrl";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    catalog(url = baseUrl.API_URL + 'catalog/') {
        // catalog(url = baseUrl.LOCAL_URL) {
        return {
            fetchAll: async () => await axios.get(url),
            fetchById: async id => await axios.get(url + id),

            sort: async sortBy => await axios.get(url, {params: {sortBy}}),
            search: async searchQuery => await axios.get(url, {params: {searchQuery}}),
        }
    }
}