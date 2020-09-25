import { LOGIN_ASYNC } from "./action-types";


const initialState = {
    user: {},
    isAuth: false
}

export default (state = initialState, { type, payload }: any) => {
    switch(type) {
        case LOGIN_ASYNC:
        return { ...payload }

        default:
        return state;
    }
}
