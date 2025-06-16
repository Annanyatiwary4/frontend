import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";
import { List, Grid3X3, Filter, Upload, Menu } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { templateList } from "@/lib/TemplateList";

export default function DashboardTopbar({
  onViewChange,
  onFilterChange,
  onCreateProject,
}) {
  const [view, setView] = useState("grid");
  const [filter, setFilter] = useState("latest");
  const [theme, setTheme] = useState("");

  const handleViewChange = (value) => {
    if (value) {
      setView(value);
      onViewChange?.(value);
    }
  };

  const handleFilterChange = (value) => {
    setFilter(value);
    onFilterChange?.(value);
  };

  return (
    <div className="w-full border-b border-zinc-800 bg-black text-white px-4 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center gap-4">
        {/* Sidebar trigger */}
        <SidebarTrigger className="flex items-center gap-2 rounded-md p-2 hover:bg-zinc-800">
          <Menu className="w-5 h-5" />
          <span className="sr-only">Toggle Sidebar</span>
        </SidebarTrigger>

        <div className="flex items-center gap-4">
          {/* Create Project Dialog */}
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="bg-black border-zinc-700 text-white hover:bg-zinc-800">
                New Project
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[500px] bg-zinc-900 text-white border border-zinc-700">
              <DialogHeader>
                <DialogTitle>Create New Project</DialogTitle>
                <DialogDescription className="text-zinc-400">
                  Start a new project by providing a name, selecting a theme, and uploading your resume.
                </DialogDescription>
              </DialogHeader>

              <form
                className="grid gap-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const project = {
                    id: Date.now(),
                    name: e.target.name.value,
                    templateId: theme || templateList[0].id,
                    createdAt: new Date().toISOString(),
                  };
                  onCreateProject?.(project);
                  e.target.reset();
                  setTheme("");
                }}
              >
                <div className="grid gap-2">
                  <Label htmlFor="project-name" className="text-zinc-200">Project Name</Label>
                  <Input
                    id="project-name"
                    name="name"
                    placeholder="My Portfolio"
                    className="bg-zinc-800 text-white border-zinc-700 placeholder-zinc-500"
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="theme" className="text-zinc-200">Select Theme</Label>
                  <Select value={theme} onValueChange={setTheme}>
                    <SelectTrigger
                     
                      className="bg-zinc-800 text-white border-zinc-700"
                    >
                      <SelectValue placeholder="Choose a theme" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 text-white border-zinc-700">
                      {templateList.map((template) => (
                        <SelectItem key={template.id} value={template.id}>
                          {template.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="resume" className="text-zinc-200">Upload Resume</Label>
                  <Input
                    id="resume"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    className="bg-zinc-800 text-white border-zinc-700 file:text-white"
                  />
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="outline" type="button" className="border-zinc-700 text-black hover:bg-zinc-800">
                      Cancel
                    </Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button type="submit" className="bg-zinc-800 hover:bg-zinc-700 text-white">
                      <Upload className="w-4 h-4 mr-2" />
                      Create Project
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>

          {/* View Toggle */}
          <ToggleGroup
            type="single"
            value={view}
            onValueChange={handleViewChange}
            className="border border-zinc-700 rounded-md"
          >
            <ToggleGroupItem
              value="list"
              aria-label="List View"
              className="data-[state=on]:bg-zinc-800 data-[state=on]:text-white px-2 py-1"
            >
              <List className="w-4 h-4" />
            </ToggleGroupItem>
            <ToggleGroupItem
              value="grid"
              aria-label="Grid View"
              className="data-[state=on]:bg-zinc-800 data-[state=on]:text-white px-2 py-1"
            >
              <Grid3X3 className="w-4 h-4" />
            </ToggleGroupItem>
          </ToggleGroup>

          {/* Filter Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="border-zinc-700 text-black hover:bg-zinc-200 flex items-center gap-2"
              >
                <Filter className="w-4 h-4" />
                {filter === "latest" ? "Latest" : "Oldest"}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-zinc-900 text-white border-zinc-700">
              <DropdownMenuItem onClick={() => handleFilterChange("latest")}>
                Latest
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => handleFilterChange("oldest")}>
                Oldest
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
