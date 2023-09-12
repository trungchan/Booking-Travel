import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';


import { actionCloseBookingUpdateRedux } from '../../../redux/action/FormUpdateBookingAction';
import UpdateModalBookingItem from './UpdateModalBookingItem';


const UpdateModalBooking = (props) => {


    const { isShowForm } = useSelector((state) => state.bookingFormUpdate)
    // console.log("isshow", isShowForm);
    const dispatch = useDispatch();
    const handleCLose = () => {
        dispatch(actionCloseBookingUpdateRedux());
    }
    // console.log("modal", isShowForm);
    return (
        <>
            <Modal title="Edit Booking" open={isShowForm}
                onOk={handleCLose}
                onCancel={handleCLose}>
                <UpdateModalBookingItem />
            </Modal>
        </>
    );
};
export default UpdateModalBooking;

