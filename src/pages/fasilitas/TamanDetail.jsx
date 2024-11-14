import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaTree, FaWifi, FaUsers, FaLeaf } from 'react-icons/fa';
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

function TamanDetail() {
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
            Taman Sosial
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/taman1.jpg" 
            alt="Taman Sosial"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaTree />
            <h3>Hijau</h3>
            <p>Area Terbuka</p>
          </StatCard>

          <StatCard>
            <FaWifi />
            <h3>Free</h3>
            <p>Wifi Area</p>
          </StatCard>

          <StatCard>
            <FaUsers />
            <h3>Nyaman</h3>
            <p>Area Diskusi</p>
          </StatCard>

          <StatCard>
            <FaLeaf />
            <h3>Asri</h3>
            <p>Taman Edukasi</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Taman Sosial SMKN 1 Bulan merupakan ruang terbuka hijau yang dirancang sebagai area 
            interaksi dan pembelajaran outdoor bagi seluruh warga sekolah. Dengan konsep eco-friendly, 
            taman ini dilengkapi dengan berbagai fasilitas yang mendukung kegiatan belajar dan 
            bersosialisasi.
          </Text>
          <Text>
            Area ini dilengkapi dengan gazebo dan bangku taman yang nyaman untuk kegiatan diskusi 
            kelompok atau sekedar bersantai di waktu istirahat. Koneksi wifi yang tersedia memungkinkan 
            siswa untuk mengakses materi pembelajaran digital sambil menikmati suasana alam yang asri.
          </Text>
          <Text>
            Taman ini juga berfungsi sebagai laboratorium alam, dengan berbagai jenis tanaman yang 
            diberi label nama ilmiah untuk pembelajaran biologi. Desain taman yang artistik menjadikannya 
            lokasi favorit untuk kegiatan fotografi dan pembuatan konten kreatif siswa.
          </Text>
          <Text>
            Sebagai bagian dari program sekolah adiwiyata, taman ini juga menjadi contoh penerapan 
            konsep sekolah hijau dan pelestarian lingkungan. Siswa terlibat aktif dalam pemeliharaan 
            taman melalui program piket dan kegiatan ekstrakurikuler pecinta alam.
          </Text>

          <ImageGrid>
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/taman2.jpg" 
              alt="Area Gazebo"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/taman3.jpg" 
              alt="Taman Edukasi"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/taman4.jpg" 
              alt="Area Diskusi"
            />
          </ImageGrid>
        </Section>
      </Content>
    </Container>
  );
}

export default TamanDetail; 