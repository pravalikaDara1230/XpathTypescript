import{test, expect} from '@playwright/test';

test("validate page URL", async({page})=>{
  await page.goto("https://www.saucedemo.com/");
let URL:string=await page.url();
console.log(URL);
  await expect(page).toHaveURL("https://www.saucedemo.com/");

});