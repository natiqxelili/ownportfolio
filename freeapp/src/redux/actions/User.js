import { USER } from "../constants";
import axios from "axios";
import baseAxios from "../../utils/axios";
import { initStore } from "../store";
import { loading } from "./Common";
import { toast } from "react-toastify";

const currAdminPanel = '';

export const me = () => async dispatch => {
    return new Promise(async (resolve, reject) => {
        try {
            let me = await baseAxios.get('/User/getUserByToken');
            dispatch({
                type: USER.ME,
                me: me.data,
            });

            resolve();
        } catch (error) {
            console.log(`Login error: ${error}`);
            delete localStorage.token;
            window.location.reload();
        }
    });
};

export const login = (username, password) => {
    return dispatch => {
        axios
            .post(`${currAdminPanel}/api/Auth/adminLogin`, {
                "mail": username,
                "password": password
            })
            .then(res => {
                if (res.data) {
                    localStorage.token = res.data.token;
                    window.location.assign('/');
                    return {
                        type: USER.LOGIN,
                        data: res.data
                    };
                }
            })
            .catch((error) => {
                toast.error(error.response.data)
            })
            .then(() => dispatch(loading("login", false)));
    };
};

export const logout = () => {
    delete localStorage.token;
    return {
        type: USER.LOGOUT
    };
};
