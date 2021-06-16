import { USER } from "../constants";

const initialState = {
    me: {},
    login: localStorage.token && true
};

export const User = (state = initialState, action) => {
    switch (action.type) {
        case USER.ME:
            return {
                ...state,
                me: action.me
            };

        case USER.LOGIN:
            return {
                me: action.data,
                login: true
            };

        case USER.LOGOUT:
            return {
                me: {},
                login: false
            };

        default:
            return state;
    }
};
