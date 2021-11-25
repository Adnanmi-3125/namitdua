import React from "react";
import {
  Typography,
  Grid,
  Box,
  Container,
  makeStyles,
} from "@material-ui/core";

import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined";
import MailOutlineOutlinedIcon from "@material-ui/icons/MailOutlineOutlined";
import PhoneAndroidOutlinedIcon from "@material-ui/icons/PhoneAndroidOutlined";

const useStyes = makeStyles((theme) => ({
  root: {
    marginTop: "100px",
    marginBottom: "100px",
  },
  title: {
    marginLeft: 5,
  },
  description: {
    marginTop: 10,
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    // flexDirection: "column",
  },
}));

function ContactInfo() {
  const classes = useStyes();

  return (
    <Box my={10} name="contact-us">
      <Container id="contact">
        <Grid container spacing={3}>
          <Grid item xs={12} md={4} className={classes.center}>
            <div style={{ minWidth: "250px", color: "white" }}>
              <Box style={{ display: "flex", alignItems: "center", color: "white" }}>
                <LocationOnOutlinedIcon />
                <Typography variant="h6" className={classes.title}>
                  Reach Us
                </Typography>
              </Box>
              <Typography variant="body2" className={classes.description}>
                64/C4, Hebbal Industrial Area, <br /> Mysuru, Karnataka 570018
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.center}>
            <div style={{ minWidth: "250px", color: "white" }}>
              <Box style={{ display: "flex", alignItems: "center",color: "white" }}>
                <MailOutlineOutlinedIcon />
                <Typography variant="h6" className={classes.title}>
                  Mail Us
                </Typography>
              </Box>
              <Typography variant="body2" className={classes.description}>
                incastt@gmail.com <br /> vivek@incastt.com
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} md={4} className={classes.center}>
            <div style={{ minWidth: "240px",color: "white" }}>
              <Box style={{ display: "flex", alignItems: "center" }}>
                <PhoneAndroidOutlinedIcon />
                <Typography variant="h6" className={classes.title}>
                  Call Us
                </Typography>
              </Box>
              <Typography variant="body2" className={classes.description}>
                0821 4282039
                <br /> +91 9741122101
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ContactInfo;
