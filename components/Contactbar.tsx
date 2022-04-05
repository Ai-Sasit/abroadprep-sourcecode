import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { isBrowser } from 'react-device-detect';


const goface = () =>{
    window.location.replace("https://www.facebook.com/Abroad-prep-102955072386401")
}

const goInstra = () =>{
    window.location.replace("https://www.instagram.com/abroad.prep/")
}
export default function ContactBar() {
    return isBrowser ?(
        <Box sx={{ flexGrow: 1, height: "30px" }}>
            <AppBar position="static" sx={{ height: "30px" }} style={{ backgroundColor: "#181818" }}>
                <Toolbar>
                    <Typography sx={{ mt: -2, fontSize: "1.8vmin", fontFamily: "Karla" }}>
                        &nbsp;&nbsp;&nbsp;&nbsp;<a  href="tel:+19294192423" className="ContactIcon"><PhoneIcon sx={{ height: "20px", mb: -0.5 }} />&nbsp;+1 929 4192423</a>
                        &nbsp;&nbsp;&nbsp;&nbsp;<a href="mailto:abroad.prepa@gmail.com" className="ContactIcon"><EmailIcon sx={{ height: "20px", mb: -0.5 }} />&nbsp;abroad.prepa@gmail.com</a>
                    </Typography>
                    <Box sx={{ flexGrow: 1, fontFamily: "Karla" }} />
                    <FacebookIcon className="ContactIcon" onClick={goface} sx={{ height: "20px", mt: -2.5 }} />&nbsp;&nbsp;&nbsp;&nbsp;
                    <InstagramIcon className="ContactIcon" onClick={goInstra} sx={{ height: "20px", mt: -2.5 }} />&nbsp;&nbsp;
                </Toolbar>
            </AppBar>
        </Box>
    ):<></>
}