import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from "./components/home/home";
import TicketKauf from "./components/ticketKauf/ticketKauf";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FmdGoodIcon from '@mui/icons-material/FmdGood';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                    <BottomNavigation showLabels>
                        <BottomNavigationAction component={Link} to={'/ticket'} label="Tickets" icon={<ConfirmationNumberIcon />} />
                        <BottomNavigationAction component={Link} to={'/home'} label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction component={Link} to={'/map'} label="Map" icon={<FmdGoodIcon />} />
                    </BottomNavigation>
                </Paper>

                <Routes>
                    <Route path={'home'} element={<Home/>}/>
                    <Route path={'ticket'} element={<TicketKauf/>}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
