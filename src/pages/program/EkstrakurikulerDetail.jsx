import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaFutbol, FaMusic, FaPencilAlt, FaCode } from 'react-icons/fa';
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

function EkstrakurikulerDetail() {
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
            Program Ekstrakurikuler
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/program-ekstrakurikuler.jpg" 
            alt="Program Ekstrakurikuler"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaFutbol />
            <h3>Olahraga</h3>
            <p>Pengembangan Fisik</p>
          </StatCard>

          <StatCard>
            <FaMusic />
            <h3>Seni</h3>
            <p>Kreativitas & Budaya</p>
          </StatCard>

          <StatCard>
            <FaPencilAlt />
            <h3>Jurnalistik</h3>
            <p>Media & Komunikasi</p>
          </StatCard>

          <StatCard>
            <FaCode />
            <h3>Coding Club</h3>
            <p>Pemrograman</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Program ekstrakurikuler di SMKN 1 Bulan dirancang untuk mengembangkan bakat dan minat siswa 
            di luar jam pelajaran. Melalui berbagai kegiatan ekstrakurikuler, siswa dapat mengeksplorasi 
            dan mengembangkan potensi diri dalam bidang yang mereka minati.
          </Text>
          <Text>
            Dalam bidang olahraga, kami memiliki berbagai cabang seperti futsal, basket, dan bulu tangkis. 
            Kegiatan ini tidak hanya melatih fisik tetapi juga mengajarkan nilai-nilai sportivitas, 
            kerjasama tim, dan disiplin.
          </Text>
          <Text>
            Bidang seni dan budaya diwadahi melalui ekstrakurikuler musik, tari, dan teater. Siswa dapat 
            mengekspresikan kreativitas mereka sekaligus melestarikan budaya lokal melalui berbagai 
            pertunjukan dan festival seni.
          </Text>
          <Text>
            Untuk mengembangkan kemampuan di bidang teknologi, Coding Club menjadi wadah bagi siswa yang 
            tertarik dengan pemrograman dan pengembangan software. Mereka dapat berkolaborasi dalam 
            berbagai proyek dan mengikuti kompetisi programming.
          </Text>
        </Section>
      </Content>
    </Container>
  );
}

export default EkstrakurikulerDetail; 