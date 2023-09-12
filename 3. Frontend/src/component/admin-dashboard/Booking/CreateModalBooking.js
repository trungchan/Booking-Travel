import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import CreateModalBookingItems from './CreateModalBookingItems';
import { actionCloseFormCreateRedux } from '../../../redux/action/FormUpdateBookingAction';



const CreateModalBooking = (props) => {
    const dispatch = useDispatch();
    const { isShowFormCreate } = useSelector((state) => state.bookingCreateModal)
    // console.log("showmodal", isShowFormCreate);
    const handleClose = () => {
        dispatch(actionCloseFormCreateRedux())
    }
    // console.log("open", onHandleOpen);
    // console.log("close", onHandleClose)
    return (
        <>
            <Modal title="Create new Booking" open={isShowFormCreate}
                onOk={handleClose}
                onCancel={handleClose}>

                <CreateModalBookingItems />
            </Modal>
        </>
    );
};
export default CreateModalBooking;