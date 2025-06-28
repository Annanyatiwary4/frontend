import { useState } from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  SidebarGroupAction,
  SidebarMenuAction,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Calendar,
  Inbox,
  User2,
  ChevronUp,
  Save,
  Layout,
  Plus,
  MoreHorizontal,
  ChevronDown,
} from "lucide-react";

import { Separator } from "@/components/ui/separator";
import { useAuthStore } from "@/store/authStore";

// Static menu items
const items = [
  { title: "Theme", url: "/", icon: Inbox },
  { title: "Components", url: "#", icon: Layout },
  { title: "Saved", url: "#", icon: Save },
  { title: "Projects", url: "#", icon: Calendar },
];

export function AppSidebar({ projects = [] }) {
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
   const {user} = useAuthStore();
  return (
    <Sidebar className="bg-black text-white">
      <SidebarHeader className="bg-black" />
      <SidebarContent className="bg-black">
        <SidebarGroupLabel className="text-white text-2xl">Welcome</SidebarGroupLabel>
        <SidebarGroup>
         

          <SidebarGroupContent>
              
            <SidebarMenu>
             {items.map((item, index) => {
              const isLast = index === items.length - 1;

                            if (item.title === "Projects") {
                return (
                  <div key={item.title}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        onClick={() => setIsProjectsOpen(!isProjectsOpen)}
                        className="hover:bg-blue-50 transition-colors duration-200 rounded-md"
                      >
                        <item.icon />
                        <span>{item.title}</span>
                        <ChevronDown
                          className={`ml-auto h-4 w-4 transition-transform duration-200 ${
                            isProjectsOpen ? "rotate-180" : ""
                          }`}
                        />
                      </SidebarMenuButton>

                  {/* // Dropdown for project actions */}

                      {isProjectsOpen && (
                        <SidebarMenu className="ml-2 mt-1">
                          {projects.map((project, idx) => (
                            <div key={project.id}>
                              <SidebarMenuItem>
                                <SidebarMenuButton
                                  asChild
                                  className="hover:bg-gray-400 transition-colors duration-200 "
                                >
                                  <a href={project.url || "#"}>
                                    <Layout className="w-4 h-4" />
                                    <span className="text-sm">{project.name}</span>
                                  </a>
                                </SidebarMenuButton>
                                <DropdownMenu>
                                  <DropdownMenuTrigger asChild>
                                    <SidebarMenuAction className="hover:bg-gray-400 transition-colors duration-200">
                                      <MoreHorizontal />
                                    </SidebarMenuAction>
                                  </DropdownMenuTrigger>
                                  <DropdownMenuContent side="right" align="start" className="bg-zinc-800 text-white">
                                    <DropdownMenuItem>Edit Project</DropdownMenuItem>
                                    <DropdownMenuItem>Delete Project</DropdownMenuItem>
                                  </DropdownMenuContent>
                                </DropdownMenu>
                              </SidebarMenuItem>
                              {idx < projects.length - 1 && (
                                <Separator className="my-1 bg-zinc-700" />
                              )}
                            </div>
                          ))}
                        </SidebarMenu>
                      )}
                    </SidebarMenuItem>
                    {!isLast && <Separator className="my-2 bg-zinc-700" />}
                  </div>
                );
              }
              // Render other items
                return (
                  <div key={item.title}>
                    <SidebarMenuItem>
                      <SidebarMenuButton
                        asChild
                        className="hover:bg-zinc-200 transition-colors duration-200 rounded-md"
                      >
                        <a href={item.url}>
                          <item.icon />
                          <span>{item.title}</span>
                        </a>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                    {!isLast && <Separator className="my-2 bg-zinc-700" />}
                  </div>
                );
              })}

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* // Footer with user menu */}

      <SidebarFooter className="bg-black text-white">
        <Separator className="my-2 bg-zinc-700" />
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton >
                  <User2 /> {user}
                  <ChevronUp className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                side="top"
                className="bg-zinc-800 text-white w-[--radix-popper-anchor-width]"
              >
                <DropdownMenuItem>Account</DropdownMenuItem>
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Sign out</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
