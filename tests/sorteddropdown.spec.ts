import{test,expect,Locator} from "@playwright/test";

test("Verify sorsteddropdown  field", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    //select the single dropdown

    const dropdownoptions:Locator=page.locator('#animals>option');
    console.log(await dropdownoptions.allTextContents());
    const options:string[]=(await dropdownoptions.allTextContents()).map(Text=>Text.trim());
    const originallist:string[]=[...options];
    const sortedlist:string[]=[...options].sort();
    console.log("originallist:",originallist);
    console.log("sortedlist:",sortedlist);
    expect(originallist).toEqual(sortedlist);
    await page.waitForTimeout(3000);
});