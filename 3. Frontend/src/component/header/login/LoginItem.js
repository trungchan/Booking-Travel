import {  Button } from 'antd';
// import axios from 'axios';
import { MDBBtn, MDBCheckbox, MDBCol, MDBIcon, MDBInput, MDBRow } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';

// import axios from 'axios';
import { loginRequest } from "../../../api/UserAPI";

function LoginItem(props) {
    // Khai báo các state để lưu trữ các ô nhập liệu
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    // console.log("user::", userName);
    // console.log("password", password);
    // Khai báo Hook useNavigate
    const navigate = useNavigate();

    const loginBody = { userName, password };
    const handleLogin = () => {
        // dispatch(actionCheckUserAPI(loginRequest))
        // axios.post('http://localhost:8080/api/v1/auth/login', loginRequest)
        //     .then((res) => {
        loginRequest(loginBody).then((res) => {
            // console.log("res::", res);
            const token = res.token;
            const role = res.role;
            const userID = res.id;
            // Lưu token vào localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("role", role);
            localStorage.setItem("id", userID);
            // <Alert
            //     message="Success Tips"
            //     description="Detailed description and advice about successful copywriting."
            //     type="success"
            //     showIcon
            // />
            alert("Đăng nhập thành công");
            

            navigate("/");
        }).catch((error) => {
            // Xử lý lỗi nếu có
            console.error(error);
        });
    }
    return (
        <form>
            <div className='text-center mb-3'>
                <p className='title-text p-2'>Sign in with:</p>
                <MDBBtn floating color="secondary" className='mx-1'>
                    <MDBIcon fab icon='facebook-f' />
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1'>
                    <MDBIcon fab icon='google' />
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1'>
                    <MDBIcon fab icon='twitter' />
                </MDBBtn>

                <MDBBtn floating color="secondary" className='mx-1'>
                    <MDBIcon fab icon='github' />
                </MDBBtn>
            </div>
            <p className='title-text p-2'>or:</p>
            <MDBInput className='mb-4' id='form7Example1' placeholder='Username' value={userName}
                onChange={(e) => setUserName(e.target.value)} />
            <MDBInput className='mb-4' type='password' id='form7Example2' placeholder='Password' value={password}
                onChange={(e) => setPassword(e.target.value)} />

            <MDBRow className='mb-4 p-2'>
                <MDBCol className='d-flex justify-content-center'>
                    <MDBCheckbox id='form7Example3' label='Remember me' defaultChecked />
                </MDBCol>
                <MDBCol>
                    <a href='#!'>Forgot password?</a>
                </MDBCol>
            </MDBRow>

            <div className="d-grid p-2 ">
                <Button className='button-color' onClick={handleLogin}>Sign in</Button>
            </div>
        </form>
    );
}

export default LoginItem;