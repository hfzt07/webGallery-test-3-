import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaAward, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
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
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled(motion.h1)`
  color: #00ff87;
  font-size: 3rem;
  margin-bottom: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const KepsekImage = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin: 2rem 0;
  border: 3px solid #00ff87;
  box-shadow: 0 0 20px rgba(0, 255, 135, 0.3);
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

function KepsekDetail() {
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
            Kepala Sekolah
          </Title>
          <KepsekImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/kepsek.jpg" 
            alt="Kepala Sekolah"
          />
          <h2 style={{ color: '#00ff87', marginTop: '1rem' }}>Dr. Ahmad Sulaiman, M.Pd</h2>
        </Header>

        <StatsGrid>
          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGraduationCap />
            <h3>25+</h3>
            <p>Tahun Pengalaman</p>
          </StatCard>

          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaAward />
            <h3>15+</h3>
            <p>Penghargaan</p>
          </StatCard>

          <StatCard
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaBriefcase />
            <h3>10+</h3>
            <p>Program Inovasi</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Assalamu'alaikum Warahmatullahi Wabarakatuh. Puji syukur kita panjatkan kehadirat Allah SWT 
            yang telah melimpahkan rahmat dan karunia-Nya kepada kita semua. Sebagai Kepala SMKN 1 Bulan, 
            saya menyambut baik dan merasa bangga atas kepercayaan yang diberikan untuk memimpin lembaga 
            pendidikan yang fokus pada pengembangan teknologi dan keterampilan digital ini.
          </Text>
          <Text>
            SMKN 1 Bulan hadir sebagai solusi atas kebutuhan tenaga kerja terampil di bidang teknologi 
            informasi dan komunikasi. Kami berkomitmen untuk menghasilkan lulusan yang tidak hanya unggul 
            dalam kompetensi teknis, tetapi juga memiliki karakter yang kuat dan berakhlak mulia. Melalui 
            berbagai program inovatif dan kerjasama dengan industri, kami terus berupaya meningkatkan 
            kualitas pembelajaran dan pengembangan siswa.
          </Text>
          <Text>
            Kepada seluruh siswa, saya mengajak untuk terus semangat dalam menuntut ilmu dan mengembangkan 
            diri. Jadikan masa sekolah ini sebagai kesempatan emas untuk mempersiapkan diri menghadapi 
            tantangan di era digital. Kepada para guru dan staff, mari kita bersama-sama menciptakan 
            lingkungan belajar yang kondusif dan inspiratif bagi seluruh warga sekolah.
          </Text>
          <Text>
            Akhir kata, saya mengucapkan terima kasih atas dukungan semua pihak dalam memajukan SMKN 1 Bulan. 
            Mari kita bersama-sama mewujudkan visi sekolah untuk menjadi lembaga pendidikan kejuruan terdepan 
            yang menghasilkan lulusan berkompeten, inovatif, dan berakhlak mulia. Wassalamu'alaikum 
            Warahmatullahi Wabarakatuh.
          </Text>
        </Section>
      </Content>
    </Container>
  );
}

export default KepsekDetail; 