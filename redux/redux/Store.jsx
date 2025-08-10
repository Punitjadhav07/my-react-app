import {createStore} from 'redux';
let initialState = {
    counter:0,
    userName:"john doe"
};

let reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREMENT':
            // state.counter += 1;
            return { ...state, counter: state.counter + 1};
        default:
            break;
    }
    return state;
};
let store = createStore(reducer);


export default store;