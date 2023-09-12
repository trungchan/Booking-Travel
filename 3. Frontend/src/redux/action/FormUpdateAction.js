import * as TYPES from "../contant/ActionType";




// Lấy thông tin của Account Update trên redux
export const actionFetchTourUpdateInfoRedux = (tourUD) => {
  console.log('tourUD', tourUD);

  return {
    type: TYPES.FETCH_TOUR_UPDATE_INFO,
    payload: tourUD,
  };
};

// Chuyển đổi trạng thái đóng mở của Tour Edit
export const actionShowFormUpdateRedux = () => {
  return {
    type: TYPES.SHOW_FORM_UPDATE,
  };
};



