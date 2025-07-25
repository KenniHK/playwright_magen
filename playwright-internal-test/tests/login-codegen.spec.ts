import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.43.6.180:55209/magenta/login');
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('pg7');
  await page.getByRole('textbox', { name: 'User ID' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('bcabca');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('iframe').contentFrame().getByLabel('Main', { exact: true }).getByRole('link', { name: 'Manual Book' }).click();
  await page.locator('iframe').contentFrame().getByRole('link', { name: 'EMS' }).click();
  await page.locator('iframe').contentFrame().getByRole('link', { name: 'Get List MCC' }).click();
});