import React, { useEffect } from 'react';
import Navigation from '../component/header/Navigation';
import Footer from '../component/footer/Footer';
import SearchPage from '../component/search-page/SearchPage';
import { useDispatch, useSelector } from 'react-redux';
import { actionFetchTourAPI } from '../redux/action/TourAction';

function SearchPageContainer(props) {
    const dispatch = useDispatch();
    const { search, totalElements, searchDestination } = useSelector((state) => state.listTour);
    const { listDestination } = useSelector((state) => state)

    // Tìm kiếm tên bằng ID
    const searchName = listDestination ? listDestination.find(des => des.id === searchDestination) : [];
    // console.log("search", searchName[0].name);
    const searchNameAPI = searchName ? searchName.name : "";

    useEffect(() => {
        dispatch(actionFetchTourAPI(search, totalElements,"","","","","","","","","",searchNameAPI));
    }, [dispatch, totalElements, searchNameAPI,search])



    return (
        <div>
            <Navigation />
            <SearchPage />
            <Footer />

        </div>
    );
}

export default SearchPageContainer;