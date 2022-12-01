const InitStateHotel = {
  hotel: [],
  isLoadingHotel: false,
  popularHotel: [],
  isLoadingPopularHotel: false,
  hotelData: [],
  isLoadingHotelData: false,
  hotelDataDate: [],
  hotelDataPesan: [],
  hotelDetail: [],
  isLoadingHotelDetail: false,
  totalMoney: [],
  dataHistoryCheckOut: [],
  dataCheckout: null,
  isLoadingDataHistoryCheckOut: false,
  dataHistoryToReview: [],
  isLoadingDataHistoryToReview: false,
  dataSaveHistoryReview: [],
  isLoadingDataSaveHistoryReview: false,
  dataSaveHistoryDetailReview: [],
  isLoadingDataSaveHistoryDetailReview: false,
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
    case 'GET_HOTEL_DATA':
      return {
        ...state,
        hotelData: action.payload,
      };
    case 'GET_HOTEL_DATA_DATE':
      return {
        ...state,
        hotelDataDate: action.payload,
      };
    case 'GET_HOTEL_DATA_PESAN':
      return {
        ...state,
        hotelDataPesan: action.payload,
      };
    case 'SET_LOADING_HOTEL_DATA':
      return {
        ...state,
        isLoadingHotelData: action.payload,
      };
    case 'GET_HOTEL_DETAIL':
      return {
        ...state,
        hotelDetail: action.payload,
      };
    case 'SET_LOADING_HOTEL_DETAIL':
      return {
        ...state,
        isLoadingHotelDetail: action.payload,
      };
    case 'GET_TOTAL_MONEY':
      return {
        ...state,
        totalMoney: action.payload,
      };
    case 'GET_HISTORY_CHECKOUT':
      return {
        ...state,
        dataHistoryCheckOut:
          action.payload && Array.isArray(action.payload)
            ? action.payload.filter(data => data && typeof data == 'object')
            : [],
      };
    case 'GET_LOADING_HISTORY_CHECKOUT':
      return {
        ...state,
        isLoadingDataHistoryCheckOut: action.payload,
      };
    case 'GET_CHECKOUT':
      return {
        ...state,
        dataCheckout: action.payload,
      };
    case 'GET_HISTORY_TO_REVIEW':
      return {
        ...state,
        dataHistoryToReview: action.payload,
      };
    case 'GET_LOADING_HISTORY_TO_REVIEW':
      return {
        ...state,
        isLoadingDataHistoryToReview: action.payload,
      };
    case 'GET_SAVE_HISTORY_REVIEW':
      return {
        ...state,
        dataSaveHistoryReview: action.payload,
      };
    case 'GET_LOADING_SAVE_HISTORY_REVIEW':
      return {
        ...state,
        isLoadingDataSaveHistoryReview: action.payload,
      };
    case 'GET_SAVE_HISTORY_DETAIL_REVIEW':
      return {
        ...state,

        dataSaveHistoryDetailReview: action.payload,
      };
    case 'GET_LOADING_SAVE_HISTORY_DETAIL_REVIEW':
      return {
        ...state,
        isLoadingDataSaveHistoryDetailReview: action.payload,
      };
      

    default:
      return state;
  }
};
