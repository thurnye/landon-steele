import React from 'react';
import styles from './About.module.css';
import Typography from '@mui/material/Typography';
import { useDataCustomHook } from '../../Data/Data';
import Box from '@mui/material/Box';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const MediaIcon = (socialMedia) => socialMedia.map(el => 
  <Button key={el.name} variant="text" startIcon={el.icon} href={el.path} sx={{textTransform: 'none',}}>
{el.name}
</Button>)

const About = () => {
  const data = useDataCustomHook();
  const {about: {about, header, socialMedia, image}} = data;

  return(
  <div className={styles.About}>
    <Box sx={{ my: 5, background: '#F7F2E9',}}>
      <Typography variant="h5"  sx={{py: 4}}>{header}</Typography>

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
                      height: 200
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
        <Box sx={{display: {xs: 'block', md: 'none'}, p: 3, mb: 8, background: '#F7F2E9'}}>
          <Box sx={{float: 'left', width: '50%', mr: 3}}>
            <CardMedia
              component="img"
              sx={{ width: '100%', mx: 1 }}
              image={image}
              alt="about-me"
            />
          </Box>
          <Box>

          <Typography component="div" variant="body2" gutterBottom sx={{mb: 3, textAlign: 'start'}}>
            {about}
          </Typography>
          </Box>
          <Box sx={{width: '100%'}}>
            <Stack direction="row" spacing={2}>
              {MediaIcon(socialMedia)}
            </Stack>
          </Box>
        </Box>
      </Box>
    </Box>
  </div>
)};

export default About;
