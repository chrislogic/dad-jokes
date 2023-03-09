import { test, expect } from "@playwright/test";

const baseUrl = "http://localhost:5173/";

test("has title", async ({ page }) => {
  await page.goto(baseUrl);

  await expect(page).toHaveTitle(/Dad Jokes/);
});

test("has a joke", async ({ page }) => {
  await page.goto(baseUrl);

  const joke = page.getByTestId("joke");

  await expect(joke).not.toBeEmpty();
});

test("has a new joke button", async ({ page }) => {
  await page.goto(baseUrl);

  const button = page.getByTestId("next");

  await expect(button).toHaveText("🤣🤣🤣");
});

test("next jokes", async ({ page }) => {
  await page.goto(baseUrl);

  const currentJoke = await page.getByTestId("joke").textContent();
  await page.getByTestId("next").click();

  const newJoke = await page.getByTestId("joke").textContent();

  expect(currentJoke).not.toEqual(newJoke);
});
