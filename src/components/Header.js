import React from "react";
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';

const Header = () => {
  return (
      <AppBar position="relative">
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Anita Gonzalez Delgado
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default Header;
