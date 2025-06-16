// pages/ProjectPreview.jsx
import { templateList } from "@/lib/TemplateList";
import { useParams } from "react-router-dom";


const Editor = () => {
  const { id } = useParams();

  const projects = JSON.parse(localStorage.getItem("projects")) || [];
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="text-white p-8">Project not found</div>;

  const template = templateList.find((t) => t.id === project.templateId);

  if (!template) return <div className="text-white p-8">Template not found</div>;

  return (
    <div className="min-h-screen bg-white text-black p-6">
      {/* You can pass full resume data later */}
      {template.content}
    </div>
  );
};

export default Editor;
