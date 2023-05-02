import {Paper} from "@mui/material";
import "./impressum.css"

function Impressum() {
    return (
        <main id={"impressum-main"}>
            <Paper className={"impressum-paper"}>
                <h3>Verantwortliche Instanz:</h3>
                Zoo Zürich
                Zürichbergstrasse 221
                8044 Zürich
                Schweiz
                E-Mail: zoo@zoo.ch
            </Paper>
            <Paper className={"impressum-paper"}>
                <h3>Vertretungsberechtigte Personen</h3>
                Colin Marti
                Noah Grünig
                Mauro Grieco
                Nils von Däniken
            </Paper>
            <Paper className={"impressum-paper"}>
                <strong>Name des Unternehmens:</strong> Zoo Zürich<br/>
                <strong>Registrationsnummer:</strong> CHE-101.907.073<br/>
                <strong>Umsatzsteuer-Identifikationsnummer:</strong> CHE-101.907.073<br/>
            </Paper>
            <Paper className={"impressum-paper"}>
                <h3>Haftungsausschluss</h3>
                Der Autor übernimmt keine Gewähr für die Richtigkeit, Genauigkeit, Aktualität, Zuverlässigkeit und
                Vollständigkeit der Informationen.
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art, die aus dem Zugriff
                oder der Nutzung bzw. Nichtnutzung der veröffentlichten Informationen, durch Missbrauch der Verbindung
                oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                <br/>
                Alle Angebote sind freibleibend. Der Autor behält es sich ausdrücklich vor, Teile der Seiten oder das
                gesamte Angebot ohne gesonderte Ankündigung zu verändern, zu ergänzen, zu löschen oder die
                Veröffentlichung zeitweise oder endgültig einzustellen.
            </Paper>
            <Paper className={"impressum-paper"}>
                <h3>Haftungsausschluss für Inhalte und Links</h3>
                Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird
                jegliche Verantwortung für solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten
                erfolgen auf eigene Gefahr des jeweiligen Nutzers.
            </Paper>
            <Paper className={"impressum-paper"}>
                <h3>Urheberrechtserklärung</h3>
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser
                Website, gehören ausschliesslich Zoo Zürich oder den speziell genannten Rechteinhabern. Für die
                Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtsträgers im Voraus
                einzuholen.
            </Paper>
            <Paper className={"impressum-paper"}>
                <strong>Quelle</strong>: BrainBox Solutions
            </Paper>
        </main>
    );
}

export default Impressum;