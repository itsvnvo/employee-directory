// https://randomuser.me/api/?results=25

import axios from "axios";

const URL = "https://randomuser.me/api/?results=25"

export default {
    getPeople: function() {
        return axios.get(URL);
    }
}
