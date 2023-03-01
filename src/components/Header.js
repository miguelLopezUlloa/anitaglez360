import React from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { useState, useEffect } from 'react';
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import MenuItem from '@mui/material/MenuItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@mui/material/Grid';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Button from '@mui/material/Button';
import Avatar from '@material-ui/core/Avatar';

import artistImg from '../images/ArtAnita.jpg';

const Header = () => {

  const items = ['Anita Gonzalez Delgado'];

  const useStyles = makeStyles((theme) => ({
    container:{
      width: 20,
      height: 620,
      backgroundColor: "black",
      opacity: 0.9,
      position: "absolute",
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      margin: "auto"
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    }
  }));

  const [open, setOpen] = React.useState(false);
  const [selectedartist, setArtistImage] = useState(null);
  const classes = useStyles();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const arrArtist=[artistImg];
  let index = 0;

  return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar>
            {/* <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}> */}
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'flex' } }}>
              <Avatar alt="Anita Gonzalez" src={arrArtist[index]} className={classes.large} />

              <Typography variant="h8" color="inherit" noWrap>
                {items.map((page) => (
                    <MenuItem key={page} selectedartist = {selectedartist} 
                        onClick={() => { setOpen(true); setArtistImage(arrArtist[index], index) }} 
                    >
                      <Typography textAlign="center">{page}</Typography>
                    </MenuItem>
                 ))}
              </Typography>

            </Box>
          </Toolbar>
        </Container>

        <Modal
            BackdropComponent={Backdrop}
            selectedartist={selectedartist}
            open={open}
            onClose={handleClose}
          >

            <Container className={classes.container} maxWidth="md">
              <Grid
                container
                justifyContent="center"
                spacing={1}
                columns={{ xs: 12, sm: 6, md: 6 }}
              >
                <Grid item md={6}>
                  {selectedartist && (
                    <Box mt={8} textAlign="center" sx={{ width: "auto" }}>
                      <img
                        src={selectedartist}
                        alt={selectedartist.name}
                        height="500px"
                      />
                    </Box>
                  )}
                 </Grid>

                  <IconButton aria-label="Cerrar" 
                              onClick={handleClose}
                              sx={{
                                position: 'absolute',
                                right: 8,
                                top: 8,
                                color: (theme) => theme.palette.grey[500],
                              }}
                              >
                      <CloseIcon />
                  </IconButton>

                  <Button onClick={handleClose} autoFocus>
                    Cerrar
                  </Button>
              </Grid>
             </Container>
         </Modal>
      </AppBar>
  );
};

export default Header;
