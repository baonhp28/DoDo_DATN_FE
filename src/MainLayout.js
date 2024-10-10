import './App.css';
import { Outlet } from 'react-router-dom';

import Header2 from './helo1/header.jsx';
import Footer2 from './helo1/footer.jsx';


const MainLayout = () => {
    return (
        <div>
            <Header2/>
            <main>
                <Outlet />
            </main>
            <footer className="bg-dark" id="tempaltemo_footer">
                <Footer2/>
            </footer>
        </div>
    );
};

export default MainLayout; 