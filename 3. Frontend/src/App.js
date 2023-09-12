
import { Route, Routes } from 'react-router';
import './App.css';
import BookingPages from './page/BookingPages';
import HomePages from './page/HomePages';
import LoginPage from './page/LoginPage';
import AdminDashbroadPage from './page/AdminDashbroadPage';
import SearchPage from './page/SearchPage';
import ErrorPage from './page/ErrorPage';



function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePages />} />
      <Route element={<BookingPages />} path="/booking/:id" />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/admin-dashbroad' element={<AdminDashbroadPage />} />
      <Route path='/search-page' element={<SearchPage />} />
      <Route path='*' element={<ErrorPage />} />
    </Routes>

  );
}

export default App;
