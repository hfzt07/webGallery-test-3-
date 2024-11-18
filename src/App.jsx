import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Profil from './components/Profil';
import Program from './components/Program';
import Fasilitas from './components/Fasilitas';
import Footer from './components/Footer';
import Login from './components/Login';
import { LoginProvider } from './context/LoginContext';
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import ModManagement from './pages/admin/UserManagement';
import SiswaGuru from './pages/admin/StudentTeacherManagement';
import BeritaSekolah from './pages/admin/NewsManagement';
import BeritaProgram from './pages/admin/ProgramNews';
import BeritaEkskul from './pages/admin/ExtraNews';
import UserLayout from './pages/user/UserLayout';
import UserDashboard from './pages/user/Dashboard';
import UserProfile from './pages/user/UserProfile';
import UserProfileSettings from './pages/user/UserProfileSettings';
import UserNilai from './pages/user/Nilai';
import UserAbsensi from './pages/user/Absensi';
import UserJadwal from './pages/user/Jadwal';
import PostingFoto from './pages/user/PostingFoto';
import ModeratorLayout from './pages/moderator/ModeratorLayout';
import ModeratorProfile from './pages/moderator/Profile';
import PostingBerita from './pages/moderator/PostingBerita';
import SchoolDetail from './pages/SchoolDetail';
import KepsekDetail from './pages/KepsekDetail';
import VisiMisi from './pages/VisiMisi';
import AkademikDetail from './pages/program/AkademikDetail';
import KarakterDetail from './pages/program/KarakterDetail';
import EkstrakurikulerDetail from './pages/program/EkstrakurikulerDetail';
import PerpusDetail from './pages/fasilitas/PerpusDetail';
import LabKomputerDetail from './pages/fasilitas/LabKomputerDetail';
import StudioDetail from './pages/fasilitas/StudioDetail';
import JaringanDetail from './pages/fasilitas/JaringanDetail';
import AulaDetail from './pages/fasilitas/AulaDetail';
import LapanganDetail from './pages/fasilitas/LapanganDetail';
import KantinDetail from './pages/fasilitas/KantinDetail';
import TamanDetail from './pages/fasilitas/TamanDetail';
import InternetDetail from './pages/fasilitas/InternetDetail';

function App() {
  return (
    <Router basename="/webGallery-18-11-24-/">
      <LoginProvider>
        <div className="App" style={{ background: '#1a1a2e' }}>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <Profil />
                <Program />
                <Fasilitas />
                <Footer />
              </>
            } />
            <Route path="/admin/*" element={<AdminLayout />}>
              <Route index element={<AdminDashboard />} />
              <Route path="users" element={<ModManagement />} />
              <Route path="students-teachers" element={<SiswaGuru />} />
              <Route path="news" element={<BeritaSekolah />} />
              <Route path="program-news" element={<BeritaProgram />} />
              <Route path="extra-news" element={<BeritaEkskul />} />
            </Route>
            <Route path="/user/*" element={<UserLayout />}>
              <Route index element={<UserDashboard />} />
              <Route path="profil" element={<UserProfile />} />
              <Route path="profil/settings" element={<UserProfileSettings />} />
              <Route path="nilai" element={<UserNilai />} />
              <Route path="absensi" element={<UserAbsensi />} />
              <Route path="jadwal" element={<UserJadwal />} />
              <Route path="posting" element={<PostingFoto />} />
            </Route>
            <Route path="/moderator/*" element={<ModeratorLayout />}>
              <Route path="profile" element={<ModeratorProfile />} />
              <Route path="posting-berita" element={<PostingBerita />} />
            </Route>
            <Route path="/school-detail" element={<SchoolDetail />} />
            <Route path="/kepsek-detail" element={<KepsekDetail />} />
            <Route path="/visi-misi" element={<VisiMisi />} />
            <Route path="/akademik-detail" element={<AkademikDetail />} />
            <Route path="/karakter-detail" element={<KarakterDetail />} />
            <Route path="/ekstrakurikuler-detail" element={<EkstrakurikulerDetail />} />
            <Route path="/perpus-detail" element={<PerpusDetail />} />
            <Route path="/lab-komputer-detail" element={<LabKomputerDetail />} />
            <Route path="/studio-detail" element={<StudioDetail />} />
            <Route path="/jaringan-detail" element={<JaringanDetail />} />
            <Route path="/aula-detail" element={<AulaDetail />} />
            <Route path="/lapangan-detail" element={<LapanganDetail />} />
            <Route path="/kantin-detail" element={<KantinDetail />} />
            <Route path="/taman-detail" element={<TamanDetail />} />
            <Route path="/internet-detail" element={<InternetDetail />} />
          </Routes>
          <Login />
        </div>
      </LoginProvider>
    </Router>
  );
}

export default App; 