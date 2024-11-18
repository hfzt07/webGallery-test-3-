import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../context/LoginContext';
import { db } from '../../config/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyState = styled.div`
  text-align: center;
  padding: 3rem;
  background: rgba(255, 255, 255, 0.02);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  max-width: 500px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);

  h2 {
    color: #00ff87;
    margin-bottom: 1rem;
    font-size: 1.8rem;
  }

  p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 2rem;
    font-size: 1.1rem;
    line-height: 1.6;
  }
`;

const SetupButton = styled(motion.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 1rem 2rem;
  border-radius: 10px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.2);
  }
`;

const ProfileContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
`;

const ProfileHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 4rem;
  margin-bottom: 3rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
`;

const ProfileImage = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid #00ff87;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ProfileInfo = styled.div`
  flex: 1;
`;

const Username = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1.5rem;

  h1 {
    color: white;
    font-size: 1.8rem;
  }
`;

const EditButton = styled(motion.button)`
  background: transparent;
  border: 1px solid #00ff87;
  color: #00ff87;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background: rgba(0, 255, 135, 0.1);
  }
`;

const Stats = styled.div`
  display: flex;
  gap: 2.5rem;
  margin: 1.5rem 0;
  color: white;

  div {
    text-align: center;

    span {
      display: block;
      font-size: 1.2rem;
      font-weight: bold;
      margin-bottom: 0.3rem;
    }

    p {
      color: rgba(255, 255, 255, 0.7);
      font-size: 0.9rem;
    }
  }
`;

const Bio = styled.div`
  color: white;
  margin-bottom: 1rem;

  h2 {
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: rgba(255, 255, 255, 0.8);
    line-height: 1.5;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-top: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;

  svg {
    color: #00ff87;
  }
`;

function UserProfile() {
  const navigate = useNavigate();
  const { user } = useLogin();
  const [loading, setLoading] = useState(true);
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    const fetchProfile = async () => {
      if (user?.id) {
        try {
          const docRef = doc(db, 'akun', user.id);
          const docSnap = await getDoc(docRef);
          
          if (docSnap.exists()) {
            const data = docSnap.data();
            setProfileData(data);
          }
        } catch (error) {
          console.error('Error fetching profile:', error);
        }
      }
      setLoading(false);
    };

    fetchProfile();
  }, [user]);

  if (loading) {
    return <div style={{ color: 'white' }}>Loading...</div>;
  }

  if (!profileData?.namaLengkap || !profileData?.kelasAkun) {
    return (
      <Container>
        <EmptyState>
          <h2>Anda Belum Atur Profil</h2>
          <p>Atur profil Anda untuk mulai berbagi momen</p>
          <SetupButton
            onClick={() => navigate('/user/profil/settings')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaUser /> Atur Profil Sekarang
          </SetupButton>
        </EmptyState>
      </Container>
    );
  }

  return (
    <ProfileContainer>
      <ProfileHeader>
        <ProfileImage>
          <img src={profileData.profileImage || "default-avatar.jpg"} alt="Profile" />
        </ProfileImage>
        
        <ProfileInfo>
          <Username>
            <h1>{profileData.namaLengkap}</h1>
            <EditButton 
              onClick={() => navigate('/user/profil/settings')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaUser /> Edit Profile
            </EditButton>
          </Username>

          <Stats>
            <div>
              <span>15</span>
              <p>Posts</p>
            </div>
            <div>
              <span>258</span>
              <p>Following</p>
            </div>
            <div>
              <span>429</span>
              <p>Followers</p>
            </div>
          </Stats>

          <Bio>
            <h2>{profileData.kelasAkun}</h2>
            <p>{profileData.bio}</p>
          </Bio>

          <ContactInfo>
            {profileData.alamat && (
              <ContactItem>
                <FaMapMarkerAlt />
                <span>{profileData.alamat}</span>
              </ContactItem>
            )}
            {profileData.email && (
              <ContactItem>
                <FaEnvelope />
                <span>{profileData.email}</span>
              </ContactItem>
            )}
            {profileData.noTelp && (
              <ContactItem>
                <FaPhone />
                <span>{profileData.noTelp}</span>
              </ContactItem>
            )}
          </ContactInfo>
        </ProfileInfo>
      </ProfileHeader>
    </ProfileContainer>
  );
}

export default UserProfile;