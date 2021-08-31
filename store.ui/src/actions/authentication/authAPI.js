import axios from "axios";
import {baseUrl} from "../../variables/baseUrl";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    auth(url = baseUrl.API_URL + 'authenticate/') {
        return {
            getUser: async () => await axios.get(url + 'getUser', {withCredentials: true}),
            register: async (data) => await axios.post(url + "register", data, {withCredentials: true}),
            login: async (data) => await axios.post(url + "login", data, {withCredentials: true}),
            logout: async () => await axios.get(url + "logout", {withCredentials: true}),
        }
    }
}