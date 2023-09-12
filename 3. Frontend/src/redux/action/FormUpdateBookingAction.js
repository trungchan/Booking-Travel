import * as TYPES from "../contant/ActionType";



// Lấy thông tin của BOoking Update từ redux
export const actionFetchBookingUpdateInfoRedux = (bookingUD) => {
    //   console.log('tourUD', tourUD);
    return {
        type: TYPES.FETCH_BOOKING_UPDATE_INFO,
        payload: bookingUD,
    };
};

// Chuyển đổi trạng thái đóng mở của Booking Edit
export const actionShowBookingUpdateRedux = () => {
    // console.log("asdasd");
    return {
        type: TYPES.SHOW_FORM_BOOKING_UD,
    };
};

export const actionCloseBookingUpdateRedux = () => {

    return {
        type: TYPES.CLOSE_FORM_BOOKING_UD,
    };
};

export const actionShowFormCreateRedux = () => {
    return {
        type: TYPES.SHOW_FORM_BOOKING_CREATE,
    };
};

export const actionCloseFormCreateRedux = () => {
    return {
        type: TYPES.CLOSE_FORM_BOOKING_CREATE,
    };
};


