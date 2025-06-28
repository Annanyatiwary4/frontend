// src/pages/Editor.jsx
import React from "react"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProjectStore } from "@/store/ProjectStore";
import { templateList } from "@/lib/TemplateList";

const templatesMap = Object.fromEntries(
  templateList.map((template) => [template.id, template])
);

const Editor = () => {
  const { projectId } = useParams();
  const { currentProject, fetchProjectById } = useProjectStore();
 
  useEffect(() => {
    if (projectId) fetchProjectById(projectId);
  }, [projectId, fetchProjectById]);

  if (!currentProject) {
    return <div className="text-center text-white py-20">Loading project...</div>;
  }

  const template = templatesMap[currentProject.templateId];
  const TemplateComponent = template.component;

  return (
    <div className="min-h-screen bg-white text-black p-4">
      <h1 className="text-2xl font-bold mb-4">Editor - {currentProject.title}</h1>

      {TemplateComponent ? (
        <div className="border rounded-xl p-4 shadow">
          <TemplateComponent
            config={template.config} // default config (structure)
            resumeData={currentProject.resumeData} // dynamic user data
          />
        </div>
      ) : (
        <div className="text-red-500">❌ Template not found for this project</div>
      )}
    </div>
  );
};


export default Editor;
