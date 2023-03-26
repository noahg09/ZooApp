import "./Home.css"
import {Divider, Link} from "@mui/material";
import pinguineImg from "../../images/pinguine.png";
import giraffeImg from "../../images/giraffe.png";
import savanneImg from "../../images/savanne.png";
import HomePicture from "./HomePicture";

function Home() {
    return (
        <div>
            <div className="pictureHeader">
                <div>
                    <img src={pinguineImg} className="homeImg" id="pinguineImg" alt="Pinguine"/>
                    <br/>
                    Nächster Lauf
                </div>
                <div>
                    <img src={giraffeImg} className="homeImg" id="giraffeImg" alt="Giraffe"/>
                    <br/>
                    Nächste Fütterung
                </div>
                <div>
                    <img src={savanneImg} className="homeImg" id="savanneImg" alt="Savanne"/>
                    <br/>
                    NEU: Savanne
                </div>
            </div>
            <br/>
            <Divider sx={{borderBottomWidth: 5}}/>
            <h1>Öffnungszeiten</h1>
            <Divider sx={{borderBottomWidth: 5}}/>
            <br/>
            <div className="oeffnungZeiten">
                <div className="oeffnungTitle">
                    MÄRZ BIS OKTOBER
                </div>
                <br/>
                <br/>
                <div>
                    Zoo: 9-18 Uhr
                    <br/>
                    Masoala: 10-18 Uhr
                </div>
                <br/><br/>
                <div className="oeffnungTitle">
                    MÄRZ BIS OKTOBER
                </div>
                <br/>
                <br/>
                <div>
                    Zoo: 9-18 Uhr
                    <br/>
                    Masoala: 10-18 Uhr
                </div>
                <br/>
                <Link href="/home" className="link">Infos zu Restaurants</Link>
            </div>
            <br/>
        </div>
    );
}

export default Home