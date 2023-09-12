import React from 'react';
import { Modal } from 'antd';
import { useSelector } from 'react-redux';
import CreateModalDomesticItem from './CreateModalDomesticItem';



const CreateModalDomestic = (props) => {
    const { onHandleOpen, onHandleClose, onHandleCreateNewTour } = props;
    const showModal = useSelector((state) => state.showForm)
    // console.log("open", onHandleOpen);
    // console.log("close", onHandleClose)
    return (
        <>
            <Modal title="Create new Tour" open={showModal}
                onOk={onHandleOpen}
                onCancel={onHandleClose}>
                <CreateModalDomesticItem onHandleCreateNewTour={onHandleCreateNewTour} />
            </Modal>
        </>
    );
};
export default CreateModalDomestic;