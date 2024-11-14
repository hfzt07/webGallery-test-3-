import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaUtensils, FaLeaf, FaShieldAlt, FaUsers } from 'react-icons/fa';
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

function KantinDetail() {
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
            Kantin Sehat
          </Title>
          <MainImage 
            src="https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin1.jpg" 
            alt="Kantin Sehat"
          />
        </Header>

        <StatsGrid>
          <StatCard>
            <FaUtensils />
            <h3>Bersih</h3>
            <p>Standar Higenis</p>
          </StatCard>

          <StatCard>
            <FaLeaf />
            <h3>Sehat</h3>
            <p>Menu Bergizi</p>
          </StatCard>

          <StatCard>
            <FaShieldAlt />
            <h3>Aman</h3>
            <p>Terjamin Mutunya</p>
          </StatCard>

          <StatCard>
            <FaUsers />
            <h3>200+</h3>
            <p>Kapasitas</p>
          </StatCard>
        </StatsGrid>

        <Section>
          <Text>
            Kantin Sehat SMKN 1 Bulan merupakan fasilitas yang dirancang untuk menyediakan makanan dan 
            minuman yang sehat, bersih, dan bergizi bagi seluruh warga sekolah. Dengan menerapkan standar 
            kebersihan yang ketat, kami memastikan setiap makanan yang disajikan aman untuk dikonsumsi.
          </Text>
          <Text>
            Area makan yang nyaman dan bersih dilengkapi dengan ventilasi yang baik dan pencahayaan yang 
            memadai. Meja dan kursi ditata dengan rapi untuk menciptakan suasana yang kondusif bagi siswa 
            dan guru untuk menikmati makanan mereka.
          </Text>
          <Text>
            Menu yang disediakan bervariasi dan memenuhi standar gizi seimbang. Setiap penjual di kantin 
            harus mengikuti pelatihan penanganan makanan dan mendapatkan sertifikasi dari Dinas Kesehatan. 
            Hal ini untuk memastikan kualitas dan keamanan makanan yang dijual.
          </Text>
          <Text>
            Kantin juga dilengkapi dengan fasilitas cuci tangan dan tempat sampah yang memadai untuk 
            mendukung kebersihan lingkungan. Pemantauan rutin dilakukan untuk memastikan standar 
            kebersihan dan kualitas makanan tetap terjaga.
          </Text>

          <ImageGrid>
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin2.jpg" 
              alt="Area Makan"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin3.jpg" 
              alt="Counter Makanan"
            />
            <GridImage 
              src="https://raw.githubusercontent.com/hfzt07/dbweb/main/kantin4.jpg" 
              alt="Menu Sehat"
            />
          </ImageGrid>
        </Section>
      </Content>
    </Container>
  );
}

export default KantinDetail; 