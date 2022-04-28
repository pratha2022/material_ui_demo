import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Avatar, Button, InputBase, Link, Menu, MenuItem, Tab, Toolbar, Typography } from '@mui/material'
import { Box, color, fontFamily, fontWeight, maxWidth } from '@mui/system';
import React from 'react';
import logo from '../../images/download.png'
import husklog from '../../images/husk.png'
import { makeStyles } from '@mui/styles';
import { EnergySavingsLeafRounded, Login, Menu as MenuIcon } from '@mui/icons-material';
// import { Menu as MenuIcon } from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
// import { ClickAwayListener, Divider, Grow, MenuList, Paper, Popper } from '@mui/material';

const useStyles = makeStyles({
    head: {
        justifyContent: 'end',
        display: 'flex',
        backgroundColor: 'rgb(233, 239, 187)',
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
        flexDirection: 'row',
        justifyContent: 'center',
        color: 'black',

        '& .MuiTypography-root ': {
            marginLeft: '1rem',
            textDecoration: 'none',
            fontSize: '16px',
            color: 'black',
        }
    },
    menuSmall: {
        display: 'flex',
        marginRight: 20,

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
    Menuicon: {
        cursor: 'pointer',
        position: 'absolute',
        // zIndex: 999,
        right: 0,
        left: 8,
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
        menuSmall,
        search,
        searchIcon,
        inputInput,
        inputRoot,
        Menuicon
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
            <Toolbar className={head}  >
                <div className={heads}  >
                    <Box marginRight='1rem' display='flex' >
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
                    <Box marginRight='1rem' display='flex'>
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
            <AppBar gutterBottom component="div" sx={{
                backgroundColor: 'white', padding: '0', top: '0', zIndex: "0", position: "static"
            }}
            >
                <Toolbar className={roots}  >
                    <div className={menuu} >

                        <Box sx={{ flexGrow: 1, color: 'black', display: { xs: 'flex', md: 'none' } }}>
                            <Typography
                                variant="subtitle1"
                                noWrap
                                component="div"
                                sx={{
                                    mr: 2,
                                    
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="HUGSI logo"
                                    style={{ marginLeft: 0, marginRight: 10, width: '6rem' }}
                                />
                            </Typography>
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
                            <IconButton
                                size="large"
                                // aria-label="account of current user"
                                aria-controls="menu-bar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                                aria-label="open drawer"
                            >
                                <MenuIcon className={Menuicon} />
                            </IconButton>

                            <Menu
                                id="menu-bar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                // transformOrigin={{
                                //     vertical: 'top',
                                //     horizontal: 'left',
                                // }}
                                open={Boolean(anchorElNav)}
                                onClose={handleCloseNavMenu}
                                sx={{
                                    display: { xs: 'flex', md: 'none' },
                                    '& .MuiTypography-root': {
                                        color: 'white',
                                        alignItems: 'center',
                                        flexDirection: 'column',
                                        backgroundColor: '#99c93c',
                                        textDecoration: 'none',
                                        fontSize: '1.2rem',
                                        justifyContent: 'center',
                                        width: '100rem',
                                        height: '2.5rem',
                                        position: 'relative'
                                    }
                                }}
                            >
                                <Typography
                                    variant="subtitle1"
                                    noWrap
                                    component="div"
                                    sx={{
                                        mr: 0, display: { xs: 'none', md: 'flex' },

                                    }}
                                >
                                    <img
                                        src={logo}
                                        alt="HUGSI logo"
                                    />
                                </Typography>
                                <Link>
                                    <Typography variant="subtitle1">
                                        {' '}
                                        <Box  >
                                            Ranking
                                        </Box>
                                    </Typography>
                                </Link>
                                <Link >
                                    <Typography variant="subtitle1">
                                        {' '}
                                        <Box  >
                                            How it works
                                        </Box>

                                    </Typography>
                                </Link>
                                <Link >
                                    <Typography variant="subtitle1">
                                        {' '}
                                        <Box onClick={handleClick}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined}  >
                                            Insights
                                        </Box>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                sx: {
                                                    width: 'fit-content',
                                                    // border: '1px solid grey',
                                                    filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.32))',
                                                    mt: 2.8,
                                                    '& .MuiList-root': {
                                                        display: 'block',
                                                        padding: 0,
                                                        justifyContent: 'center',
                                                    }
                                                },

                                            }}
                                            transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem>
                                                <Avatar />
                                                Profile
                                            </MenuItem>
                                            <MenuItem>
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
                                <Link  >
                                    <Typography variant="subtitle1">
                                        {' '}
                                        <Box >
                                            Groene Stad Challenge
                                        </Box>
                                    </Typography>
                                </Link>
                                <Link  >
                                    <Typography variant='subtitle1' sx={{ pb: '10rem' }}>
                                        {' '}
                                        <Box>
                                            Community
                                        </Box>
                                    </Typography>
                                </Link>
                                <Box >
                                    <Box sx={{ backgroundColor: '#424242;', p: '2rem', color: 'white', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                                        <Box
                                            style={{
                                                margin: '0 1rem'
                                            }}  >
                                            Powered by
                                        </Box>
                                        <img
                                            src={husklog}
                                            alt="Husqvarna logo"
                                            style={{ width: '8rem', height: 'auto', }}
                                        />
                                    </Box>
                                </Box>
                            </Menu>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <Typography
                                variant="subtitle1"
                                noWrap
                                component="div"
                                sx={{
                                    mr: 2, display: { xs: 'none', md: 'flex' },
                               
                                }}
                            >
                                <img
                                    src={logo}
                                    alt="HUGSI logo"
                                    style={{ marginLeft: 10, width: '6rem', height: '1.7rem' }}
                                />
                            </Typography>
                            <div
                                className={menuSmall}
                            // id="menu-appbar"
                            // anchorEl={anchorElNav}
                            // anchorOrigin={{
                            //     vertical: 'bottom',
                            //     horizontal: 'left',
                            // }}
                            // keepMounted
                            // transformOrigin={{
                            //     vertical: 'top',
                            //     horizontal: 'left',
                            // }}
                            // open={Boolean(anchorElNav)}
                            // onClose={handleCloseNavMenu}
                            // sx={{
                            //     display: { xs: 'block', md: 'none' },
                            // }}
                            >

                                <Link   >
                                    <Typography variant="h6">
                                        {' '}
                                        <Box  >
                                            Ranking
                                        </Box>
                                    </Typography>
                                </Link>
                                <Link  >
                                    <Typography variant="h6">
                                        {' '}
                                        <Box  >
                                            How it works
                                        </Box>

                                    </Typography>
                                </Link>
                                <Link  >
                                    <Typography variant="h6">
                                        {' '}
                                        <Box onClick={handleClick}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined} >
                                            Insights
                                        </Box>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                sx: {
                                                    mt: 2.8,
                                                    '& .MuiList-root': {
                                                        display: 'flex',
                                                    }
                                                },

                                            }}
                                            transformOrigin={{ horizontal: 'center', vertical: 'top' }}
                                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                                        >
                                            <MenuItem>
                                                <Avatar />
                                                Profile
                                            </MenuItem>
                                            <MenuItem >
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
                                <Link  >
                                    <Typography variant="h6">
                                        {' '}
                                        <Box >
                                            Groene Stad Challenge
                                        </Box>
                                    </Typography>
                                </Link>
                                <Link to="/community" >
                                    <Typography variant='h6'>
                                        {' '}
                                        <Box >
                                            Community
                                        </Box>
                                    </Typography>
                                </Link>
                            </div>
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
                        </Box>
                    </div>
                </Toolbar >
            </AppBar >
        </div >
    );
}

export default Header