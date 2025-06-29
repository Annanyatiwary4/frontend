"use client";

import ComponentsPanel from "@/components/EditorLayout/componentsPanel";
import Preview from "@/components/EditorLayout/Preview";
import React from "react";


// import PropertiesPanel from "./PropertiesPanel"; (optional for later)

const EditorLayout = () => {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      {/* Left: Component Panel */}
      <aside className="w-1/5 bg-gray-50 border-r p-4 overflow-y-auto">
        <ComponentsPanel />
      </aside>

      {/* Center: Live Preview */}
      <main className="w-3/5 bg-white p-4 overflow-y-auto">
        <Preview />
      </main>

      {/* Right: Placeholder for Properties Panel */}
      <aside className="w-1/5 bg-gray-50 border-l p-4 overflow-y-auto">
        <div className="text-gray-500">⚙️ Properties panel coming soon</div>
      </aside>
    </div>
  );
};

export default EditorLayout;
