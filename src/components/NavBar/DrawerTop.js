import React, {useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';

const Puller = styled('div')(({ theme }) => ({
  width: 150,
  height: 8,
  backgroundColor: '#ececec',
  borderRadius: 3,
  position: 'absolute',
  bottom: 8,
  left: '50%',
  transform: 'translateX(-50%)',
}));

export default function DrawerTop({open, setOpen, items}) {
  
  const navigate = useNavigate();


  const list = () => (
    <Box
      sx={{ 
        width: 'auto', 
        height: '100vh',
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center',
        flexDirection: 'column',
        borderBottomLeftRadius: '28px !important',
        borderBottomRightRadius: '28px !important',
        position:'relative'
      }}
      role="presentation"
    >
      <List>
        {items.map((el) => el.path !== '/' && 
                  <ListItem disablePadding sx={{my: 4}} key={`nav_${el.name}`}>
                    <ListItemButton
                    onClick={() => setOpen(!open)}
                    onKeyDown={() => setOpen(!open)} 
                    sx={{width: 250, textAlign: 'center', display: 'block'}}
                    >
                      {el.ref ? 
                      <Typography
                        key={`desktop_nav_sub_${el.name}`}
                        variant="h6"
                        noWrap
                        component="a"
                        href={el.path}
                        sx={{
                          mr: 2,
                          fontFamily: 'monospace',
                          fontWeight: 700,
                          letterSpacing: '.3rem',
                          color: 'inherit',
                          textDecoration: 'none',
                        }}
                      >
                        {el.name}
                      </Typography>
                        : 
                        <ListItemText primary={el.name.toUpperCase()} sx={{color: 'initial'}} onClick={() => {
                          navigate(el.path);
                          setOpen(!open)
                        }}/>
                      }
                    </ListItemButton>
                  </ListItem>
              )}
      </List>
      <Puller/>
    </Box>
  );

  return (
    <div>
        <React.Fragment>
          {/* <Button onClick={() => setOpen(!open)}>open</Button> */}
          <SwipeableDrawer
            anchor={'top'}
            open={open}
            onClose={() => setOpen(!open)}
            onOpen={() => setOpen(!open)}
            sx={{
              '&.Mui-root': {
                  borderBottomLeftRadius: '28px !important',
                  borderBottomRightRadius: '28px !important',
                },
            }}
          >
            {list()}
          </SwipeableDrawer>
        </React.Fragment>
    </div>
  );
}