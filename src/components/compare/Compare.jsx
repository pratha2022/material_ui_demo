import { ArrowForward } from '@mui/icons-material';
import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import compback from '../../images/comback.png'

const useStyles = makeStyles({
    compare: {
        marginBottom: '1rem',
        width: '100%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: `url(${compback})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
    },
    section: {
        margin: '4rem auto 1rem',
        fontSize: '2.8rem',
        textAlign: 'center',
        maxWidth: '40rem',
        fontWeight: 'bold',
        color: 'rgb(41, 56, 69)',
        display: 'flex',
        flexDirection: 'column'
    },
    mailsection: {
        backgroundColor: 'rgb(153, 201, 60)',
        color: 'white',
        fontSize:'2rem',
        margin: '0px auto',
        padding: '5rem 0', 
        cursor: 'pointer'
    }

})
const Compare = () => {
    const {
        compare,
        section,
        mailsection
    } = useStyles({});
    return (
        <>
            <Box className={compare}>
                <Box className={section}>
                    Which city has more urban green space than Austin?
                </Box>
                <Typography sx={{ fontWeight: 'bold', color: 'rgb(105, 141, 41)', cursor: 'pointer', m: '2rem 0rem 0rem', textTransform: 'capitalize' }}>
                    <Box>Compare cities
                        <ArrowForward sx={{ display: 'inline-block', m: '-0.4rem 0.5rem' }} />
                    </Box>
                </Typography>
            </Box>
            <Box className={mailsection}>
                hello@hugsi.green
            </Box>
        </>
    )
}

export default Compare