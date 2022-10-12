import { Outlet } from 'react-router-dom';
import { SiteNavigate } from './SiteNavigate/SiteNavigate';
import { Suspense } from 'react';

export const Layout = () => {
  return (
    <div>
      <SiteNavigate />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </div>
  );
};
