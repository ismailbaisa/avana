const initialState = {
    display: false,
    menuid: '',
}

const reducer = (state = initialState, action) => {
    if (action.type === 'TOGGLER') {
        if (state.display === false) {
            return {
                display: state.display = true,
                menuid: state.menuid = action.payload.toString()
            }
        } else {
            return {
                display: state.display = false,
                menuid: state.menuid = action.payload.toString()
            }
        }
    }

    return state;
};

export default reducer;