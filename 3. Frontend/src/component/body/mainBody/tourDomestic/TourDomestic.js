import React from 'react';

import { 
    MDBCardTitle,
    MDBContainer,
   
} from 'mdb-react-ui-kit';
import '../tourDomestic/TourDomestic.css';
import TourDomesticItem from './TourDomesticItem';
import { Button } from 'antd';
import { useNavigate } from 'react-router';



export default function TourDomestic() {
    const navigation = useNavigate();
    return (
        <MDBContainer className='my-5'>
            <MDBCardTitle className="text-center">
                <p>Khám phá lịch sử - văn hóa - con người Việt Nam với</p>
                <h2>TOUR TRONG NƯỚC</h2>
            </MDBCardTitle>
            <TourDomesticItem/>
            {/* <MDBRow className='row-cols-1 row-cols-md-3 g-4 gx-5'>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/041.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardOverlay >
                            <MDBCardTitle className='d-flex justify-content-end' >
                                <span className='item-tour-ratting'>4.7 <MDBIcon fas icon="star" /></span>
                            </MDBCardTitle>
                        </MDBCardOverlay>
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                            <MDBRow>
                                <MDBCol>
                                    <div>Giá:  <MDBTypography tag='del'>1000000đ</MDBTypography></div>
                                </MDBCol>
                            </MDBRow>
                            <MDBRow >
                                <MDBCol className='my-1'>
                                    <MDBTypography variant='h4' className='font-price'> 1000000đ</MDBTypography>
                                </MDBCol>
                                <MDBCol className='d-flex justify-content-end'>
                                    <span className='item-discount '>14% Giảm </span>
                                </MDBCol>
                            </MDBRow>
                            <div className='text-center my-3'>
                                <MDBBtn style={{ backgroundColor: '#333333' }} href='#'>
                                    <MDBIcon fas icon="plus" style={{ fontSize: '20px' }} /> Booking now
                                </MDBBtn>
                            </div>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/042.webp'
                            // src='../assets/images/${item.image_url}' //abc.jpg
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/043.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
                <MDBCol>
                    <MDBCard>
                        <MDBCardImage
                            src='https://mdbootstrap.com/img/new/standard/city/044.webp'
                            alt='...'
                            position='top'
                        />
                        <MDBCardBody>
                            <MDBCardTitle>Card title</MDBCardTitle>
                            <MDBCardText>
                                This is a longer card with supporting text below as a natural lead-in to additional content.
                                This content is a little bit longer.
                            </MDBCardText>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow> */}
            <div className="text-center py-4" color='black'>
                <Button className='booking-button' onClick={() => { navigation("/search-page") }} >Xem tất cả </Button>
            </div>
        </MDBContainer>
    );
}
