"use strict";
import { CssCustomProperties } from "./utility/_cssCustomProperties";

const initializeCssCustomProperties = () => {
  const cssCustomProperties = new CssCustomProperties();
  const { initialize } = cssCustomProperties;
  initialize();
};

window.addEventListener("DOMContentLoaded", () => {
  initializeCssCustomProperties();
});
