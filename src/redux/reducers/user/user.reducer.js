const initialState = {
    currentUser: null,
};


const userReducer = (state = initialState, action) => {
    if (action.type === 'SET_CURRENT_USER') {
        return {
            ...state,
            currentUser: action.payload,
        };
    } else {
        return state
    }
};

export default userReducer;
