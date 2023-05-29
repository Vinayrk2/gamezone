import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Error from './pages/Error';
import Header from './component/Header';
import Profile from './pages/Profile';
import Review from './pages/Review';
import Footer from './component/Footer';
import './App.css';
import GamePage from './pages/GamePage';
import Login from './pages/Login';
import { useState } from 'react';
import { UserContext } from './component/Context';
import { useSearchParams } from 'react-router-dom';

function App() {

  const [user, setUser] = useState({});
  const [query, setQuery] = useState("");

  return (
    <>
    <UserContext.Provider value={user}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header setQuery={setQuery}/>}>
          <Route index element={<Home query={query}/>} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login setUser={setUser}/>} />
          <Route path='/gamepage' element={<GamePage />} />  
          <Route path='profile' element={<Profile />} />
          <Route path='/contact' element={<Contact />} >
            <Route path='review' element={<Review />}/>
          </Route>
          <Route path='/*' element={<Error />} />
          </Route>  
        </Routes>
        <Footer />
      </BrowserRouter>
      </UserContext.Provider>
    </>
  )
}

export default App
