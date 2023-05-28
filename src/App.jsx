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

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/login' element={<Login />} />
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
    </>
  )
}

export default App
