import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaGraduationCap, FaLaptopCode, FaChalkboardTeacher, FaAward } from 'react-icons/fa';
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

function AkademikDetail() {
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
            Program Akademik
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/akademik.jpg" 
            alt="Program Akademik"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaLaptopCode />
            <h3>Praktik Industri</h3>
            <p>Pengalaman Kerja Nyata</p>
          </StatCard>

          <StatCard>
            <FaChalkboardTeacher />
            <h3>Teaching Factory</h3>
            <p>Pembelajaran Berbasis Produk</p>
          </StatCard>

          <StatCard>
            <FaGraduationCap />
            <h3>Sertifikasi</h3>
            <p>Kompetensi Terstandar</p>
          </StatCard>

          <StatCard>
            <FaAward />
            <h3>Kompetisi</h3>
            <p>Prestasi Nasional</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Program akademik di SMKN 1 Bulan dirancang untuk mempersiapkan siswa menghadapi tantangan industri 
            digital. Melalui kurikulum yang terintegrasi dengan kebutuhan industri, siswa tidak hanya belajar 
            teori tetapi juga praktik langsung menggunakan teknologi terkini.
          </Text>
          <Text>
            Teaching Factory menjadi salah satu program unggulan dimana siswa belajar dalam lingkungan yang 
            menyerupai industri sesungguhnya. Mereka mengerjakan proyek nyata dari klien dan belajar 
            mengelola proyek dari awal hingga akhir.
          </Text>
          <Text>
            Program sertifikasi kompetensi memastikan lulusan memiliki kualifikasi yang diakui industri. 
            Kami bekerjasama dengan berbagai lembaga sertifikasi untuk memberikan kesempatan siswa mendapatkan 
            sertifikat kompetensi di bidangnya.
          </Text>
          <Text>
            Siswa juga didorong untuk aktif mengikuti berbagai kompetisi tingkat daerah hingga nasional. 
            Hal ini membantu mengasah kemampuan teknis dan soft skill mereka, serta membuka peluang networking 
            dengan industri.
          </Text>
        </Section>
      </Content>
    </Container>
  );
}

export default AkademikDetail; 