import React from 'react';
import {useHistory} from 'react-router-dom'
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import {IconButton} from '@material-ui/core';
import { Menu } from '@material-ui/core';
import MenuIcon from '@material-ui/core/Menu';
import Avatar from '@material-ui/core/Avatar';
import { Button } from '@material-ui/core';
import { Tooltip } from '@material-ui/core';
import MenuItem from '@material-ui/core/MenuItem';
import Login from '../images/login.png';
import { makeStyles,Box, Typography } from '@material-ui/core';


const useStyle = makeStyles({
  component: {
      display: 'flex',
      justifyContent: 'space-between',
      // maxHeight: 100,
      backgroundColor:'#000000'
  },
  container: {
      padding: '12px 8px', 
      textAlign: 'center'
  },
  logo: {
      width:84,
      fontSize:30,
      marginLeft: 50
      // height:80,
  },
  text:{
    color:'white',
    width:'200px'
  },
  box:{
    marginLeft:800
  }
});

const student=JSON.parse(localStorage.getItem('student'));
console.log(student);

const settings = [ 'Logout'];

const Nav = () => {
  const history = useHistory();
  const classes = useStyle();
  const student = JSON.parse(localStorage.getItem('student'))

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const logout=()=>{
    localStorage.removeItem('student');
    localStorage.removeItem('Os');
      localStorage.removeItem('Cn');
      localStorage.removeItem('Ds');
      localStorage.removeItem('To');
      localStorage.removeItem('Dm');
    history.push('/');
  }

  return (    
    <AppBar position="static" className={classes.component}>
      <Typography maxWidth="xl">
        <Toolbar >
            {/* <img src={ Logo } alt="" className={classes.logo} /> */}
            <Typography className={classes.logo}>ExamEdge</Typography>
         

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
            </Menu>
          </Box>
        
          <Box className={classes.box}> 
          {/* // sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}> */}
              <Button
                className={classes.text}
                
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {student.firstname} {student.lastname}
              </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src= {Login} />
                {/* <i class="fa fa-sign-in" aria-hidden="true"></i> */}
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center" onClick={logout} >{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Typography>
    </AppBar>
  );
};
export default Nav;

