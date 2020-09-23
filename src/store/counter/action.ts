import { DECREMENT, INCREMENT } from './action-types';

export const increment = (count: number = 0) => {
    return {
        type: INCREMENT,
        payload: count + 1
    }
}

export const decrement = (count: number = 0) => {
    return {
        type: DECREMENT,
        payload: count - 1
    }
}
