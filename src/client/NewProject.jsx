"use client";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function NewProject({ onCreate }) {
  const [projectName, setProjectName] = useState(""); // to store project name
  const [open, setOpen] = useState(false); // to control dialog visibility

  const handleCreate = () => {
    if (projectName.trim()) {
      onCreate(projectName); // trigger the callback to handle the new project creation
      setProjectName(""); // reset project name
      setOpen(false); // close the dialog after project creation
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="text-sm font-medium px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg">
          + New Project
        </Button>
      </DialogTrigger>

      <DialogContent className="bg-black border-gray-700 text-white z-[100]">
        <DialogHeader>
          <DialogTitle className="text-xl text-white">Create New Project</DialogTitle>
        </DialogHeader>
        <Input
          placeholder="Enter project name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)} // updates project name on change
          className="mt-4 bg-gray-800 text-white border-gray-600"
        />
        <DialogFooter className="mt-6">
          <Button
            onClick={handleCreate} // handle the project creation
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            Create Project
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
