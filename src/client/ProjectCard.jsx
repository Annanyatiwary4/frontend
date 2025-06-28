import { MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { templateList } from "@/lib/TemplateList";
import { Link } from "react-router";

const templatesMap = Object.fromEntries(
  templateList.map((template) => [template.id, template])
);

export default function ProjectListLayout({ projects = [], view = "grid" }) {

  
 
  if (projects.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground">
        <h3 className="text-lg font-semibold">No projects yet</h3>
        <p className="text-sm">Create your first project to get started!</p>
      </div>
    );
  }

  const gridStyle = "grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4";
  const listStyle = "flex flex-col gap-4 p-4";

  return (
    <div className={view === "grid" ? gridStyle : listStyle}>
      {projects.map((project) => (
        
        <div
          key={project.id}
          className={`border rounded-lg shadow-sm  dark:bg-zinc-900 hover:shadow-md transition ${
            view === "list" ? "flex items-center gap-6 p-4" : ""
          }`}
          
        >
          


          {/* Preview */}
          <div
              className={`overflow-hidden ${
                view === "grid"
                  ? "aspect-video rounded-t-md"
                  : "w-32 h-20 rounded-md"
              }`}
            >
              {project.thumbnail ? (
                <img
                  src={project.thumbnail}
                  alt="Project Thumbnail"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-zinc-800 flex items-center justify-center text-sm text-muted-foreground">
                  No Preview
                </div>
              )}
            </div>

          {/* Content */}
          <div className={`p-4 space-y-1 ${view === "list" ? "flex-1" : ""}`}>
            <h3 className="font-semibold text-base">{project.title}</h3>
           
            <p className="text-xs text-muted-foreground">
              Created: {project.createdAt}
            </p>
          </div>

          {/* Actions */}
          <div className={`flex items-center justify-between px-4 pb-4 ${view === "list" ? "pl-0 pb-0" : ""}`}>
            {/* //link to project details */}
           <Link to={`/editor/${project.id}`}>
              <Button size="sm" variant="outline" className="text-black">
                View
              </Button>
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size="icon" variant="ghost">
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => console.log("Edit", project.id)}>
                  Edit
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => console.log("Delete", project.id)}>
                  Delete
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      ))}
    </div>
  );
}
