import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://10.43.6.180:55209/magenta/login');
  await page.getByRole('textbox', { name: 'User ID' }).click();
  await page.getByRole('textbox', { name: 'User ID' }).fill('pg1');
  await page.getByRole('textbox', { name: 'User ID' }).press('Tab');
  await page.getByRole('textbox', { name: 'Password' }).fill('bcabca');
  await page.getByRole('textbox', { name: 'Password' }).press('Tab');
  await page.getByRole('button', { name: 'LOGIN' }).click();
  await page.locator('a').filter({ hasText: 'Pengajuan Merchant' }).nth(1).click();
  await page.locator('a').filter({ hasText: 'Pengajuan Bulk' }).first().click();
  await page.locator('a').filter({ hasText: 'Pengajuan Merchant' }).nth(1).click();
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').selectOption('nik');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'NIK (16 digit)' }).selectOption('nik');
  await page.locator('iframe').contentFrame().locator('#ember384').click();
  await page.locator('iframe').contentFrame().getByText('Pengajuan Merchant Home Inquiry Inquiry List Merchant Cari Berdasarkan Nomor').click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'NIK (16 digit)' }).click();
  await page.locator('iframe').contentFrame().getByRole('link', { name: ' Daftar Sebagai Rekening Non' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Pemilik' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Nama Pemilik' }).fill('aRando');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'No. KTP (16 digit)' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'No. KTP (16 digit)' }).fill('asdw122');
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Paspor' }).click();
  await page.locator('iframe').contentFrame().getByRole('textbox', { name: 'Paspor' }).fill('azxcs');
});