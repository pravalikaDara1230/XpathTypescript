import { test, expect } from '@playwright/test';

test("verify the Flipkart search", async ({ page }) => {
  await page.goto("https://www.flipkart.com/");

  const searchBox = page.locator("//input[@name='q' and not(@readonly)]");

  await searchBox.click();
  await searchBox.pressSequentially("smart", { delay: 200 });

  await expect(searchBox).toHaveValue("smart");

  const options = page.locator('form ul li');

  await expect(options.first()).toBeVisible({ timeout: 10000 });

  const count = await options.count();
  console.log("number of options count:", count);

  for (let i = 0; i < count; i++) {
    console.log(`${i + 1} option:`, await options.nth(i).innerText());
  
}
//try this one way
//click or select the option
for(let i=0;i<count;i++)
{
   const Text= await options.nth(i).innerText()
   if(Text=='smartphone')
   {
       options.nth(i).click()
       break;
   }
}

});