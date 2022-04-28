import { Box } from '@material-ui/core'
import { Button } from '@mui/material'
import { makeStyles } from '@material-ui/styles'
import { Typography } from '@mui/material'
import React from 'react'
import background from '../../images/background.png'

const useStyles = makeStyles({
    banner: {
        position: 'relative',
        width: '100%',
        marginTop: '2.2rem',
        display: 'flex',
        backgroundImage: `url(${background})`,
        // backgroundPosition: 'bottom',
        backgroundSize:'cover',
        color: 'white'
    },
    box: {
        margin: '2.9rem'
    },
    category: {
        display: {
            sx: 'flex-box',
            md: 'flex'
        }

    },
    columns: {
        margin: '1rem 1rem 1rem 1rem',
        maxWidth: '30rem',
        textAlign: 'left'

    }
})
const Banner = () => {
    const {
        banner,
        box,
        columns,
        category
    } = useStyles({});
    return (
        <div>
            <span className={banner} >
                <Box className={box}>
                    <section className={columns}>
                        <Typography variant='body2'>
                            Husqvarna Urban Green Space Index
                        </Typography>
                        <Typography variant="h3" fontWeight='500'>
                            <Box> Quantifying the greenness of global cities</Box>
                        </Typography>
                        <Typography variant='subtitle2' sx={{ m: '2rem auto' }}>
                            <Box>
                                By applying computer vision and deep learning techniques on satellite images, HUGSI measures and analyzes urban green space in select cities across the globe.
                            </Box>
                        </Typography>
                        <Box
                            sx={{ display: { xs: 'flex-box', md: 'flex' }, mb: '2rem' }}>
                            <Typography variant='h6'
                                sx={{ mr: '1rem' }}>
                                How green is your city?
                            </Typography>
                            <Button
                                sx={{
                                    backgroundColor: 'white',
                                    color: 'black',
                                    borderRadius: '5px',
                                    mr: '1rem',
                                    fontSize: '14px',
                                    textTransform: 'capitalize'
                                }}>
                                To the ranking
                            </Button>
                            <Button sx={{
                                color: 'white',
                                border: '1px solid white',
                                borderRadius: '5px ',
                                fontSize: '14px',
                                textTransform: 'capitalize'
                            }}>How it works</Button>
                        </Box>
                        <Box sx={{ display: { xs: 'flex', md: 'flex' }, pb: '25vh', justifyContent:{xs:'space-between', md:'space-around'}, textAlign: 'center', alignItems: 'center' }}>
                            <Box >
                                <Typography variant='h4'>255</Typography>
                                <Typography variant='h6'>cities</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4'>60</Typography>
                                <Typography variant='h6'>countries</Typography>
                            </Box>
                            <Box>
                                <Typography variant='h4'>7</Typography>
                                <Typography variant='h6'>regions</Typography>
                            </Box>
                        </Box>
                    </section>
                </Box>
            </span >
           
        </div >
    )
}

export default Banner
