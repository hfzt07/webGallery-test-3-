import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaNetworkWired, FaServer, FaWifi, FaTools } from 'react-icons/fa';
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

function JaringanDetail() {
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
            Ruang Praktik Jaringan
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan1.jpg" 
            alt="Ruang Praktik Jaringan"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaNetworkWired />
            <h3>50+</h3>
            <p>Unit Perangkat</p>
          </StatCard>

          <StatCard>
            <FaServer />
            <h3>10+</h3>
            <p>Server Praktik</p>
          </StatCard>

          <StatCard>
            <FaWifi />
            <h3>Gigabit</h3>
            <p>Koneksi Jaringan</p>
          </StatCard>

          <StatCard>
            <FaTools />
            <h3>Lengkap</h3>
            <p>Tools Jaringan</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Ruang Praktik Jaringan SMKN 1 Bulan dilengkapi dengan berbagai perangkat jaringan modern 
            untuk mendukung pembelajaran praktis siswa jurusan Teknik Komputer dan Jaringan. Fasilitas 
            ini dirancang untuk memberikan pengalaman hands-on dalam mengelola dan mengkonfigurasi 
            infrastruktur jaringan.
          </Text>
          <Text>
            Lab ini dilengkapi dengan berbagai perangkat jaringan seperti router, switch, access point, 
            dan server yang memungkinkan siswa untuk mempelajari dan mempraktikkan konfigurasi jaringan 
            secara langsung. Setiap workstation dilengkapi dengan tools dan software jaringan terkini 
            untuk simulasi dan monitoring jaringan.
          </Text>
          <Text>
            Siswa dapat melakukan praktik instalasi dan konfigurasi berbagai jenis jaringan, mulai dari 
            LAN, WLAN, hingga WAN. Mereka juga belajar tentang keamanan jaringan, manajemen server, 
            dan troubleshooting melalui proyek-proyek praktis yang mensimulasikan skenario dunia nyata.
          </Text>
          <Text>
            Dengan fasilitas yang lengkap ini, siswa dapat mengembangkan keterampilan teknis yang 
            dibutuhkan industri, seperti administrasi jaringan, cloud computing, dan cybersecurity. 
            Pengalaman praktis ini sangat berharga untuk mempersiapkan mereka memasuki dunia kerja 
            di bidang IT.
          </Text>

          <ImageGrid>
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan2.jpg" 
              alt="Area Server"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan3.jpg" 
              alt="Workstation"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/jaringan4.jpg" 
              alt="Peralatan Jaringan"
            />
          </ImageGrid>
        </Section>
      </Content>
    </Container>
  );
}

export default JaringanDetail; 