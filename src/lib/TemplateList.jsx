import TemplateSimple from "@/TemplatesCollection/Template1/index1";
import template1Config from "@/TemplatesCollection/Template1/temp1config";
import Templateminimal from "@/TemplatesCollection/Template2/index2";
import template2Config from "@/TemplatesCollection/Template2/temp2config";
import Templatemodern from "@/TemplatesCollection/Template3/index3";
import template3Config from "@/TemplatesCollection/Template3/temp3config";


export const templateList = [
  {
    id: template1Config.id,
    category: "Creative",
    title: template1Config.name,
    src: template1Config.thumbnail,
    content: (
      <div className="rounded-xl shadow-xl overflow-hidden border border-gray-300">
        <TemplateSimple config={template1Config} /> {/* ✅ FIXED HERE */}
      </div>
    ),
  },
  {
    id: template2Config.id,
    category: "Elegant",
    title: template2Config.name,
    src: template2Config.thumbnail,
    content: (
      <div className="rounded-xl shadow-xl overflow-hidden border border-gray-300">
        <Templateminimal config={template2Config} /> {/* ✅ FIXED */}
      </div>
    ),
  },
  {
    id: template3Config.id,
    category: "Modern",
    title: template3Config.name,
    src: template3Config.thumbnail,
    content: (
      <div className="rounded-xl shadow-xl overflow-hidden border border-gray-300">
        <Templatemodern config={template3Config} /> {/* ✅ FIXED */}
      </div>
    ),
  },
];

