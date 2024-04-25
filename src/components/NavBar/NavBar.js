import React, {useState} from 'react';
import AppBar from '@mui/material/AppBar';
import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Tooltip from '@mui/material/Tooltip';
import { useDataCustomHook } from '../../Data/Data';
import DrawerTop from './DrawerTop'





function NavBar() {
  const data = useDataCustomHook();
  const {navBar: {navs, name,}} = data;
  const [open, setOpen] = useState(false);

  return (
    <AppBar  sx={{background: {xs:'#fbfbfb', md:'white'}, boxShadow: 'none', color: '#726969', position: {xs: 'fixed', md: 'static'}}}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'initial' }}}>
            {/* large Screen */}
            <Box  sx={{ display: { xs: 'none', md: 'flex' }, mt: 1, alignItems: 'center' }} >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  display: { xs: 'none', md: 'flex' },
                  fontFamily: 'monospace',
                  fontWeight: 700,
                  letterSpacing: '.3rem',
                  color: 'inherit',
                  textDecoration: 'none',
                }}
              >
                <Link to={'/'} style={{textDecoration: 'none', color: 'initial'}}>{name.toUpperCase()}</Link>
              </Typography>
            </Box>

            {/* large screen menu */}
            <Box sx={{ width: '100%', display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
              {navs.map((el) => el.ref  && 
              <Box 
              sx={{
                my: 2, 
                mx: 3,
                }} 
                key={`nav_${el.name}`}
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
                <Link to={el.path} style={{textDecoration: 'none', color: 'initial', fontSize: 14 }}>{el.name.toUpperCase()}</Link>
                }
              </Box>
              )}
            </Box>
          </Box>

         {/* small Screen */}
         <Box sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center' }}>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{
              mr: 2,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
             <Link to={'/'} style={{textDecoration: 'none', color: 'initial'}}>{name.toUpperCase()}</Link>
          </Typography>
         </Box>

          {/* small screen menu */}
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip>
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="menu-items"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpen(!open)}
              color="inherit"
              sx={{p: 0}}
              >
              <MenuIcon />
            </IconButton>
              <DrawerTop open={open} setOpen={setOpen} items={navs}/>
          </Box>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBar;