import axios from "axios";

export default {
    // Gets all users from API
    getUsers: function () {
        return axios.get("https://randomuser.me/api/?results=200&nat=us");
    }
};