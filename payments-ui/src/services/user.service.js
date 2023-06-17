import axios from "axios";

const API_URL = "http://localhost:3000/api/test"

const getPublicContent = () => {
    return axios.get(API_URL + "all");
}

const USERSERVICE = {
    getPublicContent,
}

export default UserService;