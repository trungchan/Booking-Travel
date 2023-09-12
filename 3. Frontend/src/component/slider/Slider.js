import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
} from 'mdb-react-ui-kit';
import img1 from '../../asset/sliderImg/img2.jpg';
import img3 from '../../asset/sliderImg/img3.jpg';
import img4 from '../../asset/sliderImg/img4.jpg';

export default function Slider() {
    return (
        <MDBCarousel showIndicators showControls fade >
            <MDBCarouselItem
                className='w-100 d-block'
                itemId={1}
                src={img1}
                alt='...'
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={2}
                src={img3}
                alt='...'
                style={{ width: "100%", height: "600px" }}
            >
            </MDBCarouselItem>

            <MDBCarouselItem
                className='w-100 d-block'
                itemId={3}
                src={img4}
                alt='...'
                style={{ width: "100%", height: "600px", objectFit: "cover" }}
            >
            </MDBCarouselItem>
        </MDBCarousel>
    );
}