import{test,expect,Locator} from '@playwright/test';

test("verify xpath axis",async({page})=>{

    await page.goto("https://testautomationpractice.blogspot.com/p/playwrightpractice.html");
//self axis

const Selfaxiscell:Locator=page.locator("//td[text()='Learn Selenium']/self::td")
await expect(Selfaxiscell).toHaveText("Learn Selenium");

//parent axis
const parentrow:Locator=page.locator("//td[text()='Learn Selenium']/parent::tr")
await expect(parentrow).toBeVisible();
//child axis
const childcell:Locator=page.locator("//table[@name='BookTable']//tr[2]/child::td")
await expect(childcell).toHaveCount(4);
await expect(childcell.nth(0)).toHaveText("Learn Selenium");
await expect(childcell.nth(1)).toHaveText("Amit");
await expect(childcell.nth(2)).toHaveText("Selenium");
await expect(childcell.nth(3)).toHaveText("300");

/*const cellTexts = await childcell.allTextContents();
for (const text of cellTexts) {
    console.log(text);
}
    */
   //ancestor axis
    const ancestorTable:Locator=page.locator("//td[text()='Learn Selenium']/ancestor::table")
    await expect(ancestorTable).toBeVisible();

    //descendant axis
    const descendant:Locator=page.locator("//table[@name='BookTable']/descendant::td")
    await expect(descendant).toHaveCount(24);
    //following axis
    const following:Locator=page.locator("//td[text()='Learn Selenium']/following::td")
    await expect(following).toHaveCount(125);
    //preceding axis
    const preceding:Locator=page.locator("//td[text()='Learn Selenium']/preceding::td")
    console.log("preceding count is",+await preceding.count());
});