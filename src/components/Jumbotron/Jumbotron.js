import React from 'react';
import styles from './Jumbotron.module.css';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MobileStepper from '@mui/material/MobileStepper';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: 'San Francisco – Oakland Bay Bridge, United States',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];



const Jumbotron = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  return(
  <div className={styles.Jumbotron}>
    <Box sx={{  flexGrow: 1, mt: 2, position: 'relative' }}>
      {/* <Paper
        square
        elevation={0}
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: 50,
          pl: 2,
          bgcolor: 'background.default',
        }}
      >
        <Typography>{images[activeStep].label}</Typography>
      </Paper> */}
      <AutoPlaySwipeableViews
        interval={7000}
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box
                component="img"
                sx={{
                  height: {xs: 250, sm: '30vh', md:'40vh', lg: '50vh'},
                  display: 'block',
                  // maxWidth: 400,
                  overflow: 'hidden',
                  width: '100%',
                }}
                src={step.imgPath}
                alt={step.label}
              />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
      />
      {/* overlay */}
      <Box sx={{
        width: '99.7%',
        height: {xs: 250, sm: '30vh', md:'40vh', lg: '50vh'},
        position: 'absolute',
        top: 0,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
      }}>
        <Button 
        size="small" 
        onClick={handleBack} 
        disabled={activeStep === 0}
        sx={{color: 'white'}}
        >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowRight sx={{fontSize: 20}}/>
            ) : (
              <KeyboardArrowLeft sx={{fontSize: 20}}/>
            )}
          </Button>
        

        <Box sx={{ flexGrow: 1, height: 'inherit', display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'}}>
          <Typography variant="h4" gutterBottom sx={{color: 'white'}}>Lorem Ipsum</Typography>
          <Button variant="outlined" sx={{color: 'white', borderColor: 'white'}}>Click Me!!!!</Button>
        </Box>
        <Button
            size="small"
            onClick={handleNext}
            disabled={activeStep === maxSteps - 1}
            sx={{color: 'white'}}
          >
            {theme.direction === 'rtl' ? (
              <KeyboardArrowLeft sx={{fontSize: 20}}/>
            ) : (
              <KeyboardArrowRight sx={{fontSize: 20}}/>
            )}
          </Button>
      </Box>
    </Box>
  </div>
)};

export default Jumbotron;
