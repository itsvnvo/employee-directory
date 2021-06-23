// https://randomuser.me/api/?results=25

import axios from "axios";

const URL = "https://randomuser.me/api/?results=25"

export default {
    getEmployees: function() {
        return axios.get(URL);
    }
}
