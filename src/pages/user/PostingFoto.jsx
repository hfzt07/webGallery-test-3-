import React, { useState } from 'react';
import styled from '@emotion/styled';
import { motion, AnimatePresence } from 'framer-motion';
import { FaImage, FaGlobe, FaLock, FaTimes, FaHashtag, FaSmile } from 'react-icons/fa';

const PostingContainer = styled.div`
  padding: 2rem;
  max-width: 1000px;
  margin: 0 auto;
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

const UploadForm = styled(motion.form)`
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2);
`;

const UploadArea = styled(motion.div)`
  border: 2px dashed rgba(0, 255, 135, 0.3);
  border-radius: 15px;
  padding: 3rem;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: #00ff87;
    background: rgba(0, 255, 135, 0.05);
  }

  input {
    display: none;
  }
`;

const PreviewContainer = styled(motion.div)`
  position: relative;
`;

const PreviewImage = styled.img`
  max-width: 100%;
  max-height: 400px;
  border-radius: 15px;
  margin-top: 1rem;
`;

const RemoveImageButton = styled(motion.button)`
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: rgba(255, 68, 68, 0.9);
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #ff4444;
    transform: rotate(90deg);
  }
`;

const InputGroup = styled.div`
  position: relative;
  
  svg {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
    color: rgba(255, 255, 255, 0.5);
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem 1rem 1rem 3rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ff87;
    box-shadow: 0 0 0 2px rgba(0, 255, 135, 0.2);
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  color: white;
  min-height: 120px;
  resize: vertical;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #00ff87;
    box-shadow: 0 0 0 2px rgba(0, 255, 135, 0.2);
  }
`;

const PrivacyToggle = styled.div`
  display: flex;
  gap: 1rem;
  padding: 0.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
`;

const PrivacyButton = styled(motion.button)`
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 8px;
  background: ${props => props.isSelected ? 'rgba(0, 255, 135, 0.1)' : 'transparent'};
  color: ${props => props.isSelected ? '#00ff87' : 'white'};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  svg {
    font-size: 1.2rem;
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(to right, #00ff87, #60efff);
  border: none;
  padding: 1.2rem;
  border-radius: 12px;
  color: #1a1a2e;
  font-weight: bold;
  cursor: pointer;
  font-size: 1.1rem;
  transition: all 0.3s ease;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 255, 135, 0.3);
  }

  ${props => props.isLoading && `
    cursor: not-allowed;
    opacity: 0.7;
  `}
`;

const HashtagInput = styled(Input)`
  margin-top: 0.5rem;
`;

function PostingFoto() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [title, setTitle] = useState('');
  const [caption, setCaption] = useState('');
  const [hashtags, setHashtags] = useState('');
  const [isPublic, setIsPublic] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        alert('File terlalu besar! Maksimal 5MB');
        return;
      }
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const removeImage = () => {
    setSelectedImage(null);
    setPreview(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    try {
      // Simulasi proses upload
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      console.log('Form Data:', {
        image: selectedImage,
        title,
        caption,
        hashtags: hashtags.split(' ').filter(tag => tag.startsWith('#')),
        isPublic
      });

      // Reset form
      setSelectedImage(null);
      setPreview(null);
      setTitle('');
      setCaption('');
      setHashtags('');
      
      alert('Foto berhasil diupload! (simulasi)');
      
    } catch (error) {
      console.error('Error:', error);
      alert('Gagal mengupload foto. Silakan coba lagi.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PostingContainer>
      <Title
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Bagikan Momen Anda
      </Title>
      
      <UploadForm
        onSubmit={handleSubmit}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatePresence>
          <UploadArea
            onClick={() => document.getElementById('fileInput').click()}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <input
              type="file"
              id="fileInput"
              accept="image/*"
              onChange={handleImageChange}
              hidden
            />
            {preview ? (
              <PreviewContainer>
                <PreviewImage src={preview} alt="Preview" />
                <RemoveImageButton
                  onClick={(e) => {
                    e.stopPropagation();
                    removeImage();
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <FaTimes />
                </RemoveImageButton>
              </PreviewContainer>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <FaImage style={{ fontSize: '3.5rem', color: '#00ff87', marginBottom: '1rem' }} />
                <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  Klik untuk upload foto
                </p>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem' }}>
                  Format: JPG, PNG, GIF (Max. 5MB)
                </p>
              </motion.div>
            )}
          </UploadArea>
        </AnimatePresence>

        <InputGroup>
          <FaSmile />
          <Input
            type="text"
            placeholder="Judul foto..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </InputGroup>

        <TextArea
          placeholder="Ceritakan tentang foto ini..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />

        <InputGroup>
          <FaHashtag />
          <HashtagInput
            type="text"
            placeholder="Tambahkan hashtag... (contoh: #sekolah #pembelajaran)"
            value={hashtags}
            onChange={(e) => setHashtags(e.target.value)}
          />
        </InputGroup>

        <PrivacyToggle>
          <PrivacyButton
            type="button"
            isSelected={isPublic}
            onClick={() => setIsPublic(true)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaGlobe /> Publik
          </PrivacyButton>
          <PrivacyButton
            type="button"
            isSelected={!isPublic}
            onClick={() => setIsPublic(false)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <FaLock /> Pribadi
          </PrivacyButton>
        </PrivacyToggle>

        <SubmitButton
          type="submit"
          disabled={!selectedImage || !title || isLoading}
          isLoading={isLoading}
          whileHover={!(!selectedImage || !title || isLoading) && { scale: 1.02 }}
          whileTap={!(!selectedImage || !title || isLoading) && { scale: 0.98 }}
        >
          {isLoading ? 'Mengupload...' : 'Bagikan Foto'}
        </SubmitButton>
      </UploadForm>
    </PostingContainer>
  );
}

export default PostingFoto; 