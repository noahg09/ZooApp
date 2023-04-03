import {useState} from "react";
import {Box, Paper, Tab, Tabs} from "@mui/material";

function Security() {
    const [value, setValue] = useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div>
            <header>
                <Box sx={{width: '100%'}}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <Tab label="Datenschutz"/>
                        <Tab label="Impressum"/>
                    </Tabs>
                </Box>
            </header>

        </div>
    )
}

export default Security