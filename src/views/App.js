import '../scss/main.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeHeader from "../components/Home/HomeHeader";



function App() {

    return (

            <BrowserRouter>
            <div className="App">

                <Routes>
                <Route path="/" element={<HomeHeader />} />
                
                    
                    


                </Routes>
                </div>
            </BrowserRouter>

    );
}

export default App;
