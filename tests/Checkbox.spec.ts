/*
1.Verify the URL 
2.Verify the textbox is enabled and visible
3.Verify the value entered in the textbox
*/


import{test,expect,Locator} from "@playwright/test";

test("Verify Textbox action - textbox field", async ({ page }) => {

    await page.goto("https://www.tutorialspoint.com/selenium/practice/text-box.php");

     const Fullname:Locator=page.locator("#fullname");
       
     await expect(Fullname).toBeEnabled();
     await expect(Fullname).toBeVisible();
  const maxLength = await Fullname.getAttribute("maxlength");
  console.log("max length of the textvbox is:"+maxLength);

    await Fullname.fill("pravalika");
     console.log("value entered in the textbox is:"+await Fullname.inputValue());
     await expect(Fullname).toHaveValue("pravalika"); 
  await page.waitForTimeout(3000);
});
  //Radiobuttons


test("Verify Radiobutton action", async ({ page }) => {

    await page.goto("https://www.tutorialspoint.com/selenium/practice/radio-button.php");

    const displaybutton = page.getByRole('radio').first();

    await expect(displaybutton).toBeVisible();
    await expect(displaybutton).toBeEnabled();

    expect(await displaybutton.isChecked()).toBe(false);

    await displaybutton.check();

    await expect(displaybutton).toBeChecked();

    await page.waitForTimeout(3000);

   }); //checkboxes
test.only("Verify Checkbox action", async ({ page }) => {

    await page.goto("https://www.tutorialspoint.com/selenium/practice/check-box.php");
  
     await page.locator("#c_bs_1").check();
     await expect(page.locator("#c_bs_1")).toBeChecked();
     //select all the checkboxes sublevel
     const sublevel=page.getByText("Main Level 1 ")
    await sublevel.click();

  //check the Checkbox using xpath
  // await page.locator("(//span[@class='plus'])[1]").click();
   //await page.locator("li[id='bf_1'] span[class='plus minus']").click();

   await page.locator(".plus").first().click(); // expand Main Level 1

const subLevel1 = page.locator("//label[text()='Sub Level 1']/preceding-sibling::input");

await subLevel1.check();
await expect(subLevel1).toBeChecked();
     await page.waitForTimeout(3000);
});