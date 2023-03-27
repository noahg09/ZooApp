import "./ticketKauf.css"
import qrCode from "../../images/img.png"
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
function TicketKauf(){
    return(
        <div>
        <header>
            <hr></hr>
            <h1>Tickets</h1>
            <hr></hr>
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
                    <Typography>Ticket 1</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={qrCode}/>
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
                    <Typography>Ticket 2</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <img src={qrCode}/>
                </AccordionDetails>
            </Accordion>
        </div>
        </body>
        </div>
    );
}
export default TicketKauf