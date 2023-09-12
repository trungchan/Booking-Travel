import React from 'react';
import { Modal } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import UpdateModalDomesticItem from './UpdateModalDomesticItem';
import { actionShowFormUpdateRedux } from '../../../redux/action/FormUpdateAction';




const UpdateModalDomestic = (props) => {
    const { onHandleUpdate } = props;

    const showModal = useSelector((state) => state.tourFormUpdate.isShowForm)
    const dispatch = useDispatch();
    const handleCLose = () => {
        dispatch(actionShowFormUpdateRedux());
    }
    // console.log("123213,", showModal);
    return (
        <>
            <Modal title="Edit Tour" open={showModal}
                onOk={handleCLose}
                onCancel={handleCLose}>
                <UpdateModalDomesticItem onHandleUpdate={onHandleUpdate} />
            </Modal>
        </>
    );
};
export default UpdateModalDomestic;

