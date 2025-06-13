import React from 'react';
import { AppSidebar } from './app-sidebar';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';

const Dashboard = () => {
  return (
    <SidebarProvider>
      <div className="flex">
        <AppSidebar />
        <main className="flex-1 p-4">
          <SidebarTrigger />
          
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
