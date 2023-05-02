import {useState} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import DateSecurity from "./dateSecurity/dateSecurity";
import Impressum from "./impressum/impressum";

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
            <main>
                {value===0?
                    <DateSecurity/>
                    :
                    <Impressum/>
                }
            </main>

        </div>
    )
}

export default Security