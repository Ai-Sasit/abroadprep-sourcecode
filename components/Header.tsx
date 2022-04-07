import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Modal from '@mui/material/Modal';
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import { Link } from 'react-scroll'
import { useRouter } from "next/router";
import ContactsIcon from '@mui/icons-material/Contacts';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: '#1c1c1c',
    fontFamily: "Karla",
    boxShadow: 24,
    p: 4,
    color: 'white'
};

const ResponsiveAppBar = () => {
    const router = useRouter()
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [open, setOpen] = React.useState(false);

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const handleClose = () => setOpen(false);

    const path = router.pathname;
    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
    
    const handleCloseA = () => {
        setAnchorEl(null);
      };

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: "#181818" }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            className="ContactIcon"
                            sx={{ mr: 2, display: { xs: "none", md: "flex" }, fontFamily: "Karla", textDecoration: "none", color: "white" }}
                        >
                            ABROAD PREP
                        </Typography>

                        <Box sx={{ flexGrow: 48, display: { xs: "flex", md: "none" } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: "bottom",
                                    horizontal: "left",
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: "top",
                                    horizontal: "left",
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: "block", md: "none" },
                                }}
                            >
                                <MenuItem>
                                    <Typography textAlign="center" component="a" href="/course1">In-Home Youth Prep Course</Typography>
                                </MenuItem>
                                <MenuItem>
                                    <Typography textAlign="center" component="a" href="/course2">International Social Etiquette</Typography>
                                </MenuItem>
                                <MenuItem>
                                    <Typography textAlign="center" component="a" href="/course3">Global Elite</Typography>
                                </MenuItem>
                                <MenuItem>
                                    <Typography textAlign="center" component="a" href="/course4">LIVE ONLINE Social Etiquette</Typography>
                                </MenuItem>
                            </Menu>
                        </Box>
                        
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            className="ContactIcon"
                            sx={{ flexGrow: 48, display: { xs: "flex", md: "none" }, fontFamily: "Karla", textDecoration: "none", color: "white" }}
                        >
                            ABROAD PREP
                        </Typography>
                        <Box sx={{flexGrow:0, display: { xs: "flex", md: "none" } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <ContactsIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleCloseA}
              >
                <MenuItem onClick={handleClose} component="a" href="https://www.facebook.com/Abroad-prep-102955072386401"><FacebookIcon/>&nbsp;Facebook</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="https://www.instagram.com/abroad.prep/"><InstagramIcon/>&nbsp;Instagram</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="mailto:abroad.prepa@gmail.com"><EmailIcon/>&nbsp;abroad.prepa@gmail.com</MenuItem>
                <MenuItem onClick={handleClose} component="a" href="tel:+19294192423"><LocalPhoneIcon/>&nbsp;+1 929 4192423</MenuItem>
              </Menu>
            </Box>
                        <Box sx={{ flexGrow: 1 }} /><Box sx={{ flexGrow: 1 }} />
                        <Box sx={{ flexGrow: -1, display: { xs: "none", md: "flex" } }}>
                            {path == "/" ? <Link to="detail" spy={true} smooth={true}><Button
                                sx={{ my: "auto", color: "white", display: "block", fontFamily: "Karla" }}
                                className="button-bar-hold"
                            >
                                Courses Details
                            </Button></Link> : <Button
                                sx={{ my: "auto", color: "white", display: "block", fontFamily: "Karla" }}
                                className="button-bar-hold"
                                href="/"
                            >
                                Courses Details
                            </Button>}
                        </Box>
                    </Toolbar>
                </Container>
            </AppBar>
        </>
    );
};
export default ResponsiveAppBar;
