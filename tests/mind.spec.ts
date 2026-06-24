import{test,expect,Locator} from '@playwright/test';
test("verify my mind",async({page})=>{
//Exercise 1
//Check Monday.
//If Monday is checked, print:
await page.goto("https://testautomationpractice.blogspot.com/")
const mondaycheckbos=page.getByLabel('monday');
await mondaycheckbos.check();
await expect(mondaycheckbos).toBeChecked()
if(await mondaycheckbos.isChecked())
{
console.log("monday is selcted")
}
else{
    console.log("monday is not selected")
}
await page.waitForTimeout(3000);
});
test("verify tuesday", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const tuesdaycheckbox=page.getByLabel('Tuesday');
    await tuesdaycheckbox.check();
    await expect(tuesdaycheckbox).toBeAttached()
await expect(tuesdaycheckbox).toBeVisible()
await expect(tuesdaycheckbox).toBeEnabled()
    if(await tuesdaycheckbox.isChecked())
    {
        console.log("tuesday is checked")
    }
    else
    {
        console.log("tuesday is not checked")
    }
});
test("verify allweeks", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const days=['Monday', 'Wednesday', 'Friday']
    let checkedcount=0;
    for(const day of days)
    {
        const weekday=page.getByLabel('#'+day)
        await weekday.check()
        await expect(weekday).toBeChecked()
    }
    //uncheck wednesday
    const wedcheckbox=page.getByLabel('Wednesday')
    await wedcheckbox.check();
    await expect(wedcheckbox).toBeChecked();

    await wedcheckbox.uncheck()
    await expect(wedcheckbox).not.toBe(false)

 //Count how many checkboxes are checked.
 console.log("verify how many checkboxes are chcked:"+checkedcount)
});
test.only("verify weeks", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
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
console.log("how many checkboxes is chckec:"+checkedcount)
});

//Monday, Tuesday, Wednesday, Thursday, Friday
test.only("veriy day", async ({page})=>{
    await page.goto("https://testautomationpractice.blogspot.com/")
    const days=['Monday', 'Wednesday', 'Friday','Tuesday','Thursday']
    let checkedcount=0;
    for(const day of days)
    {
       const weekdayscheckbox=page.getByLabel(day)
       await weekdayscheckbox.check()
      if(await weekdayscheckbox.isChecked())
       checkedcount++;
}
    console.log("totall number of checkbox is checked:"+checkedcount)
});
