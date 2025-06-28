import TemplateSimple from "@/TemplatesCollection/Template1/index1";
import template1Config from "@/TemplatesCollection/Template1/temp1config";
import Templateminimal from "@/TemplatesCollection/Template2/index2";
import template2Config from "@/TemplatesCollection/Template2/temp2config";
import Templatemodern from "@/TemplatesCollection/Template3/index3";
import template3Config from "@/TemplatesCollection/Template3/temp3config";


export const templateList = [
  {
    id: template1Config.id,
    title: template1Config.name,
    src: template1Config.thumbnail,
    config: template1Config,
    component: TemplateSimple, // ✅ pass reference, not JSX
  },
  {
    id: template2Config.id,
    title: template2Config.name,
    src: template2Config.thumbnail,
    config: template2Config,
    component: Templateminimal,
  },
  {
    id: template3Config.id,
    title: template3Config.name,
    src: template3Config.thumbnail,
    config: template3Config,
    component: Templatemodern,
  },
];