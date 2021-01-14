const initialState = {
    menuid: '',
}

const reducer = (state = initialState, action) => {
    if (action.type === 'TOGGLER') {
        if (state.menuid === action.payload) {
            return {
                menuid: state.menuid = ''
            }
        } else {
            return {
                menuid: state.menuid = action.payload
            }
        }
    }
    return state;
};

export default reducer;