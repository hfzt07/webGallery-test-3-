import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaLightbulb, FaBullseye, FaHandshake } from 'react-icons/fa';
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

function VisiMisi() {
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
            Visi & Misi
          </Title>
        </Header>

        <StatsGrid>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLightbulb />
            <h3>Visi</h3>
            <p>Terdepan dalam Inovasi</p>
          </StatCard>

          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaBullseye />
            <h3>Misi</h3>
            <p>Pengembangan Berkelanjutan</p>
          </StatCard>

          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaHandshake />
            <h3>Nilai</h3>
            <p>Integritas & Profesional</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Visi SMKN 1 Bulan adalah menjadi lembaga pendidikan kejuruan terdepan yang menghasilkan 
            lulusan berkompeten, inovatif, dan berakhlak mulia. Kami berkomitmen untuk menciptakan 
            lingkungan pembelajaran yang mendukung pengembangan potensi setiap siswa, baik dalam aspek 
            akademik maupun karakter.
          </Text>
          <Text>
            Dalam mewujudkan visi tersebut, kami menjalankan misi untuk menyelenggarakan pendidikan 
            berkualitas berbasis teknologi yang relevan dengan kebutuhan industri. Kami juga fokus pada 
            pengembangan karakter dan kepribadian siswa melalui berbagai program pembinaan dan kegiatan 
            ekstrakurikuler yang terarah.
          </Text>
          <Text>
            Misi kami juga mencakup upaya membangun kerjasama yang kuat dengan industri dan masyarakat. 
            Hal ini penting untuk memastikan bahwa kurikulum dan program pembelajaran kami selalu 
            sejalan dengan perkembangan teknologi dan kebutuhan dunia kerja. Selain itu, kami terus 
            meningkatkan kompetensi guru dan staff melalui berbagai program pengembangan profesional.
          </Text>
          <Text>
            Dengan visi dan misi yang jelas ini, SMKN 1 Bulan berkomitmen untuk terus berkembang dan 
            berinovasi dalam menghadapi tantangan pendidikan di era digital. Kami percaya bahwa dengan 
            fondasi yang kuat dalam nilai-nilai integritas, profesionalisme, dan inovasi, kami dapat 
            menghasilkan lulusan yang siap berkontribusi positif bagi masyarakat dan industri.
          </Text>
        </Section>
      </Content>
    </Container>
  );
}

export default VisiMisi; 