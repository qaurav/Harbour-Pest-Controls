import React, { useState, useEffect } from 'react';
import { Box, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as ScrollLink } from 'react-scroll';

const CarouselContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100vh', // Changed from 80vh to 100vh for full viewport height
  overflow: 'hidden',
}));

const CarouselInner = styled(Box)(({ currentIndex }) => ({
  display: 'flex',
  transition: 'transform 0.5s ease-in-out',
  transform: `translateX(-${currentIndex * 100}%)`,
  height: '100%',
}));

const CarouselItem = styled(Box)({
  minWidth: '100%',
  position: 'relative',
  height: '100%',
});

const CarouselImage = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  objectPosition: 'center',
});

const Overlay = styled(Box)({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
});

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    {
      image: "https://storage.googleapis.com/a1aa/image/USMOsebcjM30r1eoPMHxOAoFxbzLkCxEWPGa9o9w0EY.jpg",
      title: "Professional Pest Control Services",
      description: "Same-Day Service | 24/7 Emergency Response | Competitive Prices",
      buttonText: "Get a Quote",
      buttonLink: "contact"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/PGE2JiU4VNk5PNTOatY3F1nlgDQLO2rsfu6bjEcuie4.jpg",
      title: "Commercial Pest Control Solutions",
      description: "Customized pest control solutions for businesses of all sizes",
      buttonText: "Learn More",
      buttonLink: "services"
    },
    {
      image: "https://storage.googleapis.com/a1aa/image/ZLbmaskN9gI44k7u4gVZdzN05LHT-Wxic2BeHM8dMA0.jpg",
      title: "Termite Control Services",
      description: "Effective termite control solutions to protect your property from damage",
      buttonText: "Get Protected",
      buttonLink: "procedure"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        (prevIndex + 1) % carouselItems.length
      );
    }, 5000);

    return () => clearInterval(timer);
  }, [carouselItems.length]);

  return (
    <Box id="home" >
      <CarouselContainer>
        <CarouselInner currentIndex={currentIndex}>
          {carouselItems.map((item, index) => (
            <CarouselItem key={index}>
              <CarouselImage
                src={item.image}
                alt="Pest control service"
              />
              <Overlay>
                <Container maxWidth="md">
                  <Typography variant="h2" component="h1" 
                    sx={{ 
                      color: 'white',
                      fontWeight: 'bold',
                      mb: 2 
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="h5" 
                    sx={{ 
                      color: 'white',
                      mb: 4 
                    }}
                  >
                    {item.description}
                  </Typography>
                  <Button
                    component={ScrollLink}
                    to={item.buttonLink}
                    smooth={true}
                    duration={500}
                    variant="contained"
                    color="success"
                    size="large"
                    sx={{ 
                      bgcolor: 'green.500',
                      '&:hover': { bgcolor: 'green.600' }
                    }}
                  >
                    {item.buttonText}
                  </Button>
                </Container>
              </Overlay>
            </CarouselItem>
          ))}
        </CarouselInner>
      </CarouselContainer>
    </Box>
  );
};

export default Hero;
