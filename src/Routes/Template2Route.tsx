// routes/Template1Route.jsx or .tsx
import React from "react";
import { Route } from "react-router-dom";
import Template2 from "@/TemplatesCollection/Template2/index2";

export const Template2Routes = [
  <Route path="/template2" element={<Template2 />} />
];
export default Template2Routes;