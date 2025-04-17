// routes/Template1Route.jsx or .tsx
import React from "react";
import { Route } from "react-router-dom";
import Template3 from "@/TemplatesCollection/Template3/index3";

export const Template2Routes = [
  <Route path="/template3" element={<Template3 />} />
];
export default Template2Routes;