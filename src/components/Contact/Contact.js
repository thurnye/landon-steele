import React from 'react';
import styles from './Contact.module.css';
import { useDataCustomHook } from '../../Data/Data';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import CustomizedButton from '../CustomizedButton/CustomizedButton'



const Contact = () => {
  const data = useDataCustomHook();
  const {contact: {header}} = data;
  
  return(
  <div className={styles.Contact}>
      <Box sx={{ background: '#f4f9fb', p: 4, my: 4}}>
      <Typography variant="h5"  sx={{pt: 2, textAlign: 'center'}}>{header}</Typography>
        <Card sx={{m: 'auto', my: 5, maxWidth: 650,  }}>
          <CardContent>
              <form>
                {/* name */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: {xs: 'center', md: 'start'}, 
                  alignItems: {xs: 'start', md: 'center'},
                  flexDirection: {xs: 'column', md: 'row'},
                  my: 4
                  }}>
                  <Typography variant="body1"  sx={{mr: {md: 4}, textAlign: {xs: 'start', md: 'center'}, width: 150}}>Full Name</Typography>
                  <TextField fullWidth id="outlined-basic" variant="outlined" size="small"/>
                </Box>

                {/* Email */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: {xs: 'center', md: 'start'}, 
                  alignItems: {xs: 'start', md: 'center'},
                  flexDirection: {xs: 'column', md: 'row'},
                  mb: 4
                  }}>
                  <Typography variant="body1"  sx={{mr: {md: 4}, textAlign: {xs: 'start', md: 'center'}, width: 150}}>Email</Typography>
                  <TextField fullWidth id="outlined-basic" variant="outlined" size="small"/>
                </Box>

                {/* phoneNumber */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: {xs: 'center', md: 'start'}, 
                  alignItems: {xs: 'start', md: 'center'},
                  flexDirection: {xs: 'column', md: 'row'},
                  mb: 4
                  }}>
                  <Typography variant="body1"  sx={{mr: {md: 4}, textAlign: {xs: 'start', md: 'center'}, width: 150}}>Phone</Typography>
                  <TextField fullWidth id="outlined-basic" variant="outlined" size="small"/>
                </Box>

                {/* message */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: {xs: 'center', md: 'start'}, 
                  alignItems: {xs: 'start', md: 'center'},
                  flexDirection: {xs: 'column', md: 'row'},
                  mb: 4
                  }}>
                  <Typography variant="body1"  sx={{mr: {md: 4}, textAlign: {xs: 'start', md: 'center'}, width: 150}}>Message</Typography>
                  <TextField 
                    fullWidth 
                    id="outlined-basic" 
                    variant="outlined" 
                    size="small"
                    multiline
                    rows={5}
                  />
                </Box>
                <Box sx={{width: 250}}>
                </Box>
                  {/* // <Button variant="contained" sx={{width: 250, fontWeight: 700}}>Submit</Button> */}
                  <CustomizedButton 
                    variant="contained" 
                    label={'Search'} 
                    backgroundColor={'#000000'} 
                    id="demo-customized-button"
                    // aria-controls={open ? 'demo-customized-menu' : undefined}
                    aria-haspopup="true"
                    // aria-expanded={open ? 'true' : undefined}
                    disableElevation
                    // onClick={handleSearch}
                    sx={{fontSize: {xs: 15, md: 18}, width: 250, fontWeight: 700}}
                  />
              </form>
          </CardContent>
        </Card>
      </Box>
  </div>
)};

export default Contact;
