import axios from "axios";

const API_URL = "http://localhost:3000/api/auth"

const login = (username, password) => {
    return axios
    .post(API_URL + "signin", {
        username,password
    })
    .then((response) => {
        if(response.data.username){
            localStorage.setItem("user",JSON.stringify(response.data))
        }

      return response.data;
    });
};

const AuthService = {
    login,
}

export default AuthService;