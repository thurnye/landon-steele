import React from 'react';
import styles from './Testimonials.module.css';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useDataCustomHook } from '../../Data/Data';
import Box from '@mui/material/Box';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';



const Testimonials = () => {
  const data = useDataCustomHook();
  const {testimonials: {testimonials, header,}} = data;
  const options = {
    loop: true,
    center: true,
    margin: 8,
    autoplay: true,
    dots: true,
    autoplayTimeout: 8500,
    smartSpeed: 450,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
};
  return(
  <div className={styles.Testimonials}>
    <Box sx={{ my: 5}}>
      <Typography variant="h5"  sx={{py: 4}}>{header}</Typography>
       <Box class='container-fluid'>            
        <OwlCarousel items={3}  
          className=" owl-carousel owl-theme"   
          {...options}
          >  
          {testimonials.map((el) => <Card sx={{ width: '100%', background: '#cecece' }}>
              <CardContent>
                <CardHeader
                    avatar={
                      <Avatar alt={el.name} src={el.image}/>
                    }
                    title={el.name}
                    subheader="September 14, 2016"
                  />
                <Typography variant="body2" color="text.secondary" sx={{textAlign: 'start'}}>
                  {el.testimony}
                </Typography>
              </CardContent>
              </Card>)}
        </OwlCarousel>  
        </Box>  
    </Box>

  </div>
)};
export default Testimonials;
