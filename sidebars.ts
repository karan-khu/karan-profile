import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebars: SidebarsConfig = {
  // About section — preset docs plugin (routeBasePath: 'about')
  profileSidebar: ["intro", "experience", "education", "skills", "contact", "interview-flow"],

  // docsProfileSidebar lives in sidebars-profile.ts (used by the second docs plugin)
};

export default sidebars;
