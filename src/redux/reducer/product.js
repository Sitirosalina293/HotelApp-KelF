const InitStateHotel = {
    hotel: [],
    isLoadingHotel: false,
};

export const productReducer = (state = InitStateHotel, action) => {
    switch (action.type) {
        case 'GET_HOTEL':
            return {
                ...state,
                hotel: action.payload,
            };
        case 'SET_LOADING_HOTEL':
            return {
                ...state,
                isLoadingHotel: action.payload,
            };
        default:
            return state;
    }
};