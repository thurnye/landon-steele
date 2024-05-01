import React from 'react';
import styles from './About.module.css';
import Typography from '@mui/material/Typography';
import { useDataCustomHook } from '../../Data/Data';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import HeaderTitle from '../HeaderTitle/HeaderTitle';

const MediaIcon = (socialMedia) => socialMedia.map(el => 
  <Button key={el.path} variant="text" startIcon={el.icon} href={el.path} sx={{
    textTransform: 'none', textAlign:'center'}}>
{el.name}
</Button>)

const About = () => {
  const data = useDataCustomHook();
  const {about: {about, header, socialMedia, image}} = data;

  return(
  <Box className={styles.About} sx={{ my: 5, background: '#F7F2E9',}}>
    <Box sx={{ py: 1}}>
      <HeaderTitle>{header}</HeaderTitle>
      <Box sx={{background: '#F7F2E9',}}>
        <Box sx={{ flexGrow: 1, p: 2, display: {xs: 'none', md: 'block'}}}>
          <Grid 
          container 
          spacing={{ xs: 1, md: 2 }} 
          columns={{ xs: 12, sm: 12, md: 12 }} 
          sx={{ pb: 3}}
          >
            <Grid item xs={6} sm={6} md={3} sx={{display: {xs: 'none', sm:'block'}}}>
                <Box sx={{}}>
                  <CardMedia
                    sx={{
                      height: '100%'
                    }}
                    component="img"
                    image={image}
                    alt={header}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} sm={6} md={9} sx={{}}>
                <Box sx={{height: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', flexDirection: 'column'}}>
                  <Box sx={{textAlign: 'center'}}>
                    <Typography  component="div" variant="caption" gutterBottom sx={{ mb: 2, px: 1, textAlign:'start'}}>
                      {about}
                    </Typography>
                  </Box>
                  <Box sx={{width: '100%'}}>
                    <Stack direction="row" spacing={2}>
                      {MediaIcon(socialMedia)}
                    </Stack>
                  </Box>

                </Box>
              </Grid>
              
          </Grid>
        </Box>

        {/* Small devices */}
        <Box sx={{ p: 3, mb: 8, background: '#F7F2E9', display: {xs: 'block', md: 'none'}}}>
          <Box sx={{ width: '100%', mr: 3, display: {xs: 'block', sm: 'none', md: 'none'}}}>
            <CardMedia
              component="img"
              sx={{ width: '100%', mb: 2  }}
              image={image}
              alt="about-me"
            />
          </Box>
          <Box sx={{float: 'left', width: '50%', mr: 3}}>
            <CardMedia
              component="img"
              sx={{ width: '100%', mb: 2, display: {xs: 'none', sm: 'block', md: 'none'} }}
              image={image}
              alt="about-me"
            />
          </Box>
          <Box >
            <Typography component="div" variant="body2" gutterBottom sx={{mb: 3, textAlign: 'start'}}>
              {about}
            </Typography>
            <Box sx={{width: '100%'}}>
              <Stack direction="row" spacing={2}>
                {MediaIcon(socialMedia)}
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  </Box>
)};

export default About;
