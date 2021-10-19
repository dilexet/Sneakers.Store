import axios from "axios";
import {baseUrl} from "../../Shared/variables/baseUrl";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    admin(url = baseUrl.API_URL + 'admin/') {
        return {
            fetchAll: async () => await axios.get(url),
            create: async newRecord => await axios.post(url, newRecord),
            update: async (id, updateRecord) => await axios.put(url + id, updateRecord),
            delete: async id => await axios.delete(url + id),
        }
    }
}