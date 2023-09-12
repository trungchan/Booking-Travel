import WebFont from 'webfontloader'
import React, { useEffect, useState } from "react";
import img7 from '../../asset/navImg/img7.png';
import "./login/LoginForm.css";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,

} from "mdb-react-ui-kit";

import { ShoppingCartOutlined, UserOutlined, SearchOutlined } from '@ant-design/icons';
import { Alert, Space } from "antd";
import Link from "antd/es/typography/Link";
import { useNavigate, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchTourAPI, actionSearchTourReDux } from '../../redux/action/TourAction';
import Search from 'antd/es/input/Search';

function Navigation(props) {
    const [showBasic, setShowBasic] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams;
    const { search } = useSelector((state) => state.listTour);
    // const {showLogin} = props;
    const handleLogOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("role");
        localStorage.removeItem("id");
        alert("Đăng xuất thành công")
        // <Alert
        //     message="Đăng xuất thành công"
        //     type="success"
        //     showIcon
        // />
        navigate("/login")
    }

    const handleSearch = () => {
        dispatch(actionFetchTourAPI(search));
        navigate("/search-page");
    }
    // import phông chữ
    useEffect(() => {
        WebFont.load({
            google: {
                families: 'Nunito',
            }
        })
    }, [])

    return (

        <MDBNavbar expand="lg" dark className="bg-dark p-2 text-white">
            <MDBContainer fluid style={{ fontFamily: "Nunito" } }>
                <MDBNavbarBrand href='#' onClick={() => navigate("/")} style={{ fontSize: 25 }}>
                    <img
                        src={img7}
                        height='30'
                        alt='error'
                        loading='lazy'
                    />TRAVEL.
                </MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className=" mb-2 mb-lg-0">
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current="page" href="#" style={{ fontSize: 18 }} onClick={() => navigate("/")}>
                                Trang chủ
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#" style={{ fontSize: 18 }}>Tin tức</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBDropdown>
                                <MDBDropdownToggle tag="a" className="nav-link" role="button" style={{ fontSize: 18 }}>
                                    Du lịch
                                </MDBDropdownToggle>
                                <MDBDropdownMenu>
                                    <MDBDropdownItem link onClick={() => navigate("/search-page")}>Tour trong nước</MDBDropdownItem>
                                    <MDBDropdownItem link onClick={() => navigate("/search-page")}>Tour ngoài nước</MDBDropdownItem>
                                    <MDBDropdownItem link onClick={() => navigate("/search-page")}>Xem tất cả</MDBDropdownItem>
                                </MDBDropdownMenu>
                            </MDBDropdown>
                        </MDBNavbarItem>

                        <MDBNavbarItem className="" style={{ fontSize: 18 }}>
                            <MDBNavbarLink
                                href="#"
                                tabIndex={-1}
                                aria-disabled="true"
                            >
                                Liên hệ
                            </MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>
                    <Space style={{ color: "white" }} className='me-4 ' >
                        <MDBDropdown group>
                            <MDBDropdownToggle tag='a' className='btn'>
                                <UserOutlined style={{ color: "white", fontSize: "25px" }} />
                            </MDBDropdownToggle>
                            <MDBDropdownMenu>
                                {/* Hiển thị trang admin nếu role là admin */}
                                {(localStorage.getItem("role") === "ADMIN") ?
                                    <MDBDropdownItem link onClick={() => navigate("/admin-dashbroad")}>Dash board</MDBDropdownItem> : <></>}
                                {/* Nếu đã đăng nhập thì ẩn login */}
                                {!localStorage.getItem("token") ? <MDBDropdownItem link onClick={() => navigate("/login")} >Login</MDBDropdownItem> : <></>}
                                <MDBDropdownItem link onClick={handleLogOut}>Logout</MDBDropdownItem>
                            </MDBDropdownMenu>
                        </MDBDropdown>
                        <Link href="#" onClick={() => navigate(`/booking/${id}`)}>
                            <ShoppingCartOutlined style={{ color: "white", fontSize: "25px" }} />
                        </Link>

                    </Space>

                    <form className='d-flex input-group w-auto' style={{}}>
                        <Search
                            placeholder="type query"
                            allowClear
                            size="large"
                            value={search}
                            onChange={(e) => dispatch(actionSearchTourReDux(e.target.value))}
                            onSearch={handleSearch}
                        />

                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
export default Navigation;
