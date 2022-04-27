import { Box, Button, ButtonGroup, Grid, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import ar1 from '../../images/ar1.png'
import ar2 from '../../images/ar2.png'
import ar3 from '../../images/ar3.png'



const useStyles = makeStyles({
    article: {
        margin: '3rem 3rem 3rem 3rem',

    },

})

const Articles = () => {
    const {
        article,
        arimg
    } = useStyles({});
    return (
        <div className={article}>
            <Typography variant='h4' color=' rgb(66, 66, 66)' fontWeight='700' textAlign='left' marginLeft='1rem' >Latest Articles</Typography>
            <Box sx={{ display: { xs: 'flex-box', md: 'flex' } }} >
                <Button sx={{
                    backgroundImage: `url(${ar1})`,
                    width: '100%',
                    border: '0.1px solid #99c93c',
                    height: '20rem',
                    margin: '2rem 1rem 2rem 1rem',
                    textTransform: 'none',
                    backgroundSize: 'cover',
                    borderRadius: '4px',
                    padding: 0,
                    '& .MuiButtonBase-root-MuiButton-root': {
                        padding: '0px'
                    }
                }} >

                    <Typography sx={{
                        color: 'white',
                        width: '100%',
                        bottom: 0,
                        marginTop: '16rem',
                        paddingTop: '1rem',
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        height: '15%',
                        opacity: '0.6',
                        fontWeight: 'bold',
                        backgroundColor: 'black',

                    }}>Greeness does not come by itself</Typography>
                </Button>
                <Button sx={{
                    backgroundImage: `url(${ar2})`,
                    width: '100%',
                    border: '0.1px solid #99c93c',
                    height: '20rem',
                    margin: '2rem 1rem',
                    textTransform: 'none',
                    backgroundSize: 'cover',
                    borderRadius: '4px',
                    padding: 0,
                }}>
                    <Typography sx={{
                        color: 'white',
                        width: '100%',
                        bottom: 0,
                        marginTop: '16rem',
                        paddingTop: '1rem',
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        height: '15%',
                        opacity: '0.6',
                        fontWeight: 'bold',
                        backgroundColor: 'black',
                    }}>Greeness does not come by itself</Typography>
                </Button>
                <Button sx={{
                    backgroundImage: `url(${ar3})`,
                    width: '100%',
                    border: '0.1px solid #99c93c',
                    height: '20rem',
                    margin: '2rem 1rem 2rem 1rem',
                    textTransform: 'none',
                    backgroundSize: 'cover',
                    borderRadius: '4px',
                    padding: 0,
                }}>
                    <Typography sx={{
                        color: 'white',
                        width: '100%',
                        bottom: 0,
                        marginTop: '16rem',
                        paddingTop: '1rem',
                        fontSize: '1.5rem',
                        textAlign: 'center',
                        height: '15%',
                        opacity: '0.6',
                        fontWeight: 'bold',
                        backgroundColor: 'black',
                    }}>Greeness does not come by itself</Typography>
                </Button>
            </Box>
            <Button variant='contained'
                sx={{
                    backgroundColor: '#99c93c',
                    float: 'right',
                    textTransform: 'none',
                    marginRight: '1rem',
                    mt: '1.3rem',
                    borderRadius: '8px'
                }} >See all articles</Button>
        </div >
    )
}

export default Articles