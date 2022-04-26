import { Box, Button, ClickAwayListener, Grid, Tooltip, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import PercentIcon from '@mui/icons-material/Percent';
import SentimentSatisfiedAltIcon from '@mui/icons-material/SentimentSatisfiedAlt';
import AccountTreeIcon from '@mui/icons-material/AccountTree';
import BarChartIcon from '@mui/icons-material/BarChart';
import PushPinIcon from '@mui/icons-material/PushPin';
import PersonIcon from '@mui/icons-material/Person';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import React from 'react'
import { width } from '@mui/system';
const useStyles = makeStyles({
    catdiv: {
        margin: 'auto 2.8rem '
    },
    category: {
        paddingBottom: '3rem',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'left',

    },

    questtooltip: {
        '& .MuiSvgIcon-root': {
            backgroundColor: 'rgb(153, 201, 60)',
            borderRadius: '0.5rem',
            width: '1rem',
            height: '1rem',
            // display: inline - block;
            fill: 'white'
        }
    },


})

const Category = () => {
    const {
        category,
        catdiv,
        details,
        questtooltip
    } = useStyles({});
    const [open, setOpen] = React.useState(false);

    const handleTooltipClose = () => {
        setOpen(false);
    };

    const handleTooltipOpen = () => {
        setOpen(true);
    };

    return (
        <div className={catdiv}>
            <Typography variant='h4' sx={{ textAlign: 'left' }}>Categories</Typography>
            <Grid container justifyContent="space-between"  >
                <Grid item className={category} >
                    <Box><PercentIcon sx={{ color: 'rgb(153, 201, 60)', width: '3rem', height: '4rem' }} /></Box>
                    <Box color='#868686' fontSize="1.05rem" maxWidth="19rem">Highest percentage of urban green space
                        <Typography sx={{
                            color: 'rgb(105, 141, 41)',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            mt: '1rem'
                        }} >
                            Utrechtse Heuvelrug Municipality
                        </Typography>
                    </Box>
                    <Box>
                        <ClickAwayListener onClickAway={handleTooltipClose}>
                            <Tooltip
                                PopperProps={{
                                    disablePortal: true,
                                }}
                                onClose={handleTooltipClose}
                                open={open}
                                disableFocusListener
                                disableHoverListener
                                disableTouchListener
                                title='Percentage of urban green space Area size of green space divided by size of total urban area of a city.'>
                                <Button onClick={handleTooltipOpen} className={questtooltip}><QuestionMarkIcon /></Button>
                            </Tooltip>
                        </ClickAwayListener>
                    </Box>
                </Grid>
                <Grid item className={category}>
                    <Box><SentimentSatisfiedAltIcon sx={{ color: 'rgb(153, 201, 60)', width: '3rem', height: '4rem' }} /></Box>
                    <Box color='#868686' fontSize="1.05rem" maxWidth="19rem">Highest percentage of urban green space
                        <Typography sx={{
                            color: 'rgb(105, 141, 41)',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            mt: '1rem'
                        }} >
                            Utrechtse Heuvelrug Municipality
                        </Typography>
                    </Box>
                    <Box>
                        <Tooltip>
                            <Button className={questtooltip}><QuestionMarkIcon /></Button>
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item className={category}>
                    <Box><AccountTreeIcon sx={{ color: 'rgb(153, 201, 60)', width: '3rem', height: '4rem' }} /></Box>
                    <Box color='#868686' fontSize="1.05rem" maxWidth="19rem">Highest percentage of urban green space
                        <Typography sx={{
                            color: 'rgb(105, 141, 41)',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            mt: '1rem'
                        }} >
                            Utrechtse Heuvelrug Municipality
                        </Typography>
                    </Box>
                    <Box>
                        <Tooltip>
                            <Button className={questtooltip}><QuestionMarkIcon /></Button>
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item className={category}>
                    <Box><PersonIcon sx={{ color: 'rgb(153, 201, 60)', width: '3rem', height: '4rem' }} /></Box>
                    <Box color='#868686' fontSize="1.05rem" maxWidth="19rem">Highest percentage of urban green space
                        <Typography sx={{
                            color: 'rgb(105, 141, 41)',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            mt: '1rem'
                        }} >
                            Utrechtse Heuvelrug Municipality
                        </Typography>
                    </Box>
                    <Box>
                        <Tooltip>
                            <Button className={questtooltip}><QuestionMarkIcon /></Button>
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item className={category}>
                    <Box><PushPinIcon sx={{ color: 'rgb(153, 201, 60)', width: '3rem', height: '4rem' }} /></Box>
                    <Box color='#868686' fontSize="1.05rem" maxWidth="19rem">Highest percentage of urban green space
                        <Typography sx={{
                            color: 'rgb(105, 141, 41)',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            mt: '1rem'
                        }} >
                            Utrechtse Heuvelrug Municipality
                        </Typography>
                    </Box>
                    <Box>
                        <Tooltip>
                            <Button className={questtooltip}><QuestionMarkIcon /></Button>
                        </Tooltip>
                    </Box>
                </Grid>
                <Grid item className={category}>
                    <Box><BarChartIcon sx={{ color: 'rgb(153, 201, 60)', width: '3rem', height: '4rem' }} /></Box>
                    <Box color='#868686' fontSize="1.05rem" maxWidth="19rem">Highest percentage of urban green space
                        <Typography sx={{
                            color: 'rgb(105, 141, 41)',
                            fontSize: '1.2rem',
                            fontWeight: '600',
                            mt: '1rem'
                        }} >
                            Utrechtse Heuvelrug Municipality
                        </Typography>
                    </Box>
                    <Box>
                        <Tooltip>
                            <Button className={questtooltip}><QuestionMarkIcon /></Button>
                        </Tooltip>
                    </Box>
                </Grid>
            </Grid>
        </div >
    )
}

export default Category