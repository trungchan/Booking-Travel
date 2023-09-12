import React, { useEffect } from 'react';
import {
    MDBCol,
    MDBInput,
    MDBIcon,
    MDBRadio,
} from 'mdb-react-ui-kit';
import WebFont from 'webfontloader';
import './BookingBody.css';
import { Row } from 'antd';

export default function BookingBodyLeft() {


    // import phông chữ
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Nunito', 'Roboto']
            }
        })
    }, []);
    return (
        <MDBCol size={4} className=''>
            <form >
                <Row className="bg-dark p-2 text-white align-items-center heading-radius">
                    <MDBIcon far icon="credit-card" style={{ fontSize: '20px' }} className='px-2' />
                    <h5 className='my-1'>THÔNG TIN NGƯỜI ĐẶT</h5>
                </Row>
                <MDBInput label='' type='text' className='form-control my-4 w-70' placeholder='Họ và tên' />
                <MDBInput label='' type='tel' className='form-control my-4' placeholder='Số điện thoại' />
                <MDBInput label='' type='email' className='form-control my-4' placeholder='Email' />
                <MDBInput label='' type='text' className='form-control my-4' placeholder='Địa chỉ' />
                <MDBRadio name='flexRadioDefault' id='flexRadioDefault1' label='Chuyển khoản ngân hàng ' className="my-1" defaultChecked />
                <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Thanh toán trực tiếp' className="my-1" />
                <MDBRadio name='flexRadioDefault' id='flexRadioDefault2' label='Thanh toán online' className="my-1" />

            </form>
        </MDBCol>


    );
}