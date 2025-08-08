import { Outlet } from 'react-router';
import { Navbar } from '../components/navbar';

export const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[var(--color-mint-gray)]">
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
