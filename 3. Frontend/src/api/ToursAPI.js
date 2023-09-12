import { Api } from "./Api"

const getListToursAPI = (search, size, sort, page, minRatting, maxRatting, minDiscount, maxDiscount, maxPrice, minPrice, findTour, searchDestination) => {
    const searchParam = search ? `${search}` : '';
    const sizeParam = size ? `${size}` : '6';
    const pageParam = page ? `${page}` : '1';
    const minRattingParam = minRatting ? `${minRatting}` : '';
    const maxRattingParam = maxRatting ? `${maxRatting}` : '';
    const minDiscountParam = minDiscount ? `${minDiscount}` : '';
    const maxDiscountParam = maxDiscount ? `${maxDiscount}` : '';
    const maxPriceParam = maxPrice ? `${maxPrice}` : '';
    const minPriceParam = minPrice ? `${minPrice}` : '';
    const sortParam = sort ? `${sort}` : '';
    const findTourParam = findTour ? `${findTour}` : '';
    const searchDestinationParam = searchDestination ? `${searchDestination}` : '';

    const url = `Tours?search=${searchParam}&size=${sizeParam}&sort=${sortParam}&page=${pageParam}&minRatting=${minRattingParam}&maxRatting=${maxRattingParam}
    &minDiscount=${minDiscountParam}&maxDiscount=${maxDiscountParam}&maxPrice=${maxPriceParam}&minPrice=${minPriceParam}&findTour=${findTourParam}&searchDestination=${searchDestinationParam}`;
    return Api("GET", url, null);
}

// Get Tour by ID

const getTourByID_API = (id) => {
    const url = "Tours/" + id;
    return Api("GET", url, null);
}

// Add New Tour
const addToursNewAPI = (tourNew) => {
    return Api("POST", "Tours/", tourNew);
};

// Delete Tour
const deleteTourAPI = (id) => {
    const url = "Tours/" + id;
    return Api("DELETE", url, null);
};

// Update Tour
const updateTourAPI = (accUD) => {
    const url = "Tours";
    return Api("PUT", url, accUD);
}


export {
    getTourByID_API,
    getListToursAPI,
    addToursNewAPI,
    deleteTourAPI,
    updateTourAPI
};