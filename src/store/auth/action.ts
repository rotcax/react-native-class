import { LOGIN } from "./action-types"

export const login = (credentials: any) => {
    return {
        type: LOGIN,
        payload: credentials
    }
}
