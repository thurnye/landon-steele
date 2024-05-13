import React from 'react';
import styles from './Testimonials.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDataCustomHook } from '../../Data/Data';
import Box from '@mui/material/Box';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import HeaderTitle from '../HeaderTitle/HeaderTitle';
import colors from '../../assets/colors/colors';
import Carousel from '../Carousel/Carousel';

const Testimonials = () => {
  const data = useDataCustomHook();
  const {
    testimonials: { testimonials, header },
  } = data;

  return (
    <Box className={styles.Testimonials}>
      <Box sx={{ my: 5 }}>
        <HeaderTitle>{header}</HeaderTitle>
        <Carousel>
          {testimonials.map((el) => (
            <Box
              key={el.name}
              sx={{
                py: 3,
              }}
            >
              <Card
                sx={{
                  width: 350,
                  height: 400,
                  m: 'auto',
                  background: colors.primaryGrey200,
                  mb: { xs: 4, md: 'initial' },
                }}
              >
                <CardContent>
                  <CardHeader
                    avatar={<Avatar alt={el.name} src={el.image} />}
                    title={el.name}
                    // subheader="September 14, 2016"
                    sx={{
                      color: colors.accent500,
                      fontFamily: 'fontFamily: `Barlow Condensed, sans-serif`,',
                    }}
                  />
                  <Box>
                    <Typography
                      variant='body2'
                      color={colors.accent500}
                      sx={{ textAlign: 'start' }}
                    >
                      {el.testimony}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Box>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};
export default Testimonials;
