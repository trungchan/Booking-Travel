import React from 'react';
import { MDBCol, MDBContainer, MDBInput, MDBRow, MDBTable, MDBTableHead } from 'mdb-react-ui-kit';
import ResultDomesticItem from './ResultDomesticItem';
import '../AdminDashbroad.css'
import { Button, Input, Pagination, Select } from 'antd';
import { PlusOutlined, RetweetOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchTourAPI, actionSearchTourReDux } from '../../../redux/action/TourAction';
const { Search } = Input;

// import { Pagination } from 'antd';

export default function ResultDomestic(props) {
  const dispatch = useDispatch();
  const { onHandleOpen, onHandleDelete, onHandleEdit, currentPage, onHandleChangePage, onHandleRefresh, onChangeFilter, onChangeTour } = props;
  const { search, totalElements, size, findTour } = useSelector((state) => state.listTour);
  const pageSize = size ? size : 6;
  // const pagesize = size ? size : 5;
  // console.log("search",search);
  const onSearch = () => {
    dispatch(actionFetchTourAPI(search))
  };
  // Fillter:
  const typeTours = [
    {
      value: 'Domestic',
      label: 'Trong nước'
    },
    {
      value: 'Foreign',
      label: 'Ngoài nước'
    },
    {
      value: '',
      label: 'Tất cả'
    }
  ];


  // Tạo asc,desc
  const options = [
    {
      value: 'priceSale,asc',
      label: 'Giá Tour tăng'
    },
    {
      value: 'priceSale,desc',
      label: 'Giá Tour giảm'
    },
    {
      value: 'ratting,asc',
      label: 'Ratting tăng'
    },
    {
      value: 'ratting,desc',
      label: 'Ratting giảm'
    },
    {
      value: '',
      label: 'Tất cả'
    }
  ];

  const handleChange = (value) => {
    // console.log("value", value);
    onChangeFilter(value);
    // dispatch(actionFetchTourAPI(search, totalElements, value))
  };
  const handlleSelectTour = (findTour) => {
    console.log("valueee", findTour);
    onChangeTour(findTour);
  }

  return (
    // <ConfigProvider
    //   // cấu hình đổi boder với màu chữ của ant
    //   theme={{
    //     token: {
    //       // Seed Token
    //       colorPrimary: '#fff',
    //     },
    //   }}
    // >
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
        <MDBCol size={5} className='py-3'>

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
        <MDBCol size={3} className='py-3 px-10' >
          <Button className='btn-success' onClick={onHandleOpen} icon={<PlusOutlined />} size="large" >
            Add
          </Button>
          <span className='px-4'>
            <Button type="primary" icon={<RetweetOutlined />} size="large" onClick={onHandleRefresh} >
              Refresh
            </Button>
          </span>
        </MDBCol>
        <MDBCol size={2} className='py-3'>

          <Select className='select-w' defaultValue="Chọn tour" options={typeTours}
            onChange={(e) => handlleSelectTour(e)} />
        </MDBCol>
        <MDBCol size={1} className='py-3'>
          <span>
            <Select className='select-w' defaultValue="Filter" options={options}
              onChange={(e) => handleChange(e)} />
          </span>
        </MDBCol>

        {/* <MDBBtn className='m-1' href='#' color='success' onClick={onHandleOpen}>
            <MDBIcon fab icon='plus' className='px-2' />Thêm mới
          </MDBBtn> */}
        {/* <span className='px-4'>
            <MDBBtn className='m-1' color='danger' href='#'>
              <MDBIcon fas icon="trash-alt" className='px-2' />Delete
            </MDBBtn>
          </span> */}

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
        <ResultDomesticItem
          // onHandleOpen={onHandleOpen}
          onHandleDelete={onHandleDelete}
          onHandleEdit={onHandleEdit}
        />
        {/* Pagination */}



      </MDBTable>
      <Pagination
        className='p-4'
        total={totalElements}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        pageSize={pageSize}
        current={currentPage}
        onChange={onHandleChangePage}
      />
    </MDBContainer>
    // </ConfigProvider>
  );
}