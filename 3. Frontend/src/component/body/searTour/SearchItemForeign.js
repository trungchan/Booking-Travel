import React from 'react';
import { Button, Col, DatePicker, Row, Select } from 'antd';
import '../searTour/SearchTour.css';
import { EnvironmentOutlined, CalendarOutlined, CarryOutOutlined, SearchOutlined, SwapOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { actionFetchTourAPI, actionSearchDestinationReDux } from '../../../redux/action/TourAction';


const SearchItemForeign = () => {
    const onChange = (date, dateString) => {
        console.log(date, dateString);
    };

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const stateRedux = useSelector((state) => state);
    const listDeparture = stateRedux.listDeparture;
    const listDestinationForeign = stateRedux.listDestination;
    const search = stateRedux.listTour.searchDestination;
    // console.log("list;;", listDeparture);
    // console.log("list domestic::", listDestinationForeign);

    const searchName = listDestinationForeign.find(des => des.id === search);
    // console.log("search", searchName);
    // Xử lý handleClick
    const handleClick = async () => {
        await dispatch(actionFetchTourAPI(searchName.name));
        await navigate("/search-page");
    }


    // Lấy điểm đi
    let departureItems = "";
    if (listDeparture) {
        departureItems = listDeparture.map((departure) => {
            return (
                {
                    value: departure.id,
                    label: departure.name
                }
            );
        })
    };
    // Lấy điểm đến trong nước
    let destinationItems = "";
    if (listDestinationForeign) {
        destinationItems = listDestinationForeign
            .filter(des => des.status === "Foreign")
            .map(des => ({
                value: des.id,
                label: des.name
            }));
    }
    // console.log("destinationItems::", destinationItems);


    return (
        <>
            <Row className='my-5'
                gutter={{
                    xs: 8,
                    sm: 16,
                    md: 24,
                    lg: 32,
                }}
            >
                <Col className="gutter-row " span={5}>
                    <div className='input-search-location'>
                        <div className='d-inline-flex align-items-center'>
                            <div className='p-2'>
                                <EnvironmentOutlined style={{ fontSize: "20px" }} />
                            </div>
                            <div className='flex-grow-1'>
                                <p className='mb-1 py-1 px-3'>Điểm đi</p>
                                <Select defaultValue="Chọn điểm đi" options={departureItems} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row " span={2}>
                    <SwapOutlined style={{ fontSize: "40px" }} className='input-arrow w-100 h-100' />
                </Col>
                <Col className="gutter-row" span={5}>
                    <div className='input-search-location'>
                        <div className='d-inline-flex align-items-center'>
                            <div className='p-2'>
                                <EnvironmentOutlined style={{ fontSize: "20px" }} />
                            </div>
                            <div className='flex-grow-1'>
                                <p className='mb-1 py-1 px-3'>Điểm đến</p>
                                <Select className='select-w' defaultValue="Chọn điểm đến" options={destinationItems}
                                    onChange={(e) => { dispatch(actionSearchDestinationReDux(e)) }} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div className='input-search-location'>
                        <div className='d-inline-flex align-items-center'>
                            <div className='p-2'>
                                <CalendarOutlined style={{ fontSize: "20px" }} />
                            </div>
                            <div className='flex-grow-1'>
                                <p className='mb-1 py-1 px-3'>Ngày đi</p>
                                <DatePicker onChange={onChange} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={5}>
                    <div className='input-search-location'>
                        <div className='d-inline-flex align-items-center'>
                            <div className='p-2'>
                                <CarryOutOutlined style={{ fontSize: "20px" }} />
                            </div>
                            <div className='flex-grow-1'>
                                <p className='mb-1 py-1 px-3'>Ngày về</p>
                                <DatePicker onChange={onChange} />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col className="gutter-row" span={2}>
                    <Button className='w-100 h-100' style={{ backgroundColor: "#002f65" }} onClick={handleClick}>
                        <SearchOutlined className='search-item' style={{ fontSize: "40px" }} />
                    </Button>
                </Col>
            </Row>
        </>)
};
export default SearchItemForeign;
