import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from '@emotion/styled';
import ModeratorSidebar from './ModeratorSidebar';

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

function ModeratorLayout() {
  return (
    <LayoutContainer>
      <ModeratorSidebar />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
}

export default ModeratorLayout; 