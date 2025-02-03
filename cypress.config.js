const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pozrtn',
  viewportHeight: 1200,
  viewportWidth: 1500, 
  reporter: 'cypress-mochawesome-reporter', 
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false, // Raporları yazarken eski raporları silme
    html: true,
    json: true, 
  },
  e2e: {
    baseUrl: "https://opensource-demo.orangehrmlive.com/", 
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
    experimentalRunAllSpecs: true,  // Bütün dosyaların birlikte çalışması için
    experimentalStudio: true, // Cypress Studio
  },
});
