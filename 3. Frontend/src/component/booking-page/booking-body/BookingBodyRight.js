import React, { useEffect, useState } from 'react';
import {
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBTypography,
    MDBCardBody
} from 'mdb-react-ui-kit';
import './BookingBody.css';
import { Button, InputNumber, Row } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Navigate, useNavigate, useParams } from 'react-router';
import { actionGetTourDetailAPI } from '../../../redux/action/TourAction';
import { SearchOutlined } from '@ant-design/icons';


export default function BookingBodyRight(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { onHandleCreateNewBooking } = props;
    // Dùng useparam để lấy id từ thằng list
    const { id } = useParams();
    const { tourDetail } = useSelector((state) => state.listTour);
    // console.log("tourDetail:::", tourDetail);
    // console.log("content::", content);
    const [guest, setGuest] = useState("1");
    // console.log("Guest", guest);
    const userId = localStorage.getItem("id");

    const handleCreate = () => {
        const newBooking = {
            guest: guest,
            status: "1",
            bookingDate: dayjs().format("YYYY-MM-DD"),
            userId: userId,
            toursId: id
        };
        onHandleCreateNewBooking(newBooking);
    }

    useEffect(() => {
        dispatch(actionGetTourDetailAPI(id))
    }, [dispatch, id])

    // console.log("item", item[0].imageUrl);
    // const totalPrice = item ? (tourDetai.priceSale * setGuest) : navigate("/");
    if (!tourDetail) {
        return (
            <MDBCol size={8} className='gx-5 '>
                <MDBRow className='d-flex'>
                    <Row className="bg-dark p-2 text-white align-items-center heading-radius" style={{ width: 820 }} >
                        <MDBIcon fas icon="shopping-cart" style={{ fontSize: '20px' }} className='px-2' />
                        <h5 className='my-1'>THÔNG TIN VỀ SẢN PHẨM / DỊCH VỤ</h5>
                    </Row>
                    <h5 className='py-5 text-center'>Chưa có Tour nào trong giỏ hàng.....</h5>
                    <div className="text-center py-5" style={{ height: 50 }}>
                        <Button className='search-tour' type="primary" icon={<SearchOutlined />} onClick={() => { navigate("/search-page") }}>Search Tour</Button>
                    </div>
                </MDBRow>
            </MDBCol>
        )
    };
    return (
        <MDBCol size={8} className='gx-5 '>
            <MDBRow className='d-flex'>
                <Row className="bg-dark p-2 text-white align-items-center heading-radius">
                    <MDBIcon fas icon="shopping-cart" style={{ fontSize: '20px' }} className='px-2' />
                    <h5 className='my-1'>THÔNG TIN VỀ SẢN PHẨM / DỊCH VỤ</h5>
                </Row>

                <MDBCol size={6} className='py-4'>
                    <img src={tourDetail.imageUrl} className="rounded-4 shadow-4 float-start img-size "
                        alt="" />
                </MDBCol>
                <MDBCol size={6}>
                    <MDBCardBody>
                        <div className='py-4 px-2 checkout-text-heading'>{tourDetail.tourName}</div>
                        <h6 className='p-2 day-font'>Ngày khởi hành: {tourDetail.arrival} </h6>
                        <h6 className='p-2 day-font'>Ngày về: {tourDetail.leaving}</h6>
                        <Row className=''>
                            <div className='p-2 day-font'>
                                <h6 >Số người: </h6>
                            </div>
                            <InputNumber className='px-4 py-1' min={1} max={10} defaultValue={1} value={guest} onChange={(e) => { setGuest(e) }} />

                        </Row>
                        <MDBRow className='py-2' >
                            <MDBCol className='my-4'>
                                <MDBTypography variant='h4' className=''>TỔNG CỘNG </MDBTypography>
                            </MDBCol>
                            <MDBCol className='d-flex justify-content-end my-4'>
                                <MDBTypography variant='h4' className='font-price'>
                                    {(tourDetail.priceSale * guest).toLocaleString('en-US')}đ
                                </MDBTypography>

                            </MDBCol>
                        </MDBRow>
                        <hr />
                        <div className="d-grid ">
                            <Button className='checkout-item' onClick={handleCreate}>Thanh toán</Button>
                        </div>
                    </MDBCardBody>

                </MDBCol>


            </MDBRow>
        </MDBCol>

    );
}