import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.43.6.180:55209/magenta/login');
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('pg5');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('bcabca');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('iframe').contentFrame().getByRole('link', { name: 'Brand Menu untuk maintenance' }).click();
  await page.locator('iframe').contentFrame().getByRole('row', { name: 'Family Mart FMJAYA!!@@##' }).getByRole('link').click();
  await page.locator('iframe').contentFrame().getByText('Family Mart').click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Close' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Brand' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Brand' }).fill('FMJAYA!!@@##123');
  await page.locator('iframe').contentFrame().getByRole('button', { name: ' Simpan' }).click();
  await page.locator('iframe').contentFrame().getByRole('button', { name: 'Ok' }).click();
});