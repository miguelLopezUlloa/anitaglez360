import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
});

export default function CenteredButtons() {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <IconButton color="primary" aria-label="Anita Face" href="https://www.facebook.com/profile.php?id=100009641911013" target="_blank">
        <FacebookIcon />
      </IconButton>
      <IconButton color="primary" aria-label="Anita Instagram">
        <InstagramIcon />
      </IconButton>
    </Box>
  );
}
