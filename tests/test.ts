import { expect, test } from '@playwright/test';

test('index page has expected logo', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByAltText('Logo Sanctum')).toBeVisible();
});

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(page.getByText('Le voyage gustatif en Afrique commence ici !')).toBeVisible();
});

// test for about page, check if nav is visible
test('about page has expected nav', async ({ page }) => {
	await page.goto('/about');
	await expect(page.getByText('About')).toBeVisible();
}	);