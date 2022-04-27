import { Box, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React from 'react'
import compback from '../../images/comback.png'

const useStyles = makeStyles({
    compare: {
        // marginTop: '8rem',
        maxWidth: '100%',
        height:'auto',
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
    }

})
const Compare = () => {
    const {
        compare,
        section
    } = useStyles({});
    return (
        <Box className={compare}>
            <Box className={section}>
                Which city has more urban green space than Austin?
            </Box>
        </Box >
    )
}

export default Compare