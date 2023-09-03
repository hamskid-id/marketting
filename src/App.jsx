import {BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import './App.css'
import { HomeScreen } from './pages/homescreen';
import { MarketPlace } from './pages/marketPlace';
import { ProductInfo } from './pages/productInfo';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { PaymentSection } from './pages/paymentPage';
import { ContactPage } from './pages/contact';
import { TestimonyPage } from './pages/testimonypage';
import store from './store';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import 'sweetalert2/src/sweetalert2.scss'
import { Provider } from 'react-redux';

function App() {

  return (
    <>
      <Provider store={store}>
        <Router>
            <Routes>
              <Route exact path="/" element={ <HomeScreen/>}/>
              <Route exact path="/market" element={ <MarketPlace/>}/>
              <Route exact path="/testimony" element={ <TestimonyPage/>}/>
              <Route exact path="/contacts" element={ <ContactPage/>}/>
              <Route exact path="/payment/:id" element={ <PaymentSection/>}/>
              <Route exact path="/market/:id" element={ <ProductInfo/>}/>
            </Routes>
        <ToastContainer/>
        </Router>
      </Provider>
    </>
  )
}

export default App
