import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUsers, FaMusic, FaGraduationCap, FaCalendarAlt } from 'react-icons/fa';
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

function AulaDetail() {
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
            Aula Serbaguna
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/aula1.jpg" 
            alt="Aula Serbaguna"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaUsers />
            <h3>1000+</h3>
            <p>Kapasitas</p>
          </StatCard>

          <StatCard>
            <FaMusic />
            <h3>Modern</h3>
            <p>Sound System</p>
          </StatCard>

          <StatCard>
            <FaGraduationCap />
            <h3>Multi</h3>
            <p>Fungsi</p>
          </StatCard>

          <StatCard>
            <FaCalendarAlt />
            <h3>100+</h3>
            <p>Event per Tahun</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Aula Serbaguna SMKN 1 Bulan merupakan fasilitas modern yang dirancang untuk mendukung 
            berbagai kegiatan sekolah dan event berskala besar. Dengan kapasitas lebih dari 1000 orang, 
            aula ini dilengkapi dengan sistem tata suara dan pencahayaan profesional untuk mendukung 
            berbagai jenis acara.
          </Text>
          <Text>
            Ruangan ini dilengkapi dengan panggung permanen yang luas, layar proyeksi berukuran besar, 
            dan sistem audio visual terkini. Area backstage dan ruang persiapan yang nyaman memastikan 
            kelancaran setiap acara yang diselenggarakan, mulai dari upacara hingga pertunjukan seni.
          </Text>
          <Text>
            Sistem pendingin udara yang optimal dan tata akustik yang dirancang khusus menciptakan 
            kenyamanan maksimal bagi peserta acara. Aula ini juga dilengkapi dengan area lobby yang 
            luas untuk registrasi dan area pameran temporer, serta toilet yang memadai untuk mendukung 
            acara berskala besar.
          </Text>
          <Text>
            Setiap tahun, aula ini menjadi tempat penyelenggaraan berbagai event penting seperti 
            wisuda, seminar, workshop, pentas seni, dan berbagai kompetisi tingkat sekolah hingga 
            nasional. Fleksibilitas ruangan memungkinkan konfigurasi yang berbeda-beda sesuai 
            kebutuhan acara.
          </Text>

          <ImageGrid>
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/aula2.jpg" 
              alt="Panggung Utama"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/aula3.jpg" 
              alt="Area Duduk"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/aula4.jpg" 
              alt="Lobby Aula"
            />
          </ImageGrid>
        </Section>
      </Content>
    </Container>
  );
}

export default AulaDetail; 