import React from 'react';
import { MDBCol, MDBContainer, MDBInput, MDBRow, MDBTable, MDBTableHead } from 'mdb-react-ui-kit';
import '../AdminDashbroad.css'
import { Button, Input, Pagination } from 'antd';
import { DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchTourAPI, actionSearchTourReDux } from '../../../redux/action/TourAction';
import ResultForeignItem from './ResultForeignItem';
const { Search } = Input;

// import { Pagination } from 'antd';

export default function ResultForeign(props) {
  const dispatch = useDispatch();
  const { onHandleOpen, onHandleDelete, onHandleEdit, currentPage, onHandleChangePage } = props;
  const { search, totalElements, size } = useSelector((state) => state.listTour);

  // console.log("search",search);
  const onSearch = () => {
    dispatch(actionFetchTourAPI(search))
  };

  return (

    <MDBContainer>
      <MDBRow className='gx-5'>
        <MDBCol size={3}>
          <div>Min price</div>
          <MDBInput id='form1' type='text' placeholder='Min price' />
        </MDBCol>
        <MDBCol size={3}>
          <div>Max price</div>
          <MDBInput id='form1' type='text' placeholder='Max price' />
        </MDBCol>
        <MDBCol size={3}>
          <div>Max discount</div>
          <MDBInput id='form1' type='text' placeholder='Max discount' />
        </MDBCol>
        <MDBCol size={3}>
          <div>Min disCount</div>
          <MDBInput id='form1' type='text' placeholder='Min disCount' />
        </MDBCol>
        <MDBCol size={3} className='py-3'>
          <div>Min ratting</div>
          <MDBInput id='form1' type='text' placeholder='Min ratting' />
        </MDBCol>
        <MDBCol size={3} className='py-3'>
          <div>Max ratting</div>
          <MDBInput id='form1' type='text' placeholder='Max ratting' />
        </MDBCol>
      </MDBRow>
      <MDBRow className='gx-5'>
        <MDBCol size={6} className='py-3'>

          <Search
            placeholder="input search text"
            allowClear
            size="large"
            value={search}
            onChange={(e) => dispatch(actionSearchTourReDux(e.target.value))}
            onSearch={onSearch}
            enterButton
          />

        </MDBCol>
        <MDBCol size={6} className='py-3 px-10' >
          <Button className='btn-success' onClick={onHandleOpen} icon={<PlusOutlined />} size="large" >
            Thêm mới
          </Button>
          <span className='px-4'>
            <Button type="primary" danger icon={<DeleteOutlined />} size="large" >
              Delete
            </Button>
          </span>

          {/* <MDBBtn className='m-1' href='#' color='success' onClick={onHandleOpen}>
            <MDBIcon fab icon='plus' className='px-2' />Thêm mới
          </MDBBtn> */}
          {/* <span className='px-4'>
            <MDBBtn className='m-1' color='danger' href='#'>
              <MDBIcon fas icon="trash-alt" className='px-2' />Delete
            </MDBBtn>
          </span> */}
        </MDBCol>
      </MDBRow>
      <MDBTable className='table-setting'>
        <MDBTableHead dark>
          <tr>
            <th scope='col'>#</th>
            <th scope='col' className='tab-h1'>Departure</th>
            <th scope='col'>Destination</th>
            <th scope='col' className='tab-h1'>TourName</th>
            <th scope='col' className='tab-h2'>ImageTour</th>
            <th scope='col'>Ratting</th>
            <th scope='col'>Arrival</th>
            <th scope='col'>Leaving</th>
            <th scope='col' className='tab-h3'>Description</th>
            <th scope='col'>Price</th>
            <th scope='col'>PriceSale</th>
            <th scope='col'>Edit</th>
            <th scope='col'>Delete</th>
          </tr>
        </MDBTableHead>
        {/* Body */}
        <ResultForeignItem
          // onHandleOpen={onHandleOpen}
          onHandleDelete={onHandleDelete}
          onHandleEdit={onHandleEdit}
        />
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
    // </ConfigProvider>
  );
}