import React, { useState } from "react";
import AppSidebar from "./Sidebar/Clientsidebar";
import { useUser } from "@/context/UserContext";
import NewProject from "@/components/NewProject";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbSeparator, BreadcrumbList, BreadcrumbPage } from "@/components/ui/breadcrumb";
import { SidebarProvider, SidebarTrigger, SidebarInset } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

const Dashboard = () => {
  const { user } = useUser();

  // Initialize state to store projects
  const [projects, setProjects] = useState([]);

  // Handle creating a new project
  const handleCreateProject = (name) => {
    const newProject = {
      id: name.toLowerCase().replace(/\s+/g, "-"),
      name,
      lastEdited: new Date(), // Capture the current timestamp when the project is created
    };
    setProjects((prev) => [...prev, newProject]); // Add new project to the state
  };

  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <header className="flex h-16 shrink-0 bg-black items-center gap-2">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1 bg-amber-50" />
            <Separator orientation="vertical" className="mr-2 h-4" />

            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="dashboard" className="text-amber-50 txt-m font-semibold hover:text-blue-400">
                    {user ? `${user.name}'s Workspace` : "My Workspace"}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage className="text-amber-50 txt-m font-semibold  hover:text-blue-400">My Portfolio</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="ml-auto">
            <NewProject onCreate={handleCreateProject} />
          </div>
        </header>

        <div className="flex flex-1 flex-col gap-6 bg-black p-6">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Map through the projects and display them */}
            {projects.map((project) => (
              <a
                key={project.id}
                href={`/dashboard/${project.id}`}
                className="rounded-xl bg-gray-800 hover:bg-gray-700 transition-colors p-4 flex flex-col justify-between shadow-md"
              >
                <div>
                  <h3 className="text-xl font-semibold text-white">{project.name}</h3>
                  {/* Format the last edited timestamp */}
                  <p className="text-sm text-gray-300 mt-1">
                    Last edited: {new Date(project.lastEdited).toLocaleString()}
                  </p>
                </div>
                <div className="mt-4 flex justify-end">
                  <button className="text-sm font-medium px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md">
                    Open
                  </button>
                </div>
              </a>
            ))}
          </div>

          {/* Optional: Empty card or message */}
          {projects.length === 0 && (
            <div className="rounded-xl bg-gray-700 text-white p-6 text-center">
              No projects found. Click “+ New Project” to get started!
            </div>
          )}
        </div>

      </SidebarInset>
    </SidebarProvider>
  );
};

export default Dashboard;
