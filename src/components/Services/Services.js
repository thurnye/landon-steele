import React from 'react';
import styles from './Services.module.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useDataCustomHook } from '../../Data/Data';
import colors from '../../assets/colors/colors';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import HeaderSubTitle from '../HeaderTitle/HeaderSubTitle';


const Services = () => {
  const data = useDataCustomHook();
  const {services: {services, header,}} = data;

  return(
  <div className={styles.Services}>
    <Box sx={{ flexGrow: 1, my: 5, p: 5, background: colors.primaryGrey200 }}>
      {/* <Typography gutterBottom variant="h5" component="div" sx={{my: 4}}>{header}</Typography> */}
      <HeaderTitle>{header}</HeaderTitle>

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {services.map((service, index) => (
          <Grid item xs={4} sm={8} md={4} key={`service_${service.name}_${index}`}>
            <Card sx={{ maxWidth: 345, m:'auto' }}>
              <CardMedia
                sx={{ height: 200 }}
                image={service.image}
                title={`${service.name}`}
              />
              <CardContent sx={{height: '100%'}}>
                <HeaderSubTitle>{service.name}</HeaderSubTitle>
                <Typography variant="body2" color="text.secondary" sx={{textAlign: 'start'}}>
                {service.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  </div>
)};

export default Services;
