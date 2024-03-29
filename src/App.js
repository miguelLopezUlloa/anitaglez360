import * as React from 'react';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';

import Button from '@mui/material/Button';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

import { useState, useEffect } from 'react';

import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import { shadows } from '@mui/system';
import Copyright from "./components/Copyright";
import Header from "./components/Header";
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';
import Imagepreview from './components/Imagepreview';

import image from './images/1 ALEPH.png';
import image2 from './images/2 DESTINOS.png';
import image3 from './images/3 ESE OJO NEGRO QUE ME VISITA CADA NOCHE.png';
import image4 from './images/4 TIEMPO.png';
import image5 from './images/7 PULSO.png';
import image6 from './images/8 PLACEBO.png';
import image7 from './images/9 VOLUNTAD.png';
import image8 from './images/10 PATADAS DE AHOGADO.png';
import image9 from './images/11 POR EL HUECO DEL MUNDO.png';
import image10 from './images/12 SIN SENTIDO.png';

import imgBig1 from './images/1.jpg';
import imgBig2 from './images/2.jpg';
import imgBig3 from './images/3.jpg';
import imgBig4 from './images/4.jpg';
import imgBig7 from './images/7.jpg';
import imgBig8 from './images/8.jpg';
import imgBig9  from './images/9.jpg';
import imgBig10 from './images/10.jpg';
import imgBig11 from './images/11.jpg'
import imgBig12 from './images/12.jpg'

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const textPaints = ["Text1","Text2", "Text3","Text4","Text5","Text6","Text7", "Text8","Text9","Text10"];

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
 }));

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1976d2',
    },
  },
});

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const imagesGal = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

console.log("Inside Gallery sources");

const imageData=[image,image2,image3,image4,image5,image6,image7,image8,image9,image10];
const imgDataBig=[imgBig1,imgBig2,imgBig3,imgBig4,imgBig7,imgBig8, imgBig9, imgBig10, imgBig11, imgBig12];

//export default ImageData;

//const theme = createTheme();

export default function App() {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setselectedimage] = useState(null);
  const [imageUrl, setImageUrl] = useState(null);

  /* useEffect(() => {
    if (selectedImage) {
    setImageUrl(URL.createObjectURL(selectedImage));
    }
   }, [selectedImage]);
 */

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Header/>
      <main>
        <Box
          sx={{
            bgcolor: 'background.paper',
            pt: 8,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              gutterBottom
            >
              360 Grade New Age
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph>
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              {/* <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button> */}
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>

          {imageData.map((card,index) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }} >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    //image="https://source.unsplash.com/random"
                    //src={image2}
                    src={card}
                    alt="random"
                    onClick={ () => setselectedimage(imgDataBig[index], index)}
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      Heading
                    </Typography>
                    <Typography>
                        {textPaints[index] }
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button id= { index} size="small"  setselectedimage = {setselectedimage} 
                        onClick={() => { setOpen(true); setselectedimage(imgDataBig[index], index);}} > 
                        View 
                    </Button>
                    {/* <Button size="small">Edit</Button> */}

                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>

        {/* <Imagepreview/> */}

        <Modal
            BackdropComponent={Backdrop}
            selectedImage={selectedImage}
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
                  {selectedImage && (
                    <Box mt={8} textAlign="center" sx={{ width: "auto" }}>
                      <img
                        src={selectedImage}
                        alt={selectedImage.name}
                        height="500px"
                      />
                    </Box>
                  )}
                 </Grid>
              </Grid>
             </Container>
         </Modal>

        <Copyright/>
      </main>
    </ThemeProvider>
  );
}
