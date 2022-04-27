import { Box, Button, Grid, Typography } from '@mui/material'
import React from 'react'
import sqrimg from '../../images/sqr.png'
import green from '../../images/green.png'
import { ArrowForward } from '@mui/icons-material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    imageclass: {
        margin: { xs: '2rem', md: '3.5rem 1rem 2rem 1rem' }
    },
})
const Quiz = () => {
    const {
        imageclass
    } = useStyles({});
    return (
        <div>
            <Box sx={{ display: { xs: 'flex-box', md: 'flex' }, m: { xs: '3rem 1rem', md: '3rem 2rem' } }}>
                <Box >
                    <img src={sqrimg} style={{ height: '8rem' }} />
                </Box>
                <Box sx={{ textAlign: 'left', m: { xs: '1rem auto', md: '-1.2rem 2rem ' } }} >
                    <Typography variant='h4' fontWeight='bold' sx={{ mb: { xs: '1rem', md: '2rem' } }} >What do you know about sustainable green space?</Typography>
                    <Typography variant='body1' lineHeight='1.5' >Together with our partner NL Greenlabel we have put together an educational quiz where you can test your skills and learn new things about how you can have a more sustainable approach to green space</Typography>
                    <Typography sx={{ fontWeight: 'bold', color: 'rgb(105, 141, 41)', cursor: 'pointer', textTransform: 'capitalize' }}>
                        <Box sx={{ pt: { xs: '2rem', md: '2rem' } }} >Take the quiz
                            <ArrowForward sx={{ display: 'inline-block', m: '-0.4rem 0.5rem' }} />
                        </Box>
                    </Typography>
                </Box>
                <Box>
                    <img src={green} className={imageclass} />
                </Box>
            </Box >
        </div >
    )
}

export default Quiz