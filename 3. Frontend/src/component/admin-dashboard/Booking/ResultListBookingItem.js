import { DeleteOutlined, EditTwoTone, ExclamationCircleFilled } from '@ant-design/icons';
import { Button } from 'antd';
import confirm from 'antd/es/modal/confirm';
import { MDBTableBody } from 'mdb-react-ui-kit';
import React from 'react';
import { useSelector } from 'react-redux';

function ResultListBookingItem(props) {
    const { onHandleDeleteBK, onHandleEditBK } = props;
    const { content } = useSelector((state) => state.listBooking);
    let items = "";
    const handleDelete = (id) => {
        confirm({
            title: 'Bạn có muốn xóa tour này?',
            icon: <ExclamationCircleFilled />,
            onOk() {
                onHandleDeleteBK(id);
                console.log('OK');
            },
            onCancel() {
                console.log('Cancel');
            },
        });
    };
    const handleEdit = (bookingUD) => {
        onHandleEditBK(bookingUD);
    }
    if (content) {
        items = content.map(booking => {
            const status = booking.status;
            return (
                <tr >
                    <th scope='row'>{booking.id}</th>
                    <td>{booking.userId}</td>
                    <td>{booking.toursName}</td>
                    <td>{booking.guest}</td>
                    <td>{booking.bookingDate}</td>
                    <td>{booking.total_price.toLocaleString('en-US')}đ</td>
                    <td>
                        {/* {status} */}
                        {status === 0 && "Unpaid"}
                        {status === 1 && "Paid"}
                        {status === 2 && "Cancel"}
                    </td>
                    <td>
                        <Button className='btn-warning' icon={<EditTwoTone />}
                            onClick={() => handleEdit(booking)}>
                            Edit
                        </Button>
                    </td>
                    <td>
                        <Button type="primary" danger icon={<DeleteOutlined />}
                            onClick={() => handleDelete(booking.id)}>
                            Delete
                        </Button>
                    </td>
                </tr>
            )
        });
    };
    return (
        <MDBTableBody>
            {items}
        </MDBTableBody>
    );
}

export default ResultListBookingItem;