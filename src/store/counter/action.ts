import { DECREMENT, INCREMENT } from './action-types';

export const increment = (count: number = 0) => {    
    const sum = count + 1;
    return {
        type: INCREMENT,
        payload: sum
    }
}

export const decrement = (count: number = 0) => {
    return {
        type: DECREMENT,
        payload: count - 1
    }
}
