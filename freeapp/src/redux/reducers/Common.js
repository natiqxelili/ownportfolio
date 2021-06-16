import { COMMON } from "../constants";
const initialState = {
    startup: true,
    loading: {},
    selectedCompanyID: null
}

export const Common = (state = initialState, action) => {
    switch (action.type) {
        case COMMON.SETSTATE:
            return {
                ...state,
                [action.state]: action.value
            };

        case COMMON.LOADING:
            return {
                ...state,
                loading: {
                    [action.name]: action.value
                }
            };

        case COMMON.RIGHTBAR:
            return {
                ...state,
                rightbars: {
                    [action.name]: {
                        visible: action.visible,
                        ...action.props
                    }
                }
            };

        case COMMON.MODAL:
            return {
                ...state,
                modals: {
                    [action.name]: {
                        visible: action.visible,
                        ...action.props
                    }
                }
            };

        default:
            return state;
    }
}