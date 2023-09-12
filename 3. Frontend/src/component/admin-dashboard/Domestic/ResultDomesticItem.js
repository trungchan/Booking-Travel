import { DeleteOutlined, EditTwoTone, ExclamationCircleFilled } from '@ant-design/icons';
import { Button, ConfigProvider, Modal } from 'antd';
import { MDBCardImage, MDBIcon, MDBTableBody } from 'mdb-react-ui-kit';
import React from 'react';
import { useSelector } from 'react-redux';
const { confirm } = Modal;

function ResultDomesticItem(props) {
    const { onHandleDelete, onHandleEdit } = props;
    const { content } = useSelector((state) => state.listTour)
    const items = content ? content : [];
    // tạo các nút
    const handleDelete = async (id) => {
        await confirm({
            title: 'Bạn có muốn xóa tour này?',
            icon: <ExclamationCircleFilled />,

            onOk() {
                onHandleDelete(id);
                console.log('OK');

            },
            onCancel() {
                console.log('Cancel');
            },

        });

    };
    const handleEdit = (tourUD) => {
        onHandleEdit(tourUD);
    }
    return (
        <ConfigProvider
            // cấu hình đổi boder với màu chữ của ant
            theme={{
                token: {
                    // Seed Token
                    colorPrimary: '#fff',
                },
            }}
        >
            <MDBTableBody>
                {
                    items.map((tour, index) => {
                        // console.log("img", tour.imageUrl);
                        return (
                            <tr className='tab-tr-all'>
                                <th scope='row'>{index + 1}</th>
                                <td>{tour.departuresName}</td>
                                <td>{tour.destinationsName}</td>
                                <td>{tour.tourName}</td>
                                <td>
                                    <MDBCardImage
                                        className='tab-h4'
                                        src={tour.imageUrl}
                                        alt='...'
                                        position='top'
                                    />
                                </td>
                                <td>{tour.ratting} <MDBIcon fas icon="star" style={{ color: "#fdc432" }} /></td>
                                <td>{tour.arrival}</td>
                                <td>{tour.leaving}</td>
                                <td>{tour.description}</td>
                                <td>{tour.price.toLocaleString('en-US')}đ</td>
                                <td>{tour.priceSale.toLocaleString('en-US')}đ</td>
                                <td>
                                    <Button className='btn-warning' icon={<EditTwoTone />} onClick={() => handleEdit(tour)}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button type="primary" danger icon={<DeleteOutlined />} onClick={() => handleDelete(tour.id)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        )
                    })
                }
            </MDBTableBody>
        </ConfigProvider>
    )
}

export default ResultDomesticItem;