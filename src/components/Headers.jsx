import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Avatar, Button, InputBase, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box, color, fontFamily, fontWeight } from '@mui/system';
import React from 'react';
import logo from '../images/download.png'
import husklog from '../images/husk.png'
import { makeStyles } from '@mui/styles';
import { EnergySavingsLeafRounded, Login } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
// import { ClickAwayListener, Divider, Grow, MenuList, Paper, Popper } from '@mui/material';

const useStyles = makeStyles({
    head: {
        justifyContent: 'end',
        display: 'flex',
        backgroundColor: 'rgb(233, 239, 187)',
        color: 'black'
    },
    heads: {
        display: 'flex',
        '& .MuiToolbar-root ': {
            paddingLeft: '0',
            paddingRight: 0
        }
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
        // flexDirection: 'row',
        // flexWrap: 'wrap',
        justifyContent: 'space-between',
        margin: '0',
        width: '100%',
        maxWidth: 'var(--pageMaxWidth)',
        // fontSize: '0.7rem',
        boxSizing: 'inherit',
        fontFamily: 'husqvarna,Roboto,Helvetica,Arial,sans-serif',
        backgroundColor: 'white',
        marginTop: '-1.9rem',

    },
    menuu: {
        display: 'flex',
        cursor: 'pointer',
        color: 'black',
        flexDirection: 'row',
        justifyContent: 'center',
        '& .MuiTypography-root ': {
            marginLeft: '1rem',
            textDecoration: 'none',
            fontSize: '16px',
            color: 'black',
        }
    },
    search: {
        position: 'relative',
        borderRadius: '2rem',
        background: 'transparent',
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

})
const Headers = () => {
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
    const pages = ['Ranking', 'How it Works', 'Insights', 'Groene Stad Challenge', 'Community'];
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
            <Toolbar className={head}  >
                <div className={heads}  >
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
                            }}
                        >
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
            <AppBar sx={{
                backgroundColor: 'white', marginTop: '3.7rem', padding: '0rem'
            }}
            >
                <Toolbar className={roots}   >

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img
                            src={logo}
                            alt="HUGSI logo"
                            style={{ marginLeft: 10, marginRight: 20, width: '6rem', }}
                        />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black' }}>
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
                        <Menu className={menuu}
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center" variant='h6' >{page}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Typography
                                key={page}
                                onClick={handleCloseNavMenu}
                                sx={{
                                    my: 2, color: 'black', display: 'flex'
                                }}
                            >

                                {page}

                            </Typography>
                        ))}
                    </Box>
                    <div>
                        <span
                            style={{
                                position: 'absolute',
                                width: '14rem',
                                height: '1.8rem',
                                background: 'white',
                                border: '1px solid #c9cdd0',
                                borderRadius: '1rem',
                                display: 'flex',
                                color: '#5f6a74',
                                fontSize: '16px',
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

export default Headers