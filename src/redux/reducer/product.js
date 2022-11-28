const InitStateHotel = {
  hotel: [],
  isLoadingHotel: false,
  popularHotel: [],
  isLoadingPopularHotel: false,
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
    case 'GET_POPULAR_HOTEL':
      return {
        ...state,
        popularHotel: action.payload,
      };
    case 'SET_LOADING_POPULAR_HOTEL':
      return {
        ...state,
        isLoadingPopularHotel: action.payload,
      };

    default:
      return state;
  }
};
