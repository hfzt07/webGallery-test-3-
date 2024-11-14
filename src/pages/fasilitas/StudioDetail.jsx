import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaCamera, FaVideo, FaMicrophone, FaDesktop } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  min-height: 100vh;
  background: #1a1a2e;
  padding: 6rem 2rem 4rem;
`;

const Content = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 4rem;
`;

const Title = styled(motion.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const MainImage = styled.img`
  width: 100%;
  max-width: 800px;
  height: 400px;
  object-fit: cover;
  border-radius: 20px;
  margin: 2rem auto;
  display: block;
`;

const Section = styled(motion.section)`
  padding: 2rem;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  color: white;
  line-height: 1.8;
  margin-bottom: 2rem;
  font-size: 1.1rem;
  text-align: justify;
  text-justify: inter-word;
  padding: 0 1rem;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  margin: 3rem 0;
`;

const StatCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  padding: 1.5rem;
  border-radius: 15px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.1);

  svg {
    font-size: 2.5rem;
    color: #00ff87;
    margin-bottom: 1rem;
  }

  h3 {
    color: white;
    font-size: 1.8rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const GridImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const BackButton = styled(motion.button)`
  position: fixed;
  top: 2rem;
  left: 2rem;
  background: rgba(0, 255, 135, 0.1);
  border: none;
  padding: 1rem;
  border-radius: 50%;
  color: #00ff87;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
  transition: all 0.3s ease;

  svg {
    font-size: 1.5rem;
  }

  &:hover {
    background: rgba(0, 255, 135, 0.2);
    transform: translateX(-5px);
  }
`;

function StudioDetail() {
  const navigate = useNavigate();

  return (
    <Container>
      <BackButton
        onClick={() => navigate('/')}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <FaArrowLeft />
      </BackButton>

      <Content>
        <Header>
          <Title
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Studio Multimedia
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/studio1.jpg" 
            alt="Studio Multimedia"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaCamera />
            <h3>Pro</h3>
            <p>Peralatan Fotografi</p>
          </StatCard>

          <StatCard>
            <FaVideo />
            <h3>4K</h3>
            <p>Kualitas Video</p>
          </StatCard>

          <StatCard>
            <FaMicrophone />
            <h3>Studio</h3>
            <p>Recording Audio</p>
          </StatCard>

          <StatCard>
            <FaDesktop />
            <h3>Editing</h3>
            <p>Workstation</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Studio Multimedia SMKN 1 Bulan dilengkapi dengan peralatan profesional untuk mendukung 
            pembelajaran praktik siswa jurusan Multimedia. Studio ini dirancang untuk memberikan 
            pengalaman produksi konten digital yang setara dengan standar industri kreatif.
          </Text>
          <Text>
            Area fotografi dilengkapi dengan berbagai peralatan lighting, backdrop, dan kamera DSLR 
            profesional. Siswa dapat belajar teknik fotografi studio, product photography, dan 
            portrait photography dalam lingkungan yang ideal untuk menghasilkan karya berkualitas tinggi.
          </Text>
          <Text>
            Studio video production kami memiliki green screen, lighting setup profesional, dan 
            peralatan videografi 4K. Ruang recording audio yang kedap suara memungkinkan siswa 
            untuk memproduksi konten audio berkualitas, mulai dari voice over hingga podcast.
          </Text>
          <Text>
            Untuk post-production, tersedia workstation editing yang dilengkapi dengan software 
            industri terkini seperti Adobe Creative Suite, DaVinci Resolve, dan berbagai tools 
            profesional lainnya. Siswa dapat mengedit foto, video, dan audio dalam lingkungan 
            yang optimal.
          </Text>

          <ImageGrid>
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/studio2.jpg" 
              alt="Area Fotografi"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/studio3.jpg" 
              alt="Video Production"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/studio4.jpg" 
              alt="Editing Room"
            />
          </ImageGrid>
        </Section>
      </Content>
    </Container>
  );
}

export default StudioDetail; 