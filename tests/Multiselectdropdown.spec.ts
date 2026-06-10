import{test,expect,Locator} from "@playwright/test";

test("Verify singledropdown  field", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");
    //select the single dropdown
 //await page.locator("#colors").selectOption(['Red','Blue','Green']);
// await page.locator("#colors").selectOption(['Red','Blue','White']);//by using value attribute
//await page.locator("#colors").selectOption([ {label:'Red'},{label:'Yellow'},{label:'White'}]);//by using label
//await page.locator("#colors").selectOption([ {index:0},{index:1},{index:3}]);//by using label

 //check the number option in the count
const multidropdown:Locator=page.locator('#colors>option')
await expect(multidropdown).toHaveCount(7)

 //check an option present in that dropdown
   const alloptions=(await multidropdown.allTextContents()).map(Text =>Text.trim())
   await expect(alloptions).toContain('Red')
  //printing the option 
 for(const option of alloptions)
 {
  console.log(option)
 }
  
  await page.waitForTimeout(3000)
});