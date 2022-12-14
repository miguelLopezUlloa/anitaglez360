import React from "react";
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import { Copyright } from '@material-ui/icons';

const Copyright = () => {
  return (
    <>
      <Typography variant="body2" color="text.secondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="http://anaibisgonzalez.com/">
            Anita Gonzalez Delgado
        </Link>{" "}
        {new Date().getFullYear()}.
      </Typography>
    </>
  );
};

export default Copyright;
