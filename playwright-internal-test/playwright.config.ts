import { defineConfig } from '@playwright/test';

export default defineConfig({
    use: {
        baseURL: 'http://10.43.6.180:55209/magenta',
        headless: false,
        screenshot: 'only-on-failure',
        video: 'retain-on-failure',
    },
    testDir: './tests',
    timeout: 30 * 1000, 

    reporter: [['html', { outputFolder: 'playwright-report', open: 'never'}]],
})