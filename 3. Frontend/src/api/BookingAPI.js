import { Api } from "./Api"

const getListBookingsAPI = (search, size, sort, page, minBookingDate, maxBookingDate, minTotalPrice, maxTotalPrice) => {
    const searchParam = search ? `search=${search}` : '';
    const sizeParam = size ? `size=${size}` : '';
    const pageParam = page ? `page=${page}` : '';
    const minBookingDateParam = minBookingDate ? `minRatting=${minBookingDate}` : '';
    const maxBookingDateParam = maxBookingDate ? `maxRatting=${maxBookingDate}` : '';
    const minTotalPriceParam = minTotalPrice ? `maxPrice=${minTotalPrice}` : '';
    const maxTotalPriceParam = maxTotalPrice ? `minPrice=${maxTotalPrice}` : '';
    const sortParam = sort ? `sort=${sort}` : '';

    const url = `Bookings?${searchParam}&${sizeParam}&${sortParam}
    &${pageParam}&${minBookingDateParam}&${maxBookingDateParam}
    &${minTotalPriceParam}&${maxTotalPriceParam}`;
    return Api("GET", url, null);
}

// Get Booking by ID

const getBookingByID_API = (id) => {
    const url = "Bookings/" + id;
    return Api("GET", url, null);
}

// Add New Booking
const addBookingNewAPI = (tourNew) => {
    return Api("POST", "Bookings/", tourNew);
};

// Delete Booking
const deleteBookingAPI = (id) => {
    const url = "Bookings/" + id;
    return Api("DELETE", url, null);
};

// Update Booking
const updateBookingAPI = (accUD) => {
    const url = "Bookings";
    return Api("PUT", url, accUD);
}


export {
    getListBookingsAPI,
    getBookingByID_API,
    addBookingNewAPI,
    deleteBookingAPI,
    updateBookingAPI
};