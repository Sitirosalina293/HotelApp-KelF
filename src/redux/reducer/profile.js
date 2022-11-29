const InitStateDataProfile = {
  dataUser: [],
  isLoadingDataUser: false,
  dataPemesan: [],
};

export const profileReducer = (state = InitStateDataProfile, action) => {
  switch (action.type) {
    case 'GET_DATA_USER':
      return {
        ...state,
        dataUser: action.payload,
      };
    case 'SET_LOADING_DATA_USER':
      return {
        ...state,
        isLoadingDataUser: action.payload,
      };
    case 'GET_DATA_PEMESANAN':
      return {
        ...state,
        dataPemesan: action.payload,
      };

    default:
      return state;
  }
};
