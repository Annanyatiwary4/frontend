import React, { useState } from 'react';
import { AppSidebar } from './app-sidebar';
import { SidebarProvider } from '@/components/ui/sidebar';
import DashboardTopbar from './Topbar';
import ProjectCard from './ProjectCard';

const Dashboard = () => {
 const [projects, setProjects] = useState(() => {
    // Load projects from localStorage
    const saved = localStorage.getItem("projects");
    return saved ? JSON.parse(saved) : [];
  });
  const[view, setView] = useState('grid');

  const handleCreateProject = (projectData) => {
  const newProject = {
    id: crypto.randomUUID(),
    name: projectData.name,
    templateId: projectData.templateId, // 👈 comes from Theme Selection
    createdAt: new Date().toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" }),


  };

  const updatedProjects = [...projects, newProject];
    setProjects(updatedProjects);
    localStorage.setItem("projects", JSON.stringify(updatedProjects));
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
