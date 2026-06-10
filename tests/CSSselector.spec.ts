import{test,expect,Locator} from '@playwright/test';

test("verify checkbox",async({page})=>{

    await page.goto("https://demowebshop.tricentis.com/")

    //tagid--#ID
await page.locator("#small-searchterms").fill("Laptop");
//await page.locator("input#small-searchterms").fill("Laptop");
//const ID:Locator=page.locator("input[type='submit']");
await expect(page.locator("#small-searchterms")).toBeVisible();
    //tagclass--.classname
    await expect(page.locator(".search-box-button")).toBeVisible();
    //await expect(page.locator("input.search-box-button")).toBeVisible();
//tagattr--tagname[atribute='value']
 await expect(page.locator(".search-box-button")).toBeVisible();
 //await page.locator("[name='q']").fill("Laptop");

 //tagattr--tag.class[attribute='value']
   await page.locator("input.search-box-button[type='submit']").click();
});