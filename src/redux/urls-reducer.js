
const initialState = {
    urlsBlocks: []
}

export const urlsReducer = (state = initialState, action) => {


    switch (action.type) {
        case 'ADD_URL':

            if (state.urlsBlocks.length === 0) {

                return {
                    ...state,
                    urlsBlocks: ['']
                }
            }

        default:
            return state;
    }
}