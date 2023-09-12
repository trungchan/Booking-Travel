import { combineReducers } from "redux";
import DepartureReducer from "./DepartureReducer";
import DestinationsReducer from "./DestinationReducer";
import TourReducer from "./TourReducer";
import FormRecuder from "./FormReducer";
import UserReducer from "./UserReducer";
import BookingReducer from "./BookingReducer";
import FormBookingUDReducer from "./FormBookingUDReducer";
import FormBookingCreateReducer from "./FormBookingCreateReducer";
import FormTourUpdateReducer from "./FormTourUpdateReducer";


const RootReducer = combineReducers({
    listDeparture: DepartureReducer,
    listDestination: DestinationsReducer,
    listTour: TourReducer,
    showForm: FormRecuder,
    listUser: UserReducer,
    tourFormUpdate: FormTourUpdateReducer,
    listBooking: BookingReducer,
    bookingFormUpdate: FormBookingUDReducer,
    bookingCreateModal: FormBookingCreateReducer


});
export default RootReducer;