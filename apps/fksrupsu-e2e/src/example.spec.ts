import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  const signInButton = page.locator('a:has-text("Home")');
  await expect(signInButton).toHaveCount(1);

  await page.screenshot({ path: 'screenshots/approval-screenshot.png' });
});
