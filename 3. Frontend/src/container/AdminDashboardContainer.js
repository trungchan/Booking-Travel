import React, { useEffect, useState } from 'react';
import SlideNav from '../component/admin-dashboard/SideNav';
import Navigation from '../component/header/Navigation';
import Footer from '../component/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { actionAddTourAPI, actionDeleteTourAPI, actionFetchTourAPI, actionUpdateTourAPI } from '../redux/action/TourAction';
import { closeFormAction, showFormAction } from '../redux/action/FormAction';
import CreateModalDomestic from '../component/admin-dashboard/Domestic/CreateModalDomestic';
import { actionFetchListDeparturesAPI } from '../redux/action/DeparturesAction';
import { actionFetchListDestinationsAPI } from '../redux/action/DestinationsAction';
import { useNavigate } from 'react-router';
import { actionFetchTourUpdateInfoRedux, actionShowFormUpdateRedux } from '../redux/action/FormUpdateAction';
import UpdateModalDomestic from '../component/admin-dashboard/Domestic/UpdateModalDomestic';
import dayjs from 'dayjs';
import { actionDeleteBookingAPI, actionFetchBookingAPI } from '../redux/action/BookingAction';
import { actionCloseFormCreateRedux, actionShowBookingUpdateRedux, actionShowFormCreateRedux } from '../redux/action/FormUpdateBookingAction';
import CreateModalBooking from '../component/admin-dashboard/Booking/CreateModalBooking';
import UpdateModalBooking from '../component/admin-dashboard/Booking/UpdateModalBooking';
import { actionFetchListUserAPI } from '../redux/action/UserAction';



function AdminDashboardContainer(props) {
    const state = useSelector((state) => state)
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { totalElements, search, size, minPrice, maxPrice, minDiscount,
        maxDiscount, minRatting, maxRatting, findTour } = useSelector((state) => state.listTour);
    const totalElementsBooking = state.listBooking.totalElements;
    // console.log("total", totalElementsBooking);
    const searchBooking = state.listBooking.search;
    // console.log("total::",totalElements);
    const [currentPage, setCurrentPage] = useState(1);

    const onHandleChangePage = (page) => {
        setCurrentPage(page);
    };

    // Cho thằng Domestic TOUR
    const onHandleOpen = () => {
        dispatch(showFormAction());
    };
    const onHandleClose = () => {
        dispatch(closeFormAction());
    }
    const onHandleRefresh = () => {
        dispatch(actionFetchTourAPI("", totalElements))
    }


    // Cho thằng Booking
    const onHandleCreateOpen = () => {
        dispatch(actionShowFormCreateRedux());
    }
    const onHandleCreateClose = () => {
        dispatch(actionCloseFormCreateRedux());
    }




    // Xử lý TOUR

    const onHandleCreateNewTour = (newTour) => {
        console.log("newtour:::", newTour);
        const newTourAPI = {
            ...newTour
        }
        dispatch(actionAddTourAPI(newTourAPI));
        alert("Tạo mới thành công!!");
        dispatch(actionFetchTourAPI("", totalElements));
        dispatch(closeFormAction());

    };

    const onHandleDelete = (id) => {
        dispatch(actionDeleteTourAPI(id));
    }
    const onHandleEdit = (tourUD) => {
        // Mở form
        dispatch(actionShowFormUpdateRedux());
        //  Lấy thông tin cần update từ Redux
        dispatch(actionFetchTourUpdateInfoRedux(tourUD));
    }

    let onHandleUpdate = async (tourUD) => {
        // Lấy ID của Tour Cần update từ Redux
        let id_Update = state.tourFormUpdate.tourUpdateInfo.id;
        let tourUpdateAPI = {
            id: id_Update,
            arrival: dayjs().format("YYYY-MM-DD"),
            departuresId: tourUD.departuresId,
            destinationsId: tourUD.destinationsId,
            ...tourUD,
        };
        // console.log("update:::::", tourUpdateAPI);
        // Gọi API để Update 
        await dispatch(actionUpdateTourAPI(tourUpdateAPI));
        await dispatch(actionShowFormUpdateRedux());
        await alert("Update thành công")
        await dispatch(actionFetchTourAPI("", totalElements));
    };
    // sort tour
    const onChangeFilter = (sort) => {
        console.log("sort", sort);
        dispatch(actionFetchTourAPI(search, totalElements, sort))
    }

    // filter type Tour
    const onChangeTour = (findTour) => {
        console.log("sort", findTour);
        dispatch(actionFetchTourAPI(search, totalElements, "", "", "", "", "", "", "", "", findTour))
    }



    // Xử lý Booking
    const onHandleDeleteBK = (id) => {
        dispatch(actionDeleteBookingAPI(id));
    };
    const onHandleEditBK = (bookingUD) => {
        // Mở form
        dispatch(actionShowBookingUpdateRedux());
        //  Lấy thông tin cần update từ Redux
        dispatch(actionShowBookingUpdateRedux(bookingUD));
    };

    useEffect(() => {
        dispatch(actionFetchListDeparturesAPI());
        dispatch(actionFetchListDestinationsAPI());
        dispatch(actionFetchListUserAPI())
    }, []);

    useEffect(() => {
        dispatch(actionFetchTourAPI(search, 6, "", currentPage, minRatting, maxRatting
            , minDiscount, maxDiscount, maxPrice, minPrice, findTour))
    }, [dispatch, search, currentPage, minRatting
        , maxRatting, minDiscount, maxDiscount, minPrice, maxPrice, findTour]);

    useEffect(() => {
        dispatch(actionFetchBookingAPI(searchBooking, 6, "", currentPage))
    }, [dispatch, searchBooking, currentPage]);

    // Nếu chưa đăng nhập và user không phải là admin

    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");
    if (!token) {
        return navigate("/login")
    };
    if (role !== "ADMIN") {
        return navigate("/");
    }
    return (
        <div>
            <Navigation />
            <SlideNav
                onHandleOpen={onHandleOpen}
                onHandleDelete={onHandleDelete}
                onHandleEdit={onHandleEdit}
                onHandleChangePage={onHandleChangePage}
                currentPage={currentPage}
                onHandleRefresh={onHandleRefresh}
                onChangeFilter={onChangeFilter}
                onChangeTour={onChangeTour}




                onHandleCreateOpen={onHandleCreateOpen}
                onHandleDeleteBK={onHandleDeleteBK}
                onHandleEditBK={onHandleEditBK}
            />
            <CreateModalDomestic
                onHandleOpen={onHandleOpen}
                onHandleClose={onHandleClose}
                onHandleCreateNewTour={onHandleCreateNewTour}
            />
            {/* Nhớ pải gọi modal ở đây!! */}
            <UpdateModalDomestic
                onHandleUpdate={onHandleUpdate}
            />

            <CreateModalBooking
                onHandleCreateClose={onHandleCreateClose}
            />
            <UpdateModalBooking />
            <Footer />
        </div>
    );
}

export default AdminDashboardContainer;