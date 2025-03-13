import React from "react";
import { Box, Container, Typography, Grid, Button, Paper } from "@mui/material";
import { Link as ScrollLink } from "react-scroll";

const Procedure = () => {
  return (
    <Box id="procedure" sx={{ py: 6 }}>
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          component="h1"
          textAlign="center"
          fontWeight="bold"
          mb={4}
        >
          How do we conduct our pest control procedure?
        </Typography>
        <Typography variant="body1" mb={2}>
          Expert Pest Control understands the critical need of completing
          meticulous and complete processes to eradicate all pests from your
          home. Our professionals will develop a comprehensive pest control
          strategy specifically for your infestation depending on the severity
          of the infestation.
        </Typography>
        {/* Step by Step Procedure */}
        <Grid container spacing={4} mb={4}>
          <Grid item xs={12} md={6} display="flex" justifyContent="center">
            <Box
              component="img"
              src="https://storage.googleapis.com/a1aa/image/n8FJ15MICJGqTE6Bv9d_KMoJHdQzAMlSoyGM6hJAlqc.jpg"
              alt="Pest inspection"
              sx={{
                width: 300,
                height: 200,
                objectFit: "cover",
                borderRadius: 2,
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h5" fontWeight="bold" mb={2}>
              Complete pest inspection
            </Typography>
            <Typography>
              As soon as we arrive at your residential or commercial property in
              the Sydney area, we will undertake a pest inspection of the
              location and surrounding area to look for signs of infestation.
            </Typography>
          </Grid>
        </Grid>
        {/* Flea Fumigation Section */}
        <Box
          sx={{
            bgcolor: "#15803d",
            color: "white",
            py: 6,
            px: 4,
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://storage.googleapis.com/a1aa/image/I9bGld48bFUwVL5OBKM5lXytzf8lZ9obG_A2dmgJKAI.jpg"
                alt="Flea fumigation"
                sx={{
                  bgcolor:'green.700',
                  width: "70%",
                  maxWidth: 300,
                  borderRadius: 2,
                  boxShadow: 3,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h4" fontWeight="bold" mb={2}>
                Flea Fumigation
              </Typography>
              <Typography mb={2}>
                How do we conduct our flea fumigation services in Sydney?
              </Typography>
              <Typography>
                Fleas may infest domestic pets, especially during the warmer
                months when these parasites are more prevalent.At the very
                least, this may result in itching and rashes, but could also
                lead to significant health consequences.
              </Typography>
              <Typography>
                No matter how harmless they seem, a flea infestation cannot be
                tolerated. Alpha Pest Control provides some of Sydney's most
                effective flea fumigation treatments. We guarantee that our
                specialists will give a comprehensive range of solutions and
                pest treatments to completely eradicate fleas from your home
                while keeping your pets safe and happy.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Service Locations */}
        <Paper elevation={3} sx={{ p: 4, mb: 4 }}>
          <Typography variant="h5" textAlign="center" fontWeight="bold" mb={4}>
            Where do we provide our pest control services?
          </Typography>
          <Grid container spacing={2} textAlign="center">
            {[
              "Hospitals and clinics",
              "Schools and colleges",
              "Shopping malls",
              "Motels/Hotels",
              "Child care",
              "Aged care",
              "Flats/Apartments",
              "Cafes and bars",
              "Offices and warehouses",
              "Manufacturing units",
              "Units/Houses",
              "Restaurants",
            ].map((location, index) => (
              <Grid item xs={6} md={3} key={index}>
                <Typography>{location}</Typography>
              </Grid>
            ))}
          </Grid>
        </Paper>
        {/* Call to Action */}
        <Box
          sx={{
            backgroundColor: "#15803d",
            color: "white",
            p: 4,
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Typography variant="h5" fontWeight="bold" mb={2}>
            The importance of hiring pest control experts in Sydney
          </Typography>
          <Typography mb={3}>
            When pest infestations occur, everyone wants to resolve the matter
            by DIY approaches and home remedies. However, these pests may
            threaten your health and those of your family members.
          </Typography>
          <Button
            component={ScrollLink}
            to="contact"
            smooth={true}
            duration={500}
            variant="contained"
            color="success"
            size="large"
          >
            GET A EXPRESS QUOTE
          </Button>
        </Box>

        {/* Quick Same Day Service - Green Background */}
        <Box
          sx={{
            color: "Black",
            p: 4,
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://storage.googleapis.com/a1aa/image/F1CT6e3Ctr2Oe4k616rfaEkg5cWD8e-penP3Q4ryc34.jpg"
                alt="Same day service"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  borderRadius: 2,
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" mb={2} color="black">
                Quick same day service in Sydney
              </Typography>
              <Typography mb={2} color="black">
                We are one of the most sought-after pest control companies in
                Sydney due to our same-day services. We guarantee that we will
                be at your location within an hour after the confirmation of the
                scheduled service.
              </Typography>
            </Grid>
          </Grid>
        </Box>
        {/* Domestic Pest Control - Green Background */}
        <Box
          sx={{
            color: "black",
            p: 4,
            borderRadius: 2,
            mb: 4,
          }}
        >
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h5" fontWeight="bold" mb={2}>
                Domestic pest control service in Sydney
              </Typography>
              <Typography>
                Pest infestations are the last thing you want in your house
                since they expose you to various diseases and endanger your
                health. If pests are not controlled promptly, they will multiply
                and cause further harm.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box
                component="img"
                src="https://storage.googleapis.com/a1aa/image/kORf9UYS-KIdhAFMzVmQVz_2liGQ6jitv7l4I0Pjivk.jpg"
                alt="Domestic pest control"
                sx={{
                  width: "100%",
                  maxWidth: 300,
                  borderRadius: 2,
                }}
              />
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Procedure;
