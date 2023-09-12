import React, { useEffect } from 'react';
import Heading from '../component/booking-page/image-body/Heading';
import BookingBody from '../component/booking-page/booking-body/BookingBody';
import Navigation from '../component/header/Navigation';
import Footer from '../component/footer/Footer';
import { useDispatch } from 'react-redux';
import { actionFetchTourAPI } from '../redux/action/TourAction';
import { actionAddBookingAPI, actionFetchBookingAPI } from '../redux/action/BookingAction';


function BookingContainer(props) {
    const dispatch = useDispatch();


    const onHandleCreateNewBooking = (newBK) => {
        const newBookingAPI = { ...newBK };
        dispatch((actionAddBookingAPI(newBookingAPI)))
        alert("Thanh toán thành công")
    }

    useEffect(() => {
        dispatch(actionFetchTourAPI());
        dispatch(actionFetchBookingAPI())
    }, []);


    return (
        <div>
            <Navigation />
            <Heading />
            <BookingBody
                onHandleCreateNewBooking={onHandleCreateNewBooking} />
            <Footer />
        </div>
    );
}

export default BookingContainer;