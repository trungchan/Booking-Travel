import { Button } from 'antd';
import { MDBCard, MDBCardBody, MDBCardImage, MDBCardOverlay, MDBCardText, MDBCardTitle, MDBCol, MDBIcon, MDBRow, MDBTypography } from 'mdb-react-ui-kit';
import React from 'react';
import { useSelector } from 'react-redux';
import { ShoppingCartOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router';

function SearchPageItem(props) {
    const navigate = useNavigate();
    const { content } = useSelector((state) => state.listTour);
    // console.log("list", content);
    const tourItem = content ? content : [];
   
    return (
        // <MDBRow className='row-cols-1 row-cols-md-2 g-4 justify-content-end' >
        <div className='px-4 '>
            {
                tourItem.map(tour => {
                    return (
                        <MDBCard className='card-item py-2'  >
                            <MDBRow >
                                <MDBCol md='5'>
                                    <MDBCardImage src={tour.imageUrl} alt='...' fluid className='img-size' />
                                    <MDBCardOverlay >
                                        <MDBCardTitle className='d-flex justify-content-start' >
                                            <span className='item-tour-ratting'>{tour.ratting} <MDBIcon fas icon="star" /></span>
                                        </MDBCardTitle>
                                    </MDBCardOverlay>
                                </MDBCol>
                                <MDBCol md='7'>
                                    <MDBCardBody>
                                        <MDBCardTitle>{tour.tourName}</MDBCardTitle>
                                        <MDBCardText className='description-text'>
                                            {tour.description}
                                        </MDBCardText>
                                        <MDBRow className='py-2'>
                                            <MDBCol >
                                                <div>Giá:  <MDBTypography tag='del'>{tour.price.toLocaleString('en-US')}đ</MDBTypography></div>
                                            </MDBCol>
                                        </MDBRow>
                                        <MDBRow >
                                            <MDBCol className='my-1'>
                                                <MDBTypography variant='h5' className='font-price'> {tour.priceSale.toLocaleString('en-US')}đ</MDBTypography>
                                            </MDBCol>
                                            <MDBCol className='d-flex justify-content-end'>
                                                <span className='item-discount '>{tour.discount}% Giảm</span>
                                            </MDBCol>
                                        </MDBRow>
                                        <div className="text-center py-2" color='black'>
                                            <Button className='booking-button'
                                                onClick={() => {
                                                    // console.log("12")
                                                    // dispatch(actionGetTourRedux(tour.id))
                                                    navigate(`/booking/${tour.id}`)
                                                }}
                                            > <ShoppingCartOutlined style={{ fontSize: '20px' }} /> Booking now</Button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>


                    )
                })

            }
        </div>
    );
}

export default SearchPageItem;