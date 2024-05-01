import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialog({label, data}) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="text" onClick={handleClickOpen} sx={{textTransform: 'none'}}>
        {label}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogContent sx={{  
                background: '#fafafa', 
                p: 2
                }}>
          <Card sx={{boxShadow: 'none'}}>
              <CardContent>
                <CardHeader
                    avatar={
                      <Avatar alt={data.name} src={data.image}/>
                    }
                    title={data.name}
                    subheader="September 14, 2016"
                  />
                  <Box>
                    <Typography variant="body2" color="text.secondary" sx={{textAlign: 'start'}}>
                      {data.testimony}
                    </Typography>
                  </Box>
              </CardContent>
          </Card>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} sx={{textTransform: 'none'}}>Close</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
