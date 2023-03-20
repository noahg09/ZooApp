import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from "./components/home/home";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Link to={'/home'}>Home</Link>
                <Routes>
                    <Route path={'home'} element={<Home/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
