import React from 'react';
import '../tourDomestic/TourDomestic.css'
import { useSelector } from 'react-redux';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardOverlay, MDBCardText, MDBCardTitle, MDBCol, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import { Button } from 'antd';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';
// import { actionGetTourRedux } from '../../../../redux/action/TourAction';


function HotTourItem(props) {
    // const dispatch = useDispatch();
    const navigate = useNavigate();


    const { content } = useSelector((state) => state.listTour);
    // console.log("idd,,", idTour);
    const imageCard = content ? content.filter(tour => tour.ratting > "4.6").slice(0, 6) : [];
    return (
        <MDBRow className='row-cols-1 row-cols-md-3 g-4 gx-5' >
            {
                imageCard.map(tour => {
                    // Dùng require để lấy file ảnh
                    // const dynamicImageSrc = require(`../../../../asset/tourDomestic/${tour.imageUrl}`).default;
                    return (
                        <MDBCol key={tour.id}>
                            <MDBCard>
                                <MDBCardImage
                                    className='img-size'
                                    src={tour.imageUrl}
                                    alt='...'
                                    position='top'
                                />
                                <MDBCardOverlay >
                                    <MDBCardTitle className='d-flex justify-content-end' >
                                        <span className='item-tour-ratting'>{tour.ratting} <MDBIcon fas icon="star" /></span>
                                    </MDBCardTitle>
                                </MDBCardOverlay>
                                <MDBCardBody>
                                    <MDBCardTitle>{tour.tourName}</MDBCardTitle>
                                    <MDBCardText className='description-text'>{tour.description}</MDBCardText>
                                    <MDBRow>
                                        <MDBCol>
                                            <div>Giá:  <MDBTypography tag='del'>{tour.price.toLocaleString('en-US')}đ</MDBTypography></div>
                                        </MDBCol>
                                    </MDBRow>
                                    <MDBRow >
                                        <MDBCol className='my-1'>
                                            <MDBTypography variant='h4' className='font-price'> {tour.priceSale.toLocaleString('en-US')}đ</MDBTypography>
                                        </MDBCol>
                                        <MDBCol className='d-flex justify-content-end'>
                                            <span className='item-discount '>{tour.discount}% Giảm </span>
                                        </MDBCol>
                                    </MDBRow>
                                    <div className="text-center py-4" color='black'>
                                        <Button className='booking-button'
                                            onClick={() => {
                                                // console.log("12")
                                                // dispatch(actionGetTourRedux(tour.id))
                                                navigate(`/booking/${tour.id}`)
                                            }}
                                            > <ShoppingCartOutlined style={{ fontSize: '20px' }}
                                            /> Booking now</Button>
                                    </div>
                                    {/* <div className='text-center my-3'>
                                        <MDBBtn style={{ backgroundColor: '#333333' }} href='#'>
                                            <MDBIcon fas icon="plus" style={{ fontSize: '20px' }} /> Booking now
                                        </MDBBtn>
                                    </div> */}
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol >

                    );
                })
            }
        </MDBRow>
    )
}

export default HotTourItem;