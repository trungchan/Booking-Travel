import React from 'react';
import { MDBCol, MDBContainer, MDBInput, MDBRow, MDBTable, MDBTableHead } from 'mdb-react-ui-kit';
import ResultListBookingItem from './ResultListBookingItem';
import { Button, Input, Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchBookingAPI, actionSearchBookingReDux } from '../../../redux/action/BookingAction';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
const { Search } = Input;
export default function ResultListBooking(props) {
    const dispatch = useDispatch();
    const { onHandleCreateOpen, onHandleDeleteBK, onHandleEditBK, currentPage, onHandleChangePage } = props;
    const { search, totalElements, size } = useSelector((state) => state.listBooking);
    console.log("sear,,", search);
    const onSearch = () => {
        dispatch(actionFetchBookingAPI(search))
    };


    return (
        <MDBContainer>
            <MDBRow className='gx-5'>
                <MDBCol size={3}>
                    <div>Min booking date</div>
                    <MDBInput id='form1' type='date' placeholder='Min booking date' />
                </MDBCol>
                <MDBCol size={3}>
                    <div>Max booking date</div>
                    <MDBInput id='form1' type='date' placeholder='Max booking date' />
                </MDBCol>
                <MDBCol size={3}>
                    <div>Max total price</div>
                    <MDBInput id='form1' type='text' placeholder='Max total price' />
                </MDBCol>
                <MDBCol size={3}>
                    <div>Min total price</div>
                    <MDBInput id='form1' type='text' placeholder='Min total price' />
                </MDBCol>
            </MDBRow>
            <MDBRow className='gx-5'>
                <MDBCol size={6} className='py-3'>
                    <Search
                        placeholder="input search text"
                        allowClear
                        size="large"
                        value={search}
                        onChange={(e) => dispatch(actionSearchBookingReDux(e.target.value))}
                        onSearch={onSearch}
                        enterButton
                    />

                </MDBCol>
                <MDBCol size={6} className='py-3 px-10' >
                    <Button className='btn-success' onClick={onHandleCreateOpen} icon={<PlusOutlined />} size="large" >
                        Thêm mới
                    </Button>
                    <span className='px-4'>
                        <Button type="primary" danger icon={<DeleteOutlined />} size="large" >
                            Delete
                        </Button>
                    </span>
                </MDBCol>
            </MDBRow>
            <MDBTable>
                <MDBTableHead dark>
                    <tr>
                        <th scope='col'>#</th>
                        <th scope='col'>UserID</th>
                        <th scope='col'>Tour name</th>
                        <th scope='col'>Guest</th>
                        <th scope='col'>Booking date</th>
                        <th scope='col'>Total price</th>
                        <th scope='col'>Status</th>
                        <th scope='col'>Edit</th>
                        <th scope='col'>Delete</th>
                    </tr>
                </MDBTableHead>
                {/* Body */}
                <ResultListBookingItem
                    onHandleDeleteBK={onHandleDeleteBK}
                    onHandleEditBK={onHandleEditBK} />


            </MDBTable>
            <Pagination
                className='p-4'
                total={totalElements}
                showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
                pageSize={size}
                current={currentPage}
                onChange={onHandleChangePage}
            />
        </MDBContainer>
    );
}