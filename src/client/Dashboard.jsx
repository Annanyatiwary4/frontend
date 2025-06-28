import React, { useEffect, useState } from 'react';
import { AppSidebar } from './app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardTopbar from './Topbar';
import ProjectCard from './ProjectCard';
import { useProjectStore } from '@/store/ProjectStore';

const Dashboard = () => {
 
  const[view, setView] = useState('grid');
  const {projects , getUserProjects,createProject} = useProjectStore();

  useEffect (()=>{
    getUserProjects();
  },[])

  const handleCreateProject = async ({ title, templateId, resumeFile }) => {
    const projectId = await createProject(title, templateId, resumeFile); // 👈 create project in backend
    await getUserProjects(); // 🔁 refresh projects after creation
  };




  return (
    <SidebarProvider>
      <div className="flex h-screen w-screen overflow-hidden bg-black text-white">
        {/* Sidebar */}
        <AppSidebar projects={projects} />

        {/* Main Content */}
        <main className="flex-1 flex flex-col overflow-hidden">
          <DashboardTopbar onCreateProject={handleCreateProject} 
          onViewChange={setView}/>
          
          {/* Scrollable content area */}
          <div className="flex-1 overflow-y-auto">
            <ProjectCard projects={projects} view={view} />
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
};

export default Dashboard;
