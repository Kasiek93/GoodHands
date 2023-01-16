import '../scss/main.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeHeader from "../components/Home/HomeHeader";
import HomeNav from '../components/Home/HomeNav/HomeNav';
import Login from '../components/Login';
import CreateAccount from '../components/CreateAccount';



function App() {

    return (

            <BrowserRouter>
            
            <HomeNav />

                <Routes>
                <Route path="/" element={<HomeHeader />} />
                <Route path="/logowanie" element={<Login />} />
                <Route path="/rejestracja" element={<CreateAccount />} />
                <Route path="/oddaj-rzeczy" element={<Login />} />
               
                
                    
                    


                </Routes>
                
            </BrowserRouter>

    );
}

export default App;
