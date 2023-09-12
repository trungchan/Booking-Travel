import React, { useEffect } from 'react';
import Navigation from '../component/header/Navigation';
import Slider from '../component/slider/Slider';
import HotTour from '../component/body/mainBody/hotTour/HotTour';
import TourDomestic from '../component/body/mainBody/tourDomestic/TourDomestic';
import TourForeign from '../component/body/mainBody/tourForeign/TourForeign';
import Footer from '../component/footer/Footer';
import SearchTour from '../component/body/searTour/SearchTour'
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchListDeparturesAPI } from '../redux/action/DeparturesAction';
import { actionFetchListDestinationsAPI } from '../redux/action/DestinationsAction';
import { actionFetchTourAPI } from '../redux/action/TourAction'
import { showFormAction } from '../redux/action/FormAction';
import { useNavigate } from 'react-router';
import '../component/header/login/LoginForm.css'
// import { useLocation, useNavigate } from 'react-router';


function HomepageContainer(props) {
    const dispatch = useDispatch();
    // const { pathname } = useLocation();
    // console.log('pathname :::', pathname);
    const { totalElements } = useSelector((state) => state.listTour);
    const showLogin = () => {
        dispatch(showFormAction());
    };
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(actionFetchListDeparturesAPI());
        dispatch(actionFetchListDestinationsAPI());
        dispatch(actionFetchTourAPI("", totalElements))
    }, [dispatch, totalElements]);
    // useEffect(() => {
    //     console.log("Updated content:", content);
    // }, [content]);

    // useEffect(() => {
    //     if (pathname === "/login"){

    //     }
    // }, [])
    // Nếu chưa đăng nhập thì yêu cầu về trang login để đăng nhập hoặc đăng kí tài khoản
    const token = localStorage.getItem("token")
    if (!token) {
        return navigate("/login")
    };
    return (
        <div>
            <Navigation className="navigation" showLogin={showLogin} />
            <Slider />
            <SearchTour />
            <HotTour />
            <TourDomestic />
            <TourForeign />
            <Footer />
        </div>
    );
}

export default HomepageContainer;