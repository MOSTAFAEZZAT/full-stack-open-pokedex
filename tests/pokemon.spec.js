// @ts-check
import { test, expect } from '@playwright/test'

test.describe('Pokedex', () => {
  test('front page can be opened', async ({ page }) => {
    await page.goto('http://localhost:5000') // <- Put your actual app URL here
    await expect(page.getByText('Ivysaur')).toBeVisible()
    await expect(
      page.getByText('Pokémon and Pokémon character names are trademarks of Nintendo.')
    ).toBeVisible()
  })
})
