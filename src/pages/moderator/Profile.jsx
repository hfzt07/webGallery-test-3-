import React from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { useLogin } from '../../context/LoginContext';

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const Title = styled(motion.h2)`
  color: #00ff87;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ProfileCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  color: white;
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  label {
    color: rgba(255, 255, 255, 0.6);
    font-size: 0.9rem;
  }

  p {
    font-size: 1.1rem;
    color: #00ff87;
  }
`;

const RoleTag = styled.span`
  background: rgba(0, 255, 135, 0.1);
  color: #00ff87;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-top: 0.5rem;
`;

function ModeratorProfile() {
  const { user } = useLogin();

  return (
    <ProfileContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Profil Moderator
      </Title>

      <ProfileCard
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <ProfileInfo>
          <InfoItem>
            <label>Username</label>
            <p>{user?.username || 'Tidak tersedia'}</p>
          </InfoItem>

          <InfoItem>
            <label>Role</label>
            <RoleTag>{user?.role || 'Moderator'}</RoleTag>
          </InfoItem>

          <InfoItem>
            <label>Status</label>
            <p>Aktif</p>
          </InfoItem>

          <InfoItem>
            <label>Bergabung Sejak</label>
            <p>Januari 2024</p>
          </InfoItem>
        </ProfileInfo>
      </ProfileCard>
    </ProfileContainer>
  );
}

export default ModeratorProfile; 