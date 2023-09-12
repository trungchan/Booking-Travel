import React from 'react';
import Navigation from '../component/header/Navigation';
import Footer from '../component/footer/Footer';
import LoginForm from '../component/header/login/LoginForm';
import { useDispatch } from 'react-redux';
import { actionCreateUserAPI } from '../redux/action/UserAction';
import { useNavigate } from 'react-router';


function LoginContainer(props) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const onHandleCreateNewUser = (userNew) => {
        console.log("userNew..", userNew);
        const newUserAPI = {
            ...userNew
        };
        dispatch(actionCreateUserAPI(newUserAPI));
        // alert("Tạo mới thành công");
        navigate("/login");
    }
    return (
        <div>
            <Navigation />
            <LoginForm
                onHandleCreateNewUser={onHandleCreateNewUser} />
            <Footer />
        </div>
    );
}

export default LoginContainer;
