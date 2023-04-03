import "./header.css"
import {Divider} from "@mui/material";

function Header(props) {

    return(
        <div>
            <h1 className="headerName">{props.titleValue}</h1>
            <Divider sx={{borderBottomWidth: 5}}/>
        </div>
    )
}
export default Header;