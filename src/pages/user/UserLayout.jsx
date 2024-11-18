import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import UserSidebar from './UserSidebar';

const LayoutContainer = styled.div`
  display: flex;
  min-height: 100vh;
  background: #1a1a2e;
`;

const MainContent = styled.main`
  flex: 1;
  margin-left: 250px;
  padding: 2rem;
`;

function UserLayout() {
  return (
    <LayoutContainer>
      <UserSidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}

export default UserLayout; 