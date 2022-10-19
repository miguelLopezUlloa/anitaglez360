import React from "react";
import Modal from '@mui/material/Modal';
import Backdrop from '@mui/material/Backdrop';

const Imagepreview = () => {
  return (
    <>
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
    </>
  );
};
export default Imagepreview;
