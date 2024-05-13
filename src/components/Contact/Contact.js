import React from 'react';
import styles from './Contact.module.css';
import { useDataCustomHook } from '../../Data/Data';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import TextField from '@mui/material/TextField';
import CustomizedButton from '../CustomizedButton/CustomizedButton'
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import colors from '../../assets/colors/colors'
import FormHeader from '../HeaderTitle/FormHeader'


const Contact = () => {
  const data = useDataCustomHook();
  const {contact: {header, btnName, iamOptions}} = data;
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  
  return(
  <div className={styles.Contact}>
      <Box sx={{ background: colors.primaryBlue100, p: 4}}>
        <HeaderTitle>{header}</HeaderTitle>
        <Card sx={{m: 'auto', my: 5, maxWidth: 650,  }}>
          <CardContent>
              <form>
                {/* name */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: {xs: 'center', md: 'start'}, 
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  my: 4
                  }}>
                  <FormHeader>Full Name</FormHeader>
                  <TextField fullWidth id="outlined-basic" variant="outlined" size="small"/>
                </Box>
               

                {/* Email */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: {xs: 'center', md: 'start'}, 
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  mb: 4
                  }}>
                  <FormHeader sx={{fontSize: 20}}>Email</FormHeader>
                  <TextField fullWidth id="outlined-basic" variant="outlined" size="small"/>
                </Box>

                {/* phoneNumber */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: {xs: 'center', md: 'start'}, 
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  mb: 4
                  }}>
                  <FormHeader sx={{fontSize: 20}}>CellPhone</FormHeader>
                  <TextField fullWidth id="outlined-basic" variant="outlined" size="small"/>
                </Box>

                {/* Company Name */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: {xs: 'center', md: 'start'}, 
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  my: 4
                  }}>
                  <FormHeader sx={{fontSize: 20}}>Company Name</FormHeader>
                  <TextField fullWidth id="outlined-basic" variant="outlined" size="small"/>
                </Box>
                {/* I am a */}
                <Box sx={{
                  flexGrow: 1,
                  display: 'flex', 
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  my: 4
                  }}>
                  <FormHeader sx={{fontSize: 20}}>I am a</FormHeader>
                  <Select
                    labelId="I-am-a-select-label"
                    id="I-am-a-simple-select"
                    value={age}
                    size={'small'}
                    onChange={handleChange}
                    sx={{
                      flexGrow: 1,
                      width: '100%'
                    }}
                  >
                    {iamOptions.map((el) => <MenuItem key={el} value={el.value}>{el.label}</MenuItem>)}
                  </Select>
                </Box>

                {/* Reason for reaching out */}
                <Box sx={{
                  display: 'flex', 
                  justifyContent: {xs: 'center', md: 'start'}, 
                  alignItems: 'flex-start',
                  flexDirection: 'column',
                  mb: 4
                  }}>
                  <FormHeader sx={{fontSize: 20}}>Reason for reaching out (optional)</FormHeader>
                  <TextField 
                    fullWidth 
                    id="outlined-basic" 
                    variant="outlined" 
                    size="small"
                    multiline
                    rows={10}
                  />
                </Box>
                <Box sx={{width: 250}}>
                </Box>
                  <CustomizedButton 
                    variant="contained" 
                    label={btnName} 
                    backgroundColor={colors.accent500} 
                    id="demo-customized-button"
                    aria-haspopup="true"
                    disableElevation
                    // onClick={handleSearch}
                    sx={{fontSize: {xs: 18, md: 20}, width: 250, fontWeight: 700,  fontFamily: `Barlow Condensed, sans-serif`,}}
                  />
              </form>
          </CardContent>
        </Card>
      </Box>
  </div>
)};

export default Contact;
