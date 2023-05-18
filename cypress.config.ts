import { defineConfig } from 'cypress';

module.exports = defineConfig({
    defaultCommandTimeout: 5000,
    e2e: {
        baseUrl: 'http://localhost:8000',
        specPattern: 'cypress/e2e'
    },
    retries: {
        runMode: 2,
        openMode: 2
    }
});
