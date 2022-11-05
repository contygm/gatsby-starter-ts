const { defineConfig } = require('cypress');

module.exports = defineConfig({
    e2e: {
        baseUrl: 'http://localhost:8000',
        specPattern: 'cypress/e2e'
    },
	retries: {
		runMode: 2,
		openMode: 2
	}
});
