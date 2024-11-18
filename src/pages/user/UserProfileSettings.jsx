import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion } from 'framer-motion';
import { FaCamera, FaUser, FaEnvelope, FaPhone, FaMapMarkerAlt, FaSave } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '../../context/LoginContext';
import { db } from '../../config/firebase';
import { doc, updateDoc } from 'firebase/firestore';

const ProfileForm = styled(motion.form)`
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
`;

const FormTitle = styled.h2`
  color: #00ff87;
  text-align: center;
  font-size: 2rem;
  margin-bottom: 2rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;

  label {
    display: block;
    color: #00ff87;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  color: white;
  font-size: 1rem;
  min-height: 100px;
  resize: vertical;

  &:focus {
    outline: none;
    border-color: #00ff87;
  }
`;

const SaveButton = styled(motion.button)`
  width: 100%;
  padding: 1rem;
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  border-radius: 8px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  margin-top: 2rem;

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

const RequiredLabel = styled.label`
  display: block;
  color: #00ff87;
  margin-bottom: 0.5rem;
  font-size: 0.9rem;

  &::after {
    content: ' *';
    color: #ff4444;
  }
`;

const ErrorMessage = styled.span`
  color: #ff4444;
  font-size: 0.8rem;
  margin-top: 0.5rem;
  display: block;
`;

function UserProfileSettings() {
  const navigate = useNavigate();
  const { user } = useLogin();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    namaLengkap: '',
    kelasAkun: '',
    bioAkun: '',
    emailAkun: '',
    noTelpAkun: '',
    alamatAkun: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.namaLengkap.trim()) {
      newErrors.namaLengkap = 'Nama lengkap wajib diisi';
    }
    if (!formData.kelas.trim()) {
      newErrors.kelas = 'Kelas wajib diisi';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);

    try {
      if (!user?.id) {
        throw new Error('Silakan login terlebih dahulu');
      }

      const akunRef = doc(db, 'akun', user.id);
      
      const updateData = {
        namaLengkap: formData.namaLengkap,
        kelasAkun: formData.kelas,
        bioAkun: formData.bio || '',
        emailAkun: formData.email || '',
        noTelpAkun: formData.noTelp || '',
        alamatAkun: formData.alamat || '',
        updatedAt: new Date().toISOString()
      };

      await updateDoc(akunRef, updateData);
      alert('Profil berhasil disimpan!');
      navigate('/user/profil');
      
    } catch (error) {
      console.error('Error detail:', error);
      alert(`Terjadi kesalahan: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProfileForm
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      onSubmit={handleSubmit}
    >
      <FormTitle>Atur Profil</FormTitle>
      

      <FormGroup>
        <RequiredLabel>Nama Lengkap</RequiredLabel>
        <Input
          type="text"
          value={formData.namaLengkap}
          onChange={(e) => {
            setFormData({ ...formData, namaLengkap: e.target.value });
            if (errors.namaLengkap) {
              setErrors({ ...errors, namaLengkap: '' });
            }
          }}
          placeholder="Masukkan nama lengkap"
        />
        {errors.namaLengkap && <ErrorMessage>{errors.namaLengkap}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <RequiredLabel>Kelas</RequiredLabel>
        <Input
          type="text"
          value={formData.kelas}
          onChange={(e) => {
            setFormData({ ...formData, kelas: e.target.value });
            if (errors.kelas) {
              setErrors({ ...errors, kelas: '' });
            }
          }}
          placeholder="Contoh: XII RPL 1"
        />
        {errors.kelas && <ErrorMessage>{errors.kelas}</ErrorMessage>}
      </FormGroup>

      <FormGroup>
        <label>Bio</label>
        <TextArea
          value={formData.bio}
          onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
          placeholder="Ceritakan tentang dirimu... (opsional)"
        />
      </FormGroup>

      <FormGroup>
        <label>Email</label>
        <Input
          type="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          placeholder="Masukkan email (opsional)"
        />
      </FormGroup>

      <FormGroup>
        <label>Nomor Telepon</label>
        <Input
          type="tel"
          value={formData.noTelp}
          onChange={(e) => setFormData({ ...formData, noTelp: e.target.value })}
          placeholder="Masukkan nomor telepon (opsional)"
        />
      </FormGroup>

      <FormGroup>
        <label>Alamat</label>
        <Input
          type="text"
          value={formData.alamat}
          onChange={(e) => setFormData({ ...formData, alamat: e.target.value })}
          placeholder="Masukkan alamat (opsional)"
        />
      </FormGroup>
      

      <SaveButton
        type="submit"
        disabled={loading}
        whileHover={{ scale: loading ? 1 : 1.02 }}
        whileTap={{ scale: loading ? 1 : 0.98 }}
      >
        <FaSave />
        {loading ? 'Menyimpan...' : 'Simpan Profil'}
      </SaveButton>
    </ProfileForm>
  );
}

export default UserProfileSettings; 