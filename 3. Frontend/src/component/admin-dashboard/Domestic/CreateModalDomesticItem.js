import { PlusOutlined, RetweetOutlined } from '@ant-design/icons';
import { isValidDateValue } from '@testing-library/user-event/dist/utils';
import { Button, DatePicker, Input, Select } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import { MDBContainer } from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CreateModalDomesticItem(props) {
    const { onHandleCreateNewTour } = props;

    const stateRedux = useSelector((state) => state);
    const listDeparture = stateRedux.listDeparture;
    const listDestinationDomestics = stateRedux.listDestination;
    const listTour = stateRedux.listTour.content;
    console.log("listTour", listTour);

    // Lưu trữ các trường hiện tại vào state
    const [tourName, setTourName] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [ratting, setRatting] = useState("");
    const [discount, setDiscount] = useState("");
    const [leaving, setLeaving] = useState({});
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [typeTour, setTypeTour] = useState("");
    const [departure, setDeparture] = useState("");
    const [destination, setDestination] = useState("");

    // Xử lý các nút ấn
    const handleCreate = () => {
        const newTour = {
            name: tourName,
            imageUrl: imgUrl,
            ratting: ratting,
            discount: discount,
            leaving: leaving.dateString,
            description: description,
            price: price,
            status: typeTour,
            departuresId: departure,
            destinationsId: destination
        };
        // if (!isValidateRatting()) {
        //     alert("Nhập lại ratting < 5")
        //     console.log("Nhập lại ratting > 5");
        //     return;
        // };
        // if (!isValidateDiscount()) {
        //     alert("Nhập lại disccount > 0")
        //     console.log("Nhập lại disccount > 0");
        //     return;
        // };
        // if (!idValidateTourName()) {
        //     alert("Chưa nhập tên Tour");
        //     console.log("TourName rỗng");
        //     return;
        // }
        // console.log("newtour::", newTour);
        // if ((isValidDateValue()) &&
        //     // (isValidateDiscount()) && 
        //     (idValidateTourName())) {

        onHandleCreateNewTour(newTour);
        handleReset();



    };

    const handleReset = () => {
        setTourName("");
        setImgUrl("");
        setRatting("");
        setDiscount("");
        setLeaving("");
        setDescription("");
        setPrice("");
        setTypeTour("");
        setDeparture("");
        setDestination("");
    }

    // const isValidateRatting = () => {
    //     if (ratting < 5) {
    //         return ratting;
    //     }
    // };
    // const isValidateDiscount = (discount) => {
    //     if (discount > 0) {
    //         return discount;
    //     }
    // };

    // const idValidateTourName = (tourName) => {
    //     if (tourName.length() > 10) {
    //         return tourName;
    //     }
    // }

    // Xử lý lấy dữ liệu từ redux
    let departureItems = "";
    if (listDeparture) {
        departureItems = listDeparture.map(dep => {
            return (
                {
                    value: dep.id,
                    label: dep.name
                }
            )
        });
    };

    let destinationItems = "";
    if (listDestinationDomestics) {
        destinationItems = listDestinationDomestics
            // .filter(des => des.status === "Domestic")
            .map(des => {
                return (
                    {
                        value: des.id,
                        label: des.name
                    }
                )
            });
    };
    // Lấy ra loại tour 
    // tạo ra 1 mảng mới lấy giá trị status và dùng set để bỏ những giá trị trùng lặp
    // const statusValues = [...new Set(listTour.map(tour => tour.status))];
    // let typeTours = statusValues.map(stt => {
    //     return ({
    //         value: stt,
    //         label: stt
    //     })
    // })
    let typeTours = [
        {
            value: "Domestic",
            label: "Domestic"
        },
        {
            value: "Foreign",
            label: "Foreign"
        }
    ]
    // console.log("typeTour", typeTours);

    return (
        <MDBContainer>
            <div>
                <span className='py-2'>Tour Name</span>
                <Input placeholder="Nhập tên tour" value={tourName}
                    onChange={(e) => { setTourName(e.target.value) }} />
            </div>

            <div className='py-1'>
                <span className='py-2'>Img URL</span>
                <Input placeholder="Nhập link ảnh" value={imgUrl}
                    onChange={(e) => { setImgUrl(e.target.value) }} />
            </div>

            <div className='py-1'>
                <span>Ratting</span>
                <Input placeholder="Nhập ratting" value={ratting}
                    onChange={(e) => { setRatting(e.target.value) }} />
            </div>

            <div className='py-1'>
                <span>Discount</span>
                <Input placeholder="Nhập discount" value={discount}
                    onChange={(e) => { setDiscount(e.target.value) }} />
            </div>

            <div className='py-1'>
                <span>Leaving</span>
                {/* <MDBInput type='date' ></MDBInput> */}
                <DatePicker className='w-100' value={leaving.date}
                    onChange={(date, dateString) => {
                        setLeaving({
                            date,
                            dateString
                        });
                    }}
                />
            </div>

            <div className='py-1'>
                <span>Description</span>
                <TextArea placeholder="Nhập mô tả về tour" allowClear value={description}
                    onChange={(e) => { setDescription(e.target.value) }} />
            </div>

            <div className='py-1'>
                <span>Price</span>
                <Input placeholder="Nhập giá Tour" value={price}
                    onChange={(e) => { setPrice(e.target.value) }} />
            </div>

            <div className='py-1'>
                <span>Type Tour</span>
                <Select className='input-form ' defaultValue="Nhập loại tour" options={typeTours} value={typeTour}
                    onChange={(e) => { setTypeTour(e) }} />
            </div>

            <div className='py-1'>
                <span>Điểm đi</span>
                <Select className='input-form ' defaultValue="Nhập điểm đi" options={departureItems} value={departure}
                    onChange={(e) => { setDeparture(e) }} />
            </div>

            <div className='py-1'>
                <span>Điểm đến</span>
                <Select className='input-form ' defaultValue="Nhập điểm đến" options={destinationItems} value={destination}
                    onChange={(e) => { setDestination(e) }} />
            </div>

            <div className='py-1'>
                <span>
                    <Button className='btn-success' icon={<PlusOutlined />} size="large" onClick={handleCreate} >
                        Create
                    </Button>
                </span>
                <span className='px-2'>
                    <Button type="primary" danger icon={<RetweetOutlined />} size="large" onClick={handleReset}>
                        Reset
                    </Button>
                </span>
            </div>

        </MDBContainer>
    );
}

export default CreateModalDomesticItem;