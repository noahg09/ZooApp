import {useState} from "react";
import {Box, Tab, Tabs} from "@mui/material";
import DateSecurity from "./dateSecurity/dateSecurity";

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
                    <></>
                }
            </main>

        </div>
    )
}

export default Security