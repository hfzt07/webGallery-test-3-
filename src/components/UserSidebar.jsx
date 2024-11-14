import { useNavigate } from 'react-router-dom';

// Di dalam komponen UserSidebar
const UserSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Hapus data autentikasi dari localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('userData');
    
    // Arahkan ke halaman utama (dashboard)
    navigate('/');
  };

  return (
    // ... kode sidebar lainnya
    <button onClick={handleLogout}>
      Logout
    </button>
    // ...
  );
}; 