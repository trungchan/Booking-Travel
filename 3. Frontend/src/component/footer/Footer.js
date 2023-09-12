import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import Link from 'antd/es/typography/Link';


export default function Footer() {
    return (
        <MDBFooter color='white' bgColor='dark'>
            <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
                <div className='me-5 d-none d-lg-block'>
                    <span>Get connected with us on social networks:</span>
                </div>

                <div>
                    <Link href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="facebook-f" />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="twitter" />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="google" />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="instagram" />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="linkedin" />
                    </Link>
                    <Link href='' className='me-4 text-reset'>
                        <MDBIcon fab icon="github" />
                    </Link>
                </div>
            </section>

            <section className=''>
                <MDBContainer className='text-center text-md-start mt-5'>
                    <MDBRow className='mt-3'>
                        <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>
                                <MDBIcon icon="gem" className="me-3" />
                                Company Booking Travels
                            </h6>
                            <p>
                                Booking Travels, chuyên cung cấp dịch vụ tour giá rẻ với nhiều ưu đãi shock!!!
                            </p>
                        </MDBCol>

                        <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Du lịch trong nước</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Nha Trang
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Đà Nẵng
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Phú Quốc
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Hạ Long
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Du lịch nước ngoài</h6>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Hàn Quốc
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Thái Lan
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Trung Quốc
                                </a>
                            </p>
                            <p>
                                <a href='#!' className='text-reset'>
                                    Nhật Bản
                                </a>
                            </p>
                        </MDBCol>

                        <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
                            <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
                            <p>
                                <MDBIcon icon="home" className="me-3" />
                                Trụ sở: 188 Hai Bà Trưng, TP Hà Nội
                            </p>
                            <p>
                                <MDBIcon icon="envelope" className="me-3" />
                                bookingtravel.com
                            </p>
                            <p>
                                <MDBIcon icon="phone" className="me-3" /> Tel: 088.888.888
                            </p>
                            <p>
                                <MDBIcon icon="print" className="me-3" />Tổng đài: 1900 8888
                            </p>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>

            <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                © 2022 Company, Inc
                <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>

                </a>
            </div>
        </MDBFooter>
    );
}