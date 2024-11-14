import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaWifi, FaBolt, FaGlobe, FaShieldAlt } from 'react-icons/fa';
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

function InternetDetail() {
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
            Titik Internet
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi1.jpg" 
            alt="Titik Internet"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaWifi />
            <h3>100+</h3>
            <p>Titik Akses</p>
          </StatCard>

          <StatCard>
            <FaBolt />
            <h3>1 Gbps</h3>
            <p>Kecepatan</p>
          </StatCard>

          <StatCard>
            <FaGlobe />
            <h3>24/7</h3>
            <p>Akses Internet</p>
          </StatCard>

          <StatCard>
            <FaShieldAlt />
            <h3>Aman</h3>
            <p>Koneksi Terlindungi</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Fasilitas internet di SMKN 1 Bulan dirancang untuk memberikan akses internet berkecepatan 
            tinggi yang dapat diandalkan di seluruh area sekolah. Dengan lebih dari 100 titik akses 
            yang strategis, siswa dan guru dapat terhubung ke internet kapan saja dan di mana saja 
            dalam lingkungan sekolah.
          </Text>
          <Text>
            Setiap titik akses dilengkapi dengan teknologi terkini yang mendukung koneksi gigabit, 
            memastikan kecepatan dan stabilitas yang optimal untuk berbagai kebutuhan pembelajaran 
            digital. Sistem load balancing memastikan distribusi bandwidth yang merata ke seluruh 
            pengguna.
          </Text>
          <Text>
            Keamanan jaringan menjadi prioritas utama dengan implementasi sistem autentikasi terpusat 
            dan enkripsi data. Setiap pengguna memiliki akun pribadi dengan kuota yang dapat dipantau, 
            serta akses ke layanan dan konten yang sesuai dengan kebijakan sekolah.
          </Text>
          <Text>
            Infrastruktur internet ini mendukung berbagai kegiatan pembelajaran digital, mulai dari 
            akses ke perpustakaan digital, pembelajaran online, hingga praktik pemrograman dan 
            pengembangan aplikasi. Tim IT support kami siap memberikan bantuan teknis untuk memastikan 
            konektivitas yang lancar.
          </Text>

          <ImageGrid>
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi2.jpg" 
              alt="Area Hotspot"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi3.jpg" 
              alt="Ruang Server"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/wifi4.jpg" 
              alt="Monitoring System"
            />
          </ImageGrid>
        </Section>
      </Content>
    </Container>
  );
}

export default InternetDetail; 