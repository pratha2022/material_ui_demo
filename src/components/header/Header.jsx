import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Avatar, Button, IconButton, InputBase, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box, color, fontFamily, fontWeight } from '@mui/system';
import React from 'react';
import logo from '../../images/download.png'
import husklog from '../../images/husk.png'
import { makeStyles } from '@mui/styles';
import { EnergySavingsLeafRounded, Login } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { ClickAwayListener, Divider, Grow, MenuList, Paper, Popper } from '@mui/material';

const useStyles = makeStyles({
    head: {
        justifyContent: 'end',
        display: 'flex',
        backgroundColor: 'rgb(233, 239, 187)',
    },
    heads: {
        display: 'flex',
    },
    energySavingsLeafRounded: {
        fontSize: '2rem',
        color: 'green',
        marginTop: '-1.8rem',
        cursor: 'pointer'
    },
    login: {
        fontSize: '2rem',
        color: 'black',
        marginTop: '-1.8rem',
        cursor: 'pointer'

    },
    roots: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: 'auto',
        width: '100%',
        maxWidth: 'var(--pageMaxWidth)',
        fontSize: '0.7rem',
        boxSizing: 'inherit',
        fontFamily: 'husqvarna,Roboto,Helvetica,Arial,sans-serif',
        backgroundColor: 'white',
        marginTop: '-1.9rem'

    },
    menuu: {
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    search: {
        position: 'relative',
        borderRadius: '2rem',
        background: 'transparent',
        width: '100%',
        fontSize: '1rem',
    },
    searchIcon: {
        paddingLeft: '1rem',
        height: '100%',
        color: 'black',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
    },
    inputRoot: {
        color: 'inherit',
        marginLeft: '3rem',
    },
    inputInput: {
        width: '100%',

    },
    menuToggle: {
        display: "inlineBlock",
        position: 'absolute !important',
    }
})
const Header = () => {
    const {
        roots,
        heads,
        energySavingsLeafRounded,
        login,
        head,
        menuu,
        search,
        searchIcon,
        inputInput,
        inputRoot,
        menuToggle
    } = useStyles({});
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <div>
            <Toolbar className={head}>
                <div className={heads} >
                    <Box marginRight='2rem' display='flex' >
                        <div className={energySavingsLeafRounded}>
                            <EnergySavingsLeafRounded />
                        </div>
                        <a href='https://hugsi.green/'
                            style={{
                                color: 'black',
                                textDecoration: 'none',
                                fontWeight: 500,
                                marginTop: '-1.2rem'
                            }}>
                            Create account
                        </a>
                    </Box>
                    <Box marginRight='2rem' display='flex'>
                        <a href='https://hugsi.green/'
                            style={{
                                color: 'black',
                                textDecoration: 'none',
                                fontWeight: 500,
                                marginTop: '-1.2rem'
                            }}>Log in</a>
                        <div className={login}>
                            <Login />
                        </div>
                    </Box>
                </div>
            </Toolbar>
            <AppBar
                style={{
                    backgroundColor: 'white', marginTop: '3.9rem'
                }} >
                <Toolbar className={roots}   >
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>

                        <div className={menuu} >
                            <a
                                href="https://hugsi.green/"
                                target="_blank"
                            >
                                <img
                                    src={logo}
                                    alt="HUGSI logo"
                                    // height="auto"
                                    style={{ marginLeft: 5, width: '6rem', height: 'auto', marginTop: '0.1rem' }}
                                />
                            </a>
                            <Link to="/ranking" style={{ textDecoration: 'none' }} >
                                <Typography variant="h1"
                                    style={{
                                        color: 'black',
                                        marginLeft: 50,
                                        cursor: 'pointer',
                                        textDecoration: 'none'
                                    }}>
                                    {' '}
                                    <Box fontWeight="500" fontSize="1rem" lineHeight='2.167' letterSpacing='-0.01562em' >
                                        Ranking
                                    </Box>

                                </Typography>
                            </Link>
                            <Link to="/about" style={{ textDecoration: 'none' }}   >
                                <Typography variant="h1"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        marginLeft: 40,
                                    }}>
                                    {' '}
                                    <Box lineHeight='2.167' letterSpacing='-0.01562em' fontWeight="500" fontSize="1rem">
                                        How it works
                                    </Box>
                                </Typography>
                            </Link>
                            <Link to="/insights" style={{ textDecoration: 'none' }} >
                                <Typography variant="h1"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        marginLeft: 40,
                                        display: 'flex !important'
                                    }}>
                                    {' '}
                                    <Box onClick={handleClick}
                                        aria-haspopup="true"
                                        aria-expanded={open ? 'true' : undefined} lineHeight='2.167' letterSpacing='-0.01562em' fontWeight="500" fontSize="1rem">
                                        Insights
                                    </Box>
                                    <Menu
                                        className={menuToggle}
                                        anchorEl={anchorEl}
                                        open={open}
                                        onClose={handleClose}
                                        onClick={handleClose}
                                        PaperProps={{
                                            elevation: 0,
                                            sx: {
                                                // overflow: 'visible',
                                                width: 'fit-content',
                                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                                mt: 2,
                                                '& .MuiList-root': {
                                                    display: 'flex',
                                                },
                                                // '& .MuiAvatar-root': {
                                                //     width: 32,
                                                //     height: 32,
                                                //     ml: -0.5,
                                                //     mr: 1,
                                                // },
                                                // '&:before': {
                                                //     content: '""',
                                                //     // display: 'flex',
                                                //     position: 'absolute',
                                                //     top: 0,
                                                //     right: 14,
                                                //     width: 10,
                                                //     height: 10,
                                                //     bgcolor: 'background.paper',
                                                //     transform: 'translateY(-50%) rotate(45deg)',
                                                //     zIndex: 0,
                                                // },
                                            },

                                        }}
                                        transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                    >
                                        <MenuItem style={{ display: 'inlineBlock' }}>
                                            <Avatar />
                                            Profile
                                        </MenuItem>
                                        <MenuItem style={{ display: 'inlineBlock' }}>
                                            My account
                                        </MenuItem>
                                        <MenuItem>
                                            Contact
                                        </MenuItem>
                                        <MenuItem>
                                            Help
                                        </MenuItem>
                                        <MenuItem>
                                            Photo Gallery
                                        </MenuItem>
                                        <MenuItem>
                                            Review
                                        </MenuItem>
                                    </Menu>
                                </Typography>
                            </Link>
                            <Link to="/groenestadchallenge" style={{ textDecoration: 'none' }}  >
                                <Typography variant="h1"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        marginLeft: 40,
                                    }}>
                                    {' '}
                                    <Box lineHeight='2.167' letterSpacing='-0.01562em' fontWeight="500" fontSize="1rem">
                                        Groene Stad Challenge
                                    </Box>
                                </Typography>
                            </Link>
                            <Link to="/community" style={{ textDecoration: 'none' }}  >
                                <Typography variant="h1"
                                    style={{
                                        color: 'black',
                                        cursor: 'pointer',
                                        marginLeft: 40,
                                    }}>
                                    {' '}
                                    <Box fontWeight="500" fontSize="1rem" lineHeight='2.167' letterSpacing='-0.01562em'>
                                        Community
                                    </Box>
                                </Typography>
                            </Link>
                        </div>
                    </Box>

                    <div>
                        <span
                            style={{
                                position: 'absolute',
                                width: '14rem',
                                height: '2rem',
                                background: 'white',
                                border: '1px solid #c9cdd0',
                                borderRadius: '1rem',
                                display: 'flex',
                                color: '#5f6a74',
                                fontSize: '1.2rem',
                            }}
                        ></span>
                        <div className={search}>
                            <div className={searchIcon}>
                                <SearchIcon />
                            </div>
                            <InputBase
                                placeholder="Search"
                                classes={{
                                    root: inputRoot,
                                    input: inputInput,
                                }}
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </div>
                    </div>
                    <div>
                        <Typography
                            variant="subtitle2"
                            style={{
                                color: 'black',
                                display: 'flex',
                            }}
                        >
                            <Box style={{ marginRight: '1.8rem', marginTop: '0.4rem' }}>Powered by</Box>
                            <a
                                href="https://husqvarna.com"
                                target="_blank"
                            >
                                <img
                                    src={husklog}
                                    alt="Husqvarna logo"
                                    style={{ width: '8rem', height: 'auto', marginTop: '0.4rem' }}
                                />
                            </a>
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Header