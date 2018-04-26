
import {
    PRELOADER_RUN,
    PRELOADER_STOP
} from './action_types';

const initialState = {
    toggle: false
}

export const preLoader = (state = initialState, action)  => {
    switch (action.type) {
        case PRELOADER_RUN: {
            console.log(PRELOADER_RUN,action);
            return Object.assign({}, state, {
                toggle: true
            })
        }
        case PRELOADER_STOP: {
            console.log(PRELOADER_STOP,action);
            return Object.assign({}, state, {
                toggle: false
            })
        }
        default:
            return state;
    }
}