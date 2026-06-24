import { test, expect, Locator } from '@playwright/test';

test("verify hidden dropdown", async ({ page }) => {
  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // login
  await page.locator("//input[@name='username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  await page.locator("//button[@type='submit']").click();

  // click on PIM
  await page.getByRole("link", { name: "PIM" }).click();

  // click on the job title dropdown
  await page.locator("form i").nth(2).click();

  // get all dropdown options
  const options: Locator = page.locator("div[role='listbox'] span");

  await expect(options.first()).toBeVisible();

  const count: number = await options.count();
  console.log("number of options:", count);
  //printing all the options
  console.log("printing all options.....")
  for(let i=0;i<count;i++)
  {
    console.log(await options.nth(i).innerText());
  }
  // click or select the option
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    if (text === 'Automation Tester') {
      await options.nth(i).click();
      break;
    }
  }
});