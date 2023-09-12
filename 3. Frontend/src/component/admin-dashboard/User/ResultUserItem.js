import { DeleteOutlined, EditTwoTone } from '@ant-design/icons';
import { Button } from 'antd';
import { MDBTableBody } from 'mdb-react-ui-kit';
import React from 'react';
import { useSelector } from 'react-redux';

function ResultUserItem(props) {
    const { listUser } = useSelector((state) => state);
    console.log("listUser", listUser);
    return (
        <MDBTableBody>

            {
                listUser.map(user => {
                    return (
                        <tr>
                            <th scope='row'>{user.id}</th>
                            <td>{user.email}</td>
                            <td>{user.userName}</td>
                            <td>{user.phone}</td>
                            <td>{user.date}</td>
                            <td>{user.role}</td>
                            <td>
                                <Button className='btn-warning' icon={<EditTwoTone />}>
                                    Edit
                                </Button>
                            </td>
                            <td>
                                <Button type="primary" danger icon={<DeleteOutlined />} >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )
                })

            }

        </MDBTableBody>
    );
}

export default ResultUserItem;