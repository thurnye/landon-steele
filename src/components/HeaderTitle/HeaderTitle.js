import React from 'react';
import Typography from '@mui/material/Typography';
import colors from '../../assets/colors/colors'


const HeaderTitle = ({children, sx}) => {
    return (
        <Typography gutterBottom variant="h4" component="div" sx={{

            my: 4,
            fontFamily: `Barlow Condensed, sans-serif`,
            color: colors.primary500,
            fontWeight: 700,
            ...sx
        }} >{children}</Typography>
    );
}

export default HeaderTitle;
