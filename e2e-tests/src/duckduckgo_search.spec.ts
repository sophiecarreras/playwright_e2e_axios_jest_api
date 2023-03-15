import { test, expect } from '@playwright/test';

test('DuckDuckGo search test', async ({ page }) => {
  // Step 1: Open URL
  await page.goto('https://duckduckgo.com');

  // Step 2: Enter 'The dev-friendly football API' in the search box
  await page.fill('#search_form_input_homepage', 'The dev-friendly football API');

  // Step 3: Do the search
  await page.click('#search_button_homepage');

  // Step 4: Click on the first search result link
  const firstResult = await page.waitForSelector('[data-testid="result-title-a"]:nth-child(1)');

  // Start waiting for navigation before clicking the first result
  const navigationPromise = page.waitForNavigation();
  await firstResult.click();

  // Wait for the navigation to complete
  await navigationPromise;

  // Step 5: Check if the URL is 'https://www.football-data.org/'
  expect(page.url()).toBe('https://www.football-data.org/');
});
