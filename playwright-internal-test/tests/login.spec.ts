import { test, expect } from '@playwright/test';

test('Login ke Web Magenta', async ({ page }) => {
    await page.goto('/magenta/login');
    await page.getByPlaceholder('User ID').fill('pg7');
    await page.getByPlaceholder('Password').fill('bcabca');
    await page.getByText('LOGIN').click();

    await expect(page).toHaveURL('/home');
    await expect(page.getByTestId('navbarText')).toBeVisible();
});