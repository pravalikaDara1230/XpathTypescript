/*
1.open the application
2.verify the textbox is visible and enabled
3.get the max length of the textbox and print it in console
4.enter the value in the textbox and verify it
*/

import { test, expect, Locator } from '@playwright/test';

test("Verify Textbox action", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const Textbox: Locator = page.locator("#name");

    await expect(Textbox).toBeVisible();
    await expect(Textbox).toBeEnabled();

   const maxLength:String|null = await Textbox.getAttribute("maxlength");//retun max length of the atrribute
   console.log("max length of the textbox is:" + maxLength);
   expect(maxLength).toBe("15");


   await Textbox.fill("Pravalika");
   console.log("value entered in the textbox is:"+ await Textbox.inputValue());
   await expect(Textbox).toHaveValue("Pravalika");

   await page.waitForTimeout(3000);

});

//Radiobuttons
test("Verify Radiobutton action", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const Maleradiobutton = page.locator("#male");
    await expect(Maleradiobutton).toBeVisible();
    await expect(Maleradiobutton).toBeEnabled();
    expect(await Maleradiobutton.isChecked()).toBe(false);

    await Maleradiobutton.check();
    expect(await Maleradiobutton.isChecked()).toBe(true);
    await expect(Maleradiobutton).toBeChecked();  //preferred in real time
    await page.waitForTimeout(3000);

});

test.only("Verify Checkbox action", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const SundayCheckbox = page.getByLabel("Sunday");
    await SundayCheckbox.check();
    await expect(SundayCheckbox).toBeChecked();

    //select all checkboxes and assert is checked or not 
    const days: string[] = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const checkboxes: Locator[] = days.map(day => page.getByLabel(day));
    expect(checkboxes.length).toBe(6);
//select the all checkboxes and aseert
    for (const checkbox of checkboxes) {
        await checkbox.check();
        await expect(checkbox).toBeChecked();
        //await page.waitForTimeout(3000);
    }

    await page.waitForTimeout(3000);

    //uncheck the last 3 checkboxes and assert
    for (const checkbox of checkboxes.slice(-3)){
        await checkbox.uncheck();
        await expect(checkbox).not.toBeChecked();
        await page.waitForTimeout(3000);

    }
    // Toggle checkbox: if it is checked then uncheck and if it is unchecked then check
    for (const checkbox of checkboxes) {
        if(await checkbox.isChecked){
            await checkbox.uncheck(); //only if not checked 
            await expect(checkbox).not.toBeChecked();
        } else {
            await checkbox.check();
            await expect(checkbox).toBeChecked();
        }
    }

    //randamoly select checkboxes--selcect indexes[1,3,6]
    const randomIndexes:number[]=[1,3,6];
        for (const i of randomIndexes) {
    if (checkboxes[i]) {
        await checkboxes[i].check();
        await expect(checkboxes[i]).toBeChecked();
    }
}
    //await page.waitForTimeout(3000);

    //select the checbox based on label
      const weeknames:string='friday'

      for(const label of days){

        if(label==weeknames)
        {
            await page.getByLabel(label).check();
            await expect(page.getByLabel(label)).toBeChecked();
        }
      }

      await page.waitForTimeout(3000);
});