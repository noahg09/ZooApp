import "./login.css"
import logo from "../../images/logo.png"
import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import ButtonMUI from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import Alert from '@mui/material/Alert';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Paper from '@mui/material/Paper';
import {useState} from "react";


function Login() {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [snackbarOpen, setSnackbarOpen] = useState(false);
    const [pwdValidate, setPwdValidate] = useState(false);
    const [usernameValidate, setUsernameValidate] = useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    function handleLogin() {

        if (username === "") {
            setSnackbarOpen(true)
            setUsernameValidate(true)
        } else {
            setUsernameValidate(false)

        }
        console.log(snackbarOpen)

        if (pwd === "" ) {
            setSnackbarOpen(true)
            setPwdValidate(true)

        } else {
            setPwdValidate(false)

        }
        if (pwdValidate && usernameValidate){
            setSnackbarOpen(false)
        }
        console.log(snackbarOpen)
        console.log(pwd)

    }

    return (
        <div id={"loginSite"}>
            <Snackbar open={snackbarOpen} autoHideDuration={6000} >
                <Alert severity="warning" sx={{ width: '100%' }}>
                    Fülle die Felder richtig ab!
                </Alert>
            </Snackbar>
            <img id={"logo"} src={logo}/>
            <Paper elevation={2} id={"login"}>
                <div id={"loginFields"}>
                    <TextField
                        error={usernameValidate}
                        onChange={e => setUsername(e.target.value)}
                        value={username}
                        label="Username"
                        id="outlined-start-adornment"
                        sx={{m: 1, width: '25ch'}}

                    />
                    <br/>
                    <FormControl sx={{m: 1, width: '25ch'}} variant="outlined">
                        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                        <OutlinedInput
                            onChange={e => setPwd(e.target.value)}
                            value={pwd}
                            error={pwdValidate}
                            id="outlined-adornment-password"
                            type={showPassword ? 'text' : 'password'}
                            endAdornment={
                                <InputAdornment position="end">
                                    <IconButton aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                onMouseDown={handleMouseDownPassword}
                                                edge="end"
                                    >
                                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                                    </IconButton>
                                </InputAdornment>
                            }
                            label="Password"
                        />
                    </FormControl>
                    <br/>
                    <br/>
                    <ButtonMUI variant="contained" onClick={e => handleLogin()}>Login</ButtonMUI>

                </div>
            </Paper>
        </div>
    );

}

export default Login;


