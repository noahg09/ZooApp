import "./Home.css"
import {Divider, Link} from "@mui/material";
import pinguineImg from "../../images/pinguine.png";
import giraffeImg from "../../images/giraffe.png";
import savanneImg from "../../images/savanne.png";
import Header from "../header/header";

function Home() {
    const titleValue = "Home";

    return (
        <div>
            <Header titleValue={titleValue}></Header>
            <div className="pictureHeader">
                <div>
                    <a><img src={pinguineImg} className="homeImg" id="pinguineImg" alt="Pinguine"/></a>
                    <br/>
                    <a className="header-title">Nächster Lauf um 13:30</a>
                </div>
                <div>
                    <img src={giraffeImg} className="homeImg" id="giraffeImg" alt="Giraffe"/>
                    <br/>
                    <a className="header-title">Nächste Fütterung um 15:00</a>
                </div>
                <div>
                    <img src={savanneImg} className="homeImg" id="savanneImg" alt="Savanne"/>
                    <br/>
                    <a className="header-title" id="title-red">NEU: Savanne</a>
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