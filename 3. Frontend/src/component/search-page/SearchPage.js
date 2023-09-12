import React, { useEffect } from 'react';
import {
    MDBRow,
    MDBCol,
    MDBContainer,
    MDBIcon,
} from 'mdb-react-ui-kit';
import WebFont from 'webfontloader';
import './SearchPage.css';
import { Button, DatePicker, Row, Select } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import SearchPageItem from './SearchPageItem';
import { useSelector } from 'react-redux';

export default function SearchPage() {
    const stateRedux = useSelector((state) => state);
    const listDeparture = stateRedux.listDeparture;
    const listDestinationDomestics = stateRedux.listDestination;
    // import phông chữ
    useEffect(() => {
        WebFont.load({
            google: {
                families: ['Nunito', 'Roboto']
            }
        })
    }, []);
    const onChangeDate = (date, dateString) => {
        console.log(date, dateString);
    }
    const { content } = useSelector((state) => state.listTour);
    // console.log("search", searchName[0].name);
    // Xử lý lấy dữ liệu từ redux
    let departureItems = "";
    if (listDeparture) {
        departureItems = listDeparture.map(dep => {
            return (
                {
                    value: dep.id,
                    label: dep.name
                }
            )
        });
    };

    let destinationItems = "";
    if (listDestinationDomestics) {
        destinationItems = listDestinationDomestics
            // .filter(des => des.status === "Domestic")
            .map(des => {
                return (
                    {
                        value: des.id,
                        label: des.name
                    }
                )
            });
    };
    return (

        <MDBContainer className='d-flex p-4 my-4' style={{ fontFamily: "Roboto" }}>
            <MDBRow className='gx-3'>
                <MDBCol size={3} className='checkout-body-right'>
                    <form >
                        <Row className="header-bg p-2">
                            <MDBIcon fas icon="search" style={{ fontSize: '20px' }} className='px-2' />
                            <h5 className='my-1'>KẾT QUẢ TÌM KIẾM</h5>
                        </Row>


                        <Row className='py-2 text-font-all'>
                            <span className='px-2' >Điểm đi</span>
                            <Select className='input-form ' defaultValue="Chọn điểm đi" options={departureItems} />
                        </Row>
                        <Row className='text-font-all'>
                            <span className='px-2' >Điểm đến</span>
                            <Select className='input-form ' defaultValue="Chọn điểm đến" options={destinationItems} />
                        </Row>
                        <Row className='text-font-all row' >
                            <span className='px-3'>Ngày đi </span>
                            <div><DatePicker className='w-100' onChange={onChangeDate} /></div>
                        </Row>
                        <Row className='text-font-all row' >
                            <span className='px-3'>Ngày về </span>
                            <div><DatePicker className='w-100' onChange={onChangeDate} /></div>
                        </Row>
                        <div className="d-grid py-4" color='black'>

                            <Button className='checkout-item' > <SearchOutlined style={{ fontSize: '25px' }} /> Tìm kiếm</Button>
                        </div>
                    </form>


                </MDBCol>
                <MDBCol size={8} className=' px-3 '>
                    <MDBRow className=''>
                        <Row className="header-bg p-2 m-4">
                            <MDBIcon fas icon="shopping-cart" style={{ fontSize: '20px' }} className='px-2' />
                            <h5 className='my-1'>THÔNG TIN VỀ TOUR</h5>
                        </Row>
                        <MDBRow className=''>
                            {content ? <SearchPageItem /> : <h4>Không có tour cần tìm kiếm</h4>}

                        </MDBRow>
                        {/* <MDBRow className='row-cols-1 row-cols-md-2 g-4 justify-content-end' > */}
                        {/* <MDBCol>
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
                                        <div className="text-center py-4" color='black'>
                                            <Button className='booking-button' > <ShoppingCartOutlined style={{ fontSize: '20px' }} /> Booking now</Button>
                                        </div>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>

                        {/* </MDBRow> */}
                    </MDBRow>
                </MDBCol>
            </MDBRow>
        </MDBContainer >
    );
}