import { Button } from 'antd';
import { MDBBtn, MDBCheckbox, MDBIcon, MDBInput } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useNavigate } from 'react-router';

function RegisterItem(props) {
    const navigate = useNavigate();
    const { onHandleCreateNewUser } = props;
    const [email, setEmail] = useState("")
    const [userName, setUserName] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [cfmPassword, setCfmPassword] = useState("");
    const handleRegister = () => {
        if (password !== cfmPassword) {
            alert("Pass word không trùng khớp!!")
            return;
        }
        const newUser = {
            email: email,
            userName: userName,
            phone: phone,
            password: password
        }
        // console.log("new", newUser);
        onHandleCreateNewUser(newUser);
        resetForm();
        alert("Tạo mới thành công");
        navigate("/login");
    }
    const resetForm = () => {
        setEmail("");
        setPassword("");
        setPhone("");
        setCfmPassword("");
        setUserName("");
    }


    return (
        <form>
            <div className='text-center mb-3'>
                <div className='title-text p-3'>Sign in with:</div>

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

            <p className='text-center'>or:</p>

            <MDBInput className='mb-4' type='email' id='form8Example1' placeholder='Email'
                value={email} onChange={(e) => { setEmail(e.target.value) }} />
            <MDBInput className='mb-4' id='form8Example2' placeholder='Username'
                value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            <MDBInput className='mb-4' type='number' id='form8Example3' placeholder='Phone'
                value={phone} onChange={(e) => { setPhone(e.target.value) }} />
            <MDBInput className='mb-4' type='password' id='form8Example4' placeholder='Password'
                value={password} onChange={(e) => { setPassword(e.target.value) }} />
            <MDBInput className='mb-4' type='password' id='form8Example5' placeholder='Confirmation Password'
                value={cfmPassword} onChange={(e) => { setCfmPassword(e.target.value) }} />

            <MDBCheckbox
                wrapperClass='d-flex justify-content-center mb-4'
                id='form8Example6'
                label='I have read and agree to the terms'
                defaultChecked
            />
            <div className="d-grid ">
                <Button className='button-color' onClick={handleRegister}>Register</Button>
            </div>
        </form>
    );
}

export default RegisterItem;