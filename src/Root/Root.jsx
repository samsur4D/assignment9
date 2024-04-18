import { Outlet } from 'react-router-dom';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Root = () => {
    return (
        <div>
            <Nav></Nav>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer />
        </div>
    );
};

export default Root;