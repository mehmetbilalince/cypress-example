const { defineConfig } = require("cypress");

module.exports = defineConfig({
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
    experimentalRunAllSpecs: true,  // Bütün dosyaların birlikte çalışması için
    experimentalStudio: true, // Cypress studio
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin');
    },
    baseUrl: "https://opensource-demo.orangehrmlive.com/"
  },
});
