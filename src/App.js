import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from "./components/home/home";
import TicketKauf from "./components/home/ticketKauf";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <ul>
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/ticketKauf'}>Ticket Kauf</Link></li>
                </ul>

                <Routes>
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'ticketKauf'} element={<TicketKauf/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
