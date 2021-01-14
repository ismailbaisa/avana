const initialState = {
    display: false
}

const reducer = (state = initialState, action) => {
    if (action.type === 'TOGGLER') {
        if (state.display === false) {
            return {
                display: state.display = true
            }
        } else {
            return {
                display: state.display = false
            }
        }
    }

    return state;
};

export default reducer;