import "./HomePicture.css"
import pinguineImg from "../../images/pinguine.png";
import giraffeImg from "../../images/giraffe.png";
import savanneImg from "../../images/savanne.png";

function HomePicture() {

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
        </div>
    )
}
export default HomePicture();