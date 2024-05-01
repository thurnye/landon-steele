import React from 'react';
import Typography from '@mui/material/Typography';
import colors from '../../assets/colors/colors'


const FormHeader = ({children}) => {
    return (
        <Typography gutterBottom variant="body1" component="div" sx={{
            mr: {md: 4}, textAlign: {xs: 'start', md: 'center'},
            fontFamily: `Barlow Condensed, sans-serif`,
            color: colors.primary500
        }} >{children}</Typography>
    );
}

export default FormHeader;
