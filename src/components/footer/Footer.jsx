import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles'
import React from 'react'
import husklogo from '../../images/husklogo.png'
import ApartmentIcon from '@mui/icons-material/Apartment';
import DraftsIcon from '@mui/icons-material/Drafts';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';

const useStyles = makeStyles({
    footer: {
        backgroundColor: '#201e1e',
        color: 'white',
        zIndex: '999',
        paddingBottom: '4rem'
    },

})
const Footer = () => {
    const {
        footer,

    } = useStyles({});
    return (
        <div className={footer}>
            <Box sx={{
                display: { xs: 'flex-box', md: 'flex' }, pt: '5rem'
            }}>
                <Box
                    sx={{
                        p: '5rem'
                    }}>
                    <img src={husklogo} style={{
                        width: '8rem',

                    }} /></Box>
                <Box sx={{ pr: '3rem' }}>
                    <Typography variant='body2' sx={{ textAlign: { xs: 'justify', md: 'left' }, pl: { xs: '3rem', md: '0' } }}>
                        Since 1689, Husqvarna has manufactured high performing products and delivered industry-changing innovations such as anti-vibration and automatic chain-break on chainsaws, as well as robotic mowers. Today, Husqvarna offers a broad range of high performing outdoor power products for parks, forest and garden, and represents technological leadership in the key areas; chainsaws, trimmers, ride-on mowers and robotic mowers. Husqvarna products are sold in more than 100 countries, mainly through servicing dealers.
                    </Typography>
                    <Box sx={{
                        display: { xs: 'flex-box', md: 'flex' },  mt: "3rem", justifyContent: 'flex-start', fontWeight: 'bold', cursor: 'pointer'
                    }}>
                        <Box sx={{mb: { xs: '1rem', md: 'none' },}}>Imprint</Box>
                        <Box sx={{ ml: { xs: '0rem', md: '3rem' }, mb: { xs: '1rem', md: 'none' } }}>Privacy</Box>
                        <Box sx={{ ml: { xs: '0rem', md: '3rem' },mb: { xs: '6rem', md: 'none' }, }}>Terms of Use</Box>
                    </Box>
                </Box>
                <Box sx={{ cursor: 'pointer', px: '4rem', textAlign: { xs: 'justify', md: 'left' }, fontWeight: 'bold', width: '-webkit-fill-available' }}>
                    <Box >Ranking</Box>
                    <Box marginTop='1rem'>How it works</Box>
                    <Box marginTop='1rem'>Insights</Box>
                    <Box marginTop='1rem'>Partners</Box>

                    <Box sx={{ mt: '3rem' }}>
                        <ApartmentIcon />&nbsp; Request your city
                    </Box>
                    <Box>
                        <DraftsIcon />&nbsp; Sign up for our Newsletter
                    </Box>
                    <Box>
                        <ChatBubbleIcon />&nbsp; Got any feedback?
                    </Box>

                </Box>
            </Box>

        </div>
    )
}

export default Footer