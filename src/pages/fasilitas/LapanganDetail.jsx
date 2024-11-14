import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaFutbol, FaVolleyballBall, FaBasketballBall, FaRunning } from 'react-icons/fa';
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

function LapanganDetail() {
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
            Lapangan Olahraga
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan1.jpg" 
            alt="Lapangan Olahraga"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaFutbol />
            <h3>Futsal</h3>
            <p>Lapangan Indoor</p>
          </StatCard>

          <StatCard>
            <FaVolleyballBall />
            <h3>Voli</h3>
            <p>Standar Nasional</p>
          </StatCard>

          <StatCard>
            <FaBasketballBall />
            <h3>Basket</h3>
            <p>Full Court</p>
          </StatCard>

          <StatCard>
            <FaRunning />
            <h3>Atletik</h3>
            <p>Lintasan Lari</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Fasilitas olahraga SMKN 1 Bulan dirancang untuk mendukung pengembangan fisik dan bakat 
            olahraga siswa. Dengan area yang luas dan peralatan standar nasional, siswa dapat berlatih 
            dan berkompetisi dalam berbagai cabang olahraga dengan optimal.
          </Text>
          <Text>
            Lapangan indoor multifungsi dapat digunakan untuk berbagai aktivitas seperti futsal, 
            badminton, dan kegiatan indoor lainnya. Dilengkapi dengan sistem pencahayaan dan ventilasi 
            yang baik, lapangan ini dapat digunakan dalam berbagai kondisi cuaca.
          </Text>
          <Text>
            Area outdoor terdiri dari lapangan basket full-court dan lapangan voli yang memenuhi 
            standar kompetisi. Lintasan atletik yang mengelilingi lapangan utama memungkinkan siswa 
            untuk berlatih berbagai nomor atletik seperti lari jarak pendek, menengah, dan jauh.
          </Text>
          <Text>
            Seluruh fasilitas olahraga dilengkapi dengan ruang ganti, toilet, dan area penyimpanan 
            peralatan yang memadai. Perawatan rutin dilakukan untuk memastikan keamanan dan kenyamanan 
            pengguna, serta menjaga kualitas fasilitas tetap optimal.
          </Text>

          <ImageGrid>
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan2.jpg" 
              alt="Lapangan Basket"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan3.jpg" 
              alt="Lapangan Voli"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/lapangan4.jpg" 
              alt="Lintasan Atletik"
            />
          </ImageGrid>
        </Section>
      </Content>
    </Container>
  );
}

export default LapanganDetail; 