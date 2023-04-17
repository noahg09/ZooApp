import Header from "../header/header";
import {Divider, ImageList} from "@mui/material";
import zebraImg from "../../images/zebra.png";
import giraffeImg from "../../images/giraffeSavanne.png";
import gazelleImg from "../../images/gazelle.png";
import nashornImg from "../../images/nashorn.png";

function Savanne() {
    const titleValue = "Savanne";

    return(
        <div>
            <Header titleValue={titleValue}/>
            <h1>Tiere in der Savanne</h1>
            <Divider sx={{borderBottomWidth: 5}}/>
            <div>
                <div className="savanne-tiere">
                    <img src={zebraImg}/>
                    <img src={giraffeImg}/>
                    <br/>
                    <img src={gazelleImg}/>
                    <img src={nashornImg}/>
                </div>
            </div>
        </div>
    )
}
export default Savanne;