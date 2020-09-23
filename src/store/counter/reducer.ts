import { INCREMENT, DECREMENT } from './action-types';

const initialState = {
    count: 0
};

export default (state = initialState, { type, payload }: any) => {
    switch(type) {
        case INCREMENT:
        return { count: payload };

        case DECREMENT:
        return { count: payload };

        default:
        return state;
    }
}
