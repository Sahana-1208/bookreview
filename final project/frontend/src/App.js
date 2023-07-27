import Home from './components/home';
import Login from './components/login';
import Register from "./components/register";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Navbar from './components/navbar';
import Bookpage from './components/bookpage';
import Profile from './components/profile';
import WishList from './components/wishlist';
import Adminadd from './components/adminadd';
import {Provider} from 'react-redux';
import { useState } from 'react';
import { store } from './components/features/store';
import Content from './components/content';
import FeedBack from './components/feedback';
import AdminLogin from './components/login2';
function App() {
  // const [selectedBook, selectBook]=useState([]);

  // const handleSelectBook=(book)=>{
  //   selectBook(book);
  //   console.log("Book selected");
  //   console.log(selectedBook);
  // }
  return (
    <Provider store={store}>
    <BrowserRouter>
       <Routes style={{height:"90vh"}}>
        <Route path='/adminlogin' element={<AdminLogin/>}/>
        <Route path="/bookpage" element={<Bookpage/>}/>
        <Route index element={<Content />}/>
        <Route path='/wishlist' element={<WishList/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/admin" element={<Adminadd/>}/>
        <Route path="/feedback" element={<FeedBack/>}/>
       </Routes>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
