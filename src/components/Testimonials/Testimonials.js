import React from 'react';
import styles from './Testimonials.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDataCustomHook } from '../../Data/Data';
import Box from '@mui/material/Box'; 
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Grid';
import HeaderTitle from '../HeaderTitle/HeaderTitle';




const Testimonials = () => {
  const data = useDataCustomHook();
  const {testimonials: {testimonials, header}} = data;

  return(
  <Box className={styles.Testimonials}>
    <Box sx={{ my: 5}}>
      <HeaderTitle>{header}</HeaderTitle>

          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          {testimonials.map((el) => 
            <Grid item xs={4} sm={8} md={6} key={el.name}>
              <Card sx={{  
                width: 350, m: 'auto', 
                background: '#fafafa', 
                height: '100%', 
                mb: {xs:4, md: 'initial' }
                }}>
              <CardContent>
                <CardHeader
                    avatar={
                      <Avatar alt={el.name} src={el.image}/>
                    }
                    title={el.name}
                    subheader="September 14, 2016"
                  />
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'start'}}>
                      {el.testimony}
                    </Typography>
                  </Box>
              </CardContent>
              </Card>
                </Grid>
              )}
            </Grid>
          </Box>
    </Box>  
  </Box>
)};
export default Testimonials;
