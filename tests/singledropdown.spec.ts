import{test,expect,Locator} from "@playwright/test";

test("Verify singledropdown  field", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/")
    //select the single dropdown

    await page.locator('#country').selectOption('India')
//await page.locator('#country').selectOption({value:'UK'})//by using attribute value
// await page.locator('#country').selectOption({label:'India'})// by using label
 //await page.locator('#country').selectOption({index:3})//by using index


 //check the number option in the count
 const countoption:Locator=page.locator("#country>option")
 await expect(countoption).toHaveCount(10)

 //check an option present in that dropdown
  const alltextsdropdown:String[]= (await countoption.allTextContents()).map(text=>text.trim())
  console.log(alltextsdropdown);
  expect(alltextsdropdown).toContain('Japan')

  //printing the option 
  for(const options of alltextsdropdown)
  {
    console.log('options')
  }
  await page.waitForTimeout(3000)
});