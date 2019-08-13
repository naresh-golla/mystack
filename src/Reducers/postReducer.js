
const postReducer = (state = {}, action) => {
    switch (action.type) {
        case 'ADD_BIO':
            return { ...state, action.bio };
        default:
            return state;
    }
}
export default postReducer;