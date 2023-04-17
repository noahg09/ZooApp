import "./ticketKauf.css"
import qrCode from "../../images/img.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from "../header/header";
function TicketKauf(){
    const titleValue = "Tickets";

    return(
        <div>
        <header>
            <Header titleValue={titleValue}></Header>
        </header>
        <body>
        <div>
            <h2>Zoo</h2>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><div className="flex">
                        <span className={"ti1"}>Zoo Ticket</span>
                        <span className={"ti1"}>Kind</span>
                        <span className={"ti1"}>20.04.2023</span>
                    </div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={qrCode}/>
                    <div>#934803</div>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>
                        <div className="flex">
                            <span className={"ti1"}>Zoo Ticket</span>
                            <span className={"ti1"}>Erwachsen</span>
                            <span className={"ti1"}>20.04.2023</span>
                        </div>
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={qrCode}/>
                    <div>#846384</div>
                </AccordionDetails>
            </Accordion>
        </div>
        <div>
            <h2>Restaurant</h2>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography><div className="flex">
                        <span className={"ti1"}>Restaurant Ticket</span>
                        <span className={"ti1"}>Kind</span>
                        <span className={"ti1"}>20.04.2023</span>
                    </div></Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={qrCode}/>
                    <div>#347593</div>
                </AccordionDetails>
            </Accordion>
        </div>
        </body>
        </div>
    );
}
export default TicketKauf