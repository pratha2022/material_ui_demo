import SearchIcon from '@material-ui/icons/Search';
import { AppBar, Avatar, Button, InputBase, Link, Menu, MenuItem, Toolbar, Typography } from '@mui/material'
import { Box, color, fontFamily, fontWeight } from '@mui/system';
import React from 'react';
import logo from '../../images/download.png'
import husklog from '../../images/husk.png'
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
    menuSmall:{
        display: 'flex',

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
    MenuIcon: {
        color: 'black',
        
        backgroundColor: 'black',
        '& .MuiButtonBase-root': {
            color: 'black',
            border: '4px solid black'

        }
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
        MenuIcon
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
                <Toolbar className={roots} disableGutters >
                    <div className={menuu} >
                        <Typography
                            variant="subtitle1"
                            noWrap
                            component="div"
                            sx={{
                                mr: 2, display: { xs: 'none', md: 'flex' },
                                // '& .MuiList-root-MuiMenu-list': {
                                //     backgroundColor: '#99c93c'
                                // }
                            }}
                        >
                            <img
                                src={logo}
                                alt="HUGSI logo"
                                style={{ marginLeft: 10, marginRight: 20, width: '6rem', }}
                            />
                        </Typography>
                        <Box sx={{ flexGrow: 1, color: 'black', display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="x-large"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon className={MenuIcon} />
                            </IconButton>
                            <Menu
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
                                    '& .MuiTypography-root': {
                                        color: 'black',
                                        backgroundColor: '#99c93c',
                                        textDecoration: 'none',

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
                                <Link to="/ranking"  >
                                    <Typography variant="subtitle1">
                                        {' '}
                                        <Box  >
                                            Ranking
                                        </Box>
                                    </Typography>
                                </Link>
                                <Link to="/about"  >
                                    <Typography variant="subtitle1">
                                        {' '}
                                        <Box  >
                                            How it works
                                        </Box>

                                    </Typography>
                                </Link>
                                <Link to="/insights" >
                                    <Typography variant="subtitle1">
                                        {' '}
                                        <Box onClick={handleClick}
                                            aria-haspopup="true"
                                            aria-expanded={open ? 'true' : undefined} fontSize="16px" >
                                            Insights
                                        </Box>
                                        <Menu
                                            anchorEl={anchorEl}
                                            open={open}
                                            onClose={handleClose}
                                            onClick={handleClose}
                                            PaperProps={{
                                                sx: {
                                                    width: '100%',
                                                    // border: '1px solid grey',
                                                    filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.32))',
                                                    mt: 2.8,
                                                    '& .MuiList-root': {
                                                        display: 'flex',
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
                                <Link to="/groenestadchallenge"  >
                                    <Typography variant="subtitle1">
                                        {' '}
                                        <Box >
                                            Groene Stad Challenge
                                        </Box>
                                    </Typography>
                                </Link>
                                <Link to="/community" >
                                    <Typography variant='subtitle1'>
                                        {' '}
                                        <Box >
                                            Community
                                        </Box>
                                    </Typography>
                                </Link>
                                <div>
                                    <Typography
                                        variant="subtitle1"
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
                            </Menu>

                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
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

                                <Link to="/ranking"  >
                                    <Typography variant="h6">
                                        {' '}
                                        <Box  >
                                            Ranking
                                        </Box>
                                    </Typography>
                                </Link>
                                <Link to="/about"  >
                                    <Typography variant="h6">
                                        {' '}
                                        <Box  >
                                            How it works
                                        </Box>

                                    </Typography>
                                </Link>
                                <Link to="/insights" >
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
                                                   
                                                    // border: '1px solid grey',
                                                    // filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.32))',
                                                    mt: 2.8,
                                                    '& .MuiList-root': {
                                                        display: 'flex-box',
                                                        padding: 0,
                                                        justifyContent: 'center',

                                                        // '&. MuiMenu-list': {
                                                        //     // padding: 0
                                                        //     height: '1rem',
                                                        // }

                                                    }
                                                    // '& .MuiList-root-MuiMenu-list',
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
                                <Link to="/groenestadchallenge"  >
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
                        </Box>
                    </div>
                    {/* </Box> */}

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

export default Header