import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    // projects: [{
    // name: 'chromium',

    use: {
        // ...devices['iPhone 13'],
        baseURL: 'http://10.43.6.180:55209/magenta',
        headless: false,
        screenshot: 'on',
        video: 'on',
        trace: 'on'
    },
    testDir: './tests',
    timeout: 30 * 1000, 
// }],
    reporter: [['html', { outputFolder: 'playwright-report', open: 'never'}]],
})