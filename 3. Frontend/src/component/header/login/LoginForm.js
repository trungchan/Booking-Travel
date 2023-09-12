import React, { useState } from 'react';
import {
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBTabsPane,
    MDBTabsContent,
    MDBTabsLink,
    MDBTabsItem,
    MDBTabs
}
    from 'mdb-react-ui-kit';
import './LoginForm.css';

import LoginItem from './LoginItem';
import RegisterItem from './RegisterItem';
import { Navigate } from 'react-router';
// import { useNavigate } from 'react-router';
// import axios from 'axios';


function LoginForm(props) {
    const {onHandleCreateNewUser} = props;
    const [loginRegisterActive, setLoginRegisterActive] = useState('login');
    const handleLoginRegisterClick = (param) => {
        setLoginRegisterActive(param);
    };
// Nếu đã đăng nhập ko vào được trang login nữa
    const token = localStorage.getItem("token")
    if (token) {
        return <Navigate to="/" />
    };
    
    return (
        <MDBContainer fluid className='login-page'>
            <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                <MDBCol col='12'>

                    <MDBCard className=' my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
                        <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                            <div className='login-form' >
                                <MDBTabs pills justify className='mb-3'>
                                    <MDBTabsItem>
                                        <MDBTabsLink
                                            onClick={() => handleLoginRegisterClick('login')}
                                            active={loginRegisterActive === 'login'
                                            }
                                        >
                                            <div className='title-text' >Login</div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                    <MDBTabsItem>
                                        <MDBTabsLink
                                            onClick={() => handleLoginRegisterClick('register')}
                                            active={loginRegisterActive === 'register'}
                                        >
                                            <div className='title-text'>Register</div>
                                        </MDBTabsLink>
                                    </MDBTabsItem>
                                </MDBTabs>
                                <MDBTabsContent>
                                    {/* LOGIN */}
                                    <MDBTabsPane show={loginRegisterActive === 'login'}>
                                        <LoginItem />
                                    </MDBTabsPane>
                                    {/* REGISTER */}
                                    <MDBTabsPane show={loginRegisterActive === 'register'}>
                                        <RegisterItem onHandleCreateNewUser={onHandleCreateNewUser}/>
                                    </MDBTabsPane>
                                </MDBTabsContent>
                            </div>
                        </MDBCardBody>
                    </MDBCard>

                </MDBCol>
            </MDBRow>

        </MDBContainer>
    );
}

export default LoginForm;