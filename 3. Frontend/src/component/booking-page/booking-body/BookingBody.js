import React, { useEffect } from 'react';
import {
    MDBRow,
    MDBContainer,
} from 'mdb-react-ui-kit';
import WebFont from 'webfontloader';
import './BookingBody.css';
import BookingBodyRight from './BookingBodyRight';
import BookingBodyLeft from './BookingBodyLeft';

export default function BookingBody(props) {
    const { onHandleCreateNewBooking } = props;
    // import phông chữ
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Nunito', 'Roboto']
            }
        })
    }, []);
    return (

        <MDBContainer className='d-flex px-4 checkout-body-right' style={{ fontFamily: "Roboto" }}>
            <MDBRow className='gx-3'>
                <BookingBodyLeft />
                <BookingBodyRight
                    onHandleCreateNewBooking={onHandleCreateNewBooking} />
            </MDBRow>
        </MDBContainer >
    );
}