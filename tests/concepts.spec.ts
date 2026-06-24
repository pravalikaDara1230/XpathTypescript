import { test, expect, Locator } from '@playwright/test';

test("verify the all concepts", async ({ page }) => {

    // Open website
    await page.goto("https://testautomationpractice.blogspot.com/");

    // Locate textbox
    const textboxvalue: Locator = page.locator('#name');

    // Enter value
    await textboxvalue.fill("Pravalika");

    // Verify value
    await expect(textboxvalue).toHaveValue("Pravalika");
  
const max:string|null=await textboxvalue.getAttribute("maxlength")
await expect(max).toBe("15")
console.log("maximum lenth of the attribute:"+max)
    await page.waitForTimeout(3000);
});
test("verify loop", async ({ page }) => {

    // Open website
    await page.goto("https://testautomationpractice.blogspot.com/");
      const textboxvalue: Locator = page.locator('#name');

    await textboxvalue.fill("Pravalika");
const value=await textboxvalue.inputValue()
if(value=="Pravalika")
{
    console.log("value is matched")
}
else{
    console.log("value is not matched")
}

});
test("verify amleradiobutton", async ({ page }) => {

    // Open website
    await page.goto("https://testautomationpractice.blogspot.com/");
    const femalelabel: Locator = page.locator('#female');
    await femalelabel.check();
    await expect(femalelabel).toBeChecked();
    if(await femalelabel.isChecked())
    {
        console.log(" selected gender is Female")
    }
    else{
        console.log(" not selected gender is Female")
    }
    await page.waitForTimeout(3000);
});
test("verify checkboxes", async ({ page }) => {

    // Open website
    await page.goto("https://testautomationpractice.blogspot.com/");
    const days: string[] = ['monday','tuesday','wednesday','thursday','friday'];
    const checkboxes: Locator[] = days.map(day => page.getByLabel(day));
    expect(checkboxes.length).toBe(5);

    //select all checkboxes
    for(const checkboxe of checkboxes)
    {
        await checkboxe.check()
        await expect(checkboxe).toBeChecked();
    }
    // If day is Wednesday or Friday, uncheck it and verify it's unchecked.
   const uncheckDays = ['wednesday', 'friday'];

for(const day of uncheckDays)
{
    const checkbox = page.getByLabel(day);
    await checkbox.uncheck();
    await expect(checkbox).not.toBeChecked();
}
});
test("verify single dropdown", async ({ page }) => {

    // Open website
    await page.goto("https://testautomationpractice.blogspot.com/");
    // await page.locator("#country").selectOption('brazil')
    // await page.locator("#country").selectOption({value:'brazil'})//value of the attribute
     //await page.locator("#country").selectOption({index:4})//index
     await page.locator("#country").selectOption({label:'Brazil'})//index

     //select by 
     const selectedValue = await page.locator("#country").inputValue();

if (selectedValue === "brazil") {
    console.log("Brazil is selected");
}
else {
    console.log("Brazil is not selected");
}
});
test("verify multi dropdown", async ({ page }) => {

    // Open website
    await page.goto("https://testautomationpractice.blogspot.com/");
   await page.locator('#colors').selectOption(['Red','Blue','Green']);
    //await page.locator("#colors").selectOption([{label:'Red'},{label:'Blue'},{label:'Green'}])//by lable
    //await page.locator("#colors").selectOption(['Red','Blue','White']);//by value attribute
    //await page.locator("#colors").selectOption([{index:3},{index:4},{index:1}]);//by index

    //check the number of ptions in the count
    const multidropdown: Locator = page.locator('#colors option');
    await expect(multidropdown).toHaveCount(7);

    // check the option present in the dropdown
    const alloptions: string[] = (await multidropdown.allTextContents()).map(Text => Text.trim());
    await expect(alloptions).toContain('Red');
    //print all
    for(const option of alloptions)
    {
        console.log("all options are selected:",option)
    }
    await page.waitForTimeout(3000);
});
test.only("verify checkbox ", async ({ page }) => {

    // Open website
    await page.goto("https://testautomationpractice.blogspot.com/");
    const checkboxes: string[] = ['monday','wednesday','friday'];
   /* for (const day of checkboxes)
    {
        const checkbox = page.getByLabel(day);
        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }
        */
        const days=['Monday', 'Wednesday', 'Friday']
    let checkedcount=0;
    for(const day of days)
    {
        const weekday=page.getByLabel(day)
        await weekday.check()
        await expect(weekday).toBeChecked()
        checkedcount++;
        console.log("day checks:"+day)
    }
console.log("how many checkboxes is check:"+checkedcount)
});
test.only("verify weeks", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const days=['Wednesday', 'Friday']
    let checkedcount=0;
    for(const day of days)
    {
        const weekend=page.getByLabel("Wednesday")
        await weekend.check()
        await expect(weekend).toBeChecked()
    }
    //uncheck wednesday and friday
    const thurday=page.getByLabel("Friday")
    await thurday.check()
    await expect(thurday).toBeChecked()

    await thurday.uncheck();
    await expect(thurday).toBe(false);
});
test.only("verify allweeks", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const days = ['Wednesday', 'Friday'];

    // Check Wednesday and Friday
    for (const day of days)
    {
        const weekend = page.getByLabel(day);

        await weekend.check();

        await expect(weekend).toBeChecked();

        console.log(day + " is checked");
    }

    // Uncheck Wednesday
    const wednesday = page.getByLabel("Wednesday");

    await wednesday.uncheck();

    await expect(wednesday).not.toBeChecked();

    // Uncheck Friday
    const friday = page.getByLabel("Friday");

    await friday.uncheck();

    await expect(friday).not.toBeChecked();

    console.log("Wednesday and Friday are unchecked");
});