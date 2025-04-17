// routes/Template1Route.jsx or .tsx
import React from "react";
import { Route } from "react-router-dom";
import Template1 from "../TemplatesCollection/Template1/index1";

export const Template1Routes = [
  <Route path="/template1" element={<Template1 />} />
];
export default Template1Routes;