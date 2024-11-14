import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaDesktop, FaNetworkWired, FaTools, FaUserGraduate } from 'react-icons/fa';
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

function LabKomputerDetail() {
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
            Laboratorium Komputer
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/lab1.jpg" 
            alt="Lab Komputer"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaDesktop />
            <h3>100+</h3>
            <p>Unit Komputer</p>
          </StatCard>

          <StatCard>
            <FaNetworkWired />
            <h3>1 Gbps</h3>
            <p>Koneksi Internet</p>
          </StatCard>

          <StatCard>
            <FaTools />
            <h3>Modern</h3>
            <p>Perangkat Terkini</p>
          </StatCard>

          <StatCard>
            <FaUserGraduate />
            <h3>40</h3>
            <p>Kapasitas/Lab</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Laboratorium Komputer SMKN 1 Bulan dilengkapi dengan perangkat keras dan lunak terkini untuk 
            mendukung pembelajaran praktik siswa. Setiap komputer dilengkapi dengan spesifikasi yang 
            memadai untuk menjalankan berbagai software pengembangan dan desain.
          </Text>
          <Text>
            Fasilitas ini terdiri dari tiga ruang laboratorium yang masing-masing memiliki kapasitas 
            40 siswa. Setiap lab dilengkapi dengan proyektor, AC, dan jaringan internet berkecepatan 
            tinggi untuk mendukung pembelajaran online dan praktik pemrograman.
          </Text>
          <Text>
            Software yang tersedia mencakup berbagai IDE untuk pemrograman, tools desain grafis, 
            aplikasi office, dan software khusus sesuai kebutuhan jurusan. Semua komputer terhubung 
            dalam jaringan lokal yang memungkinkan sharing resource dan praktik jaringan.
          </Text>
          <Text>
            Laboratorium juga dilengkapi dengan sistem monitoring yang memungkinkan guru untuk 
            memantau dan mengendalikan aktivitas siswa selama pembelajaran praktik. Hal ini 
            memastikan efektivitas pembelajaran dan penggunaan fasilitas yang optimal.
          </Text>

          <ImageGrid>
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/lab2.jpg" 
              alt="Ruang Praktik"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/lab3.jpg" 
              alt="Area Diskusi"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/lab4.jpg" 
              alt="Peralatan Lab"
            />
          </ImageGrid>
        </Section>
      </Content>
    </Container>
  );
}

export default LabKomputerDetail; 