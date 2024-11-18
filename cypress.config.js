import { defineConfig } from "cypress";

export default defineConfig({
  projectId: 'pfg9wb',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
