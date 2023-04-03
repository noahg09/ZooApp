import './App.css';
import {BrowserRouter, Link, Route, Routes} from 'react-router-dom';
import Home from "./components/home/home";
import TicketKauf from "./components/ticketKauf/ticketKauf";
import {BottomNavigation, BottomNavigationAction, Paper} from "@mui/material";
import HomeIcon from '@mui/icons-material/Home';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import {useState} from "react";
import LockIcon from '@mui/icons-material/Lock';
import Map from "./components/map/map";
import Security from "./components/security/security";
import Savanne from "./components/home/savanne";

function App() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="App">
            <BrowserRouter>
                <Paper sx={{position: 'fixed', bottom: 0, left: 0, right: 0}} elevation={3}>
                    <BottomNavigation
                        showLabels
                        value={value}
                        onChange={handleChange}>
                        <BottomNavigationAction component={Link} to={'/ticket'} label="Tickets"
                                                icon={<ConfirmationNumberIcon/>}/>
                        <BottomNavigationAction component={Link} to={'/home'} label="Home" icon={<HomeIcon/>}/>
                        <BottomNavigationAction component={Link} to={'/map'} label="Map" icon={<FmdGoodIcon/>}/>
                        <BottomNavigationAction component={Link} to={'/security'} label="Datenschutz" icon={<LockIcon/>}/>
                    </BottomNavigation>
                </Paper>

                <Routes>
                    <Route path={'/ticket'} element={<TicketKauf/>}/>
                    <Route path={'/home'} element={<Home/>}/>
                    <Route path={'/home/savanne'} element={<Savanne/>}/>
                    <Route path={'/map'} element={<Map/>}/>
                    <Route path={'/security'} element={<Security/>}/>

                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
