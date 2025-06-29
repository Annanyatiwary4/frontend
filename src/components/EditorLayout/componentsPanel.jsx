import React from "react";

const componentSections = [
  {
    title: "🦸 Hero Sections",
    components: [
      { id: "Hero1", label: "Hero with Image" },
      { id: "Hero2", label: "Text-Only Hero" },
    ],
  },
  {
    title: "👤 About Sections",
    components: [
      { id: "About1", label: "Classic About" },
      { id: "About3", label: "Minimal Animated About" },
    ],
  },
  {
    title: "💼 Experience Sections",
    components: [
      { id: "Experience1", label: "Timeline Layout" },
      { id: "Experience2", label: "Cards Layout" },
    ],
  },
  {
    title: "📂 Projects Sections",
    components: [
      { id: "Projects1", label: "Project Grid" },
      { id: "Projects2", label: "Project Cards" },
    ],
  },
  {
    title: "📞 Contact & Footer",
    components: [
      { id: "Contact1", label: "Simple Contact Form" },
      { id: "Footer1", label: "Basic Footer" },
    ],
  },
];

const ComponentsPanel = () => {
  return (
    <div>
      <h2 className="text-xl font-bold mb-6">📦 Components</h2>

      <div className="space-y-8">
        {componentSections.map((section) => (
          <div key={section.title}>
            <h3 className="text-sm font-semibold text-gray-600 mb-2 uppercase">
              {section.title}
            </h3>
            <ul className="space-y-2">
              {section.components.map((component) => (
                <li
                  key={component.id}
                  className="p-3 bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 cursor-pointer transition"
                >
                  {component.label}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ComponentsPanel;
