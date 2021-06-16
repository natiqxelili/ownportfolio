import { COMMON } from "../constants";

export const setState = (state, value) => {
    return {
        type: COMMON.SETSTATE,
        state,
        value
    };
};

export const loading = (name, value = true) => {
    return {
        type: COMMON.LOADING,
        name,
        value
    };
};

export const rightbar = (name, visible = true, props = {}) => {
    return {
        type: COMMON.RIGHTBAR,
        name,
        visible,
        props
    };
};

export const modal = (name, visible = true, props = {}) => {
    return {
        type: COMMON.MODAL,
        name,
        visible,
        props
    };
};