import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaHeart, FaPray, FaHandsHelping, FaUsers } from 'react-icons/fa';
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

function KarakterDetail() {
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
            Program Penguatan Karakter
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/karakter.jpg" 
            alt="Penguatan Karakter"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaPray />
            <h3>Religius</h3>
            <p>Penguatan Nilai Agama</p>
          </StatCard>

          <StatCard>
            <FaHeart />
            <h3>Integritas</h3>
            <p>Pembentukan Karakter</p>
          </StatCard>

          <StatCard>
            <FaHandsHelping />
            <h3>Gotong Royong</h3>
            <p>Kerjasama Tim</p>
          </StatCard>

          <StatCard>
            <FaUsers />
            <h3>Sosial</h3>
            <p>Kepedulian Masyarakat</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Program penguatan karakter di SMKN 1 Bulan berfokus pada pembentukan kepribadian siswa yang 
            berakhlak mulia. Melalui berbagai kegiatan keagamaan, siswa diajak untuk mendalami dan 
            mengamalkan nilai-nilai spiritual dalam kehidupan sehari-hari.
          </Text>
          <Text>
            Pembentukan integritas menjadi fokus utama melalui program-program seperti leadership camp, 
            outbound training, dan mentoring karakter. Siswa dilatih untuk menjadi pribadi yang jujur, 
            bertanggung jawab, dan memiliki etika yang baik.
          </Text>
          <Text>
            Nilai gotong royong dan kerjasama tim ditanamkan melalui berbagai kegiatan kelompok dan 
            proyek sosial. Siswa belajar untuk bekerja dalam tim, menghargai perbedaan, dan 
            berkontribusi untuk kepentingan bersama.
          </Text>
          <Text>
            Kepedulian sosial dikembangkan melalui program bakti sosial, kunjungan ke panti asuhan, 
            dan berbagai kegiatan kemasyarakatan lainnya. Hal ini membantu siswa memahami pentingnya 
            empati dan kontribusi positif kepada masyarakat.
          </Text>
        </Section>
      </Content>
    </Container>
  );
}

export default KarakterDetail; 