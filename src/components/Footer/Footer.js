import React from 'react';
import styles from './Footer.module.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDataCustomHook } from '../../Data/Data';

const Footer = () => {
  const data = useDataCustomHook();
  const {Footer: {header}} = data;
  const year = new Date().getFullYear()
  return(
  <div className={styles.Footer}>
    <Box>
      <Typography variant="caption"  sx={{mb: 1, textAlign: 'center'}}> {header} &copy; {year}</Typography>
    </Box>
  </div>
)};


export default Footer;
