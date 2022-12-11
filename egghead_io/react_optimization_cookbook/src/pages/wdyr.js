import React from "react";

// sayfalarda, componentlerde gereksiz re-render'ları bulmaya yardımcı olur
if (process.env.NODE_ENV === "development") {
  const whyDidYouRender = require("@welldone-software/why-did-you-render");
  whyDidYouRender(React, {
    trackAllPureComponents: true
  });
}
