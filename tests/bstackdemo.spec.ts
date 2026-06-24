import { test, expect,Locator } from '@playwright/test';

test('verify name textbox in bstackdropdown demo', async ({ page }) => {
    // URL
    await page.goto('https://testautomationpractice.blogspot.com/');

    // Locate the Name textbox.
    const textbox: Locator = page.locator('#name')
    await expect(textbox).toBeVisible()
    await expect(textbox).toBeEnabled()

    await textbox.fill("Pravalika")
    await expect(textbox).toHaveValue("Pravalika")
    console.log("Verify the entered value:", textbox)

    await page.waitForTimeout(3000);
});
test('verify radiobutton', async ({ page }) => {
    // URL
await page.goto('https://testautomationpractice.blogspot.com/');
const radiobutton=page.locator('#male')
await expect(radiobutton).toBeEnabled();
await expect(radiobutton).toBeVisible();
 expect(await radiobutton.isChecked()).toBe(false);

 await radiobutton.click()
 expect(await radiobutton.isChecked()).toBe(true);
await expect(radiobutton).toBeChecked();
 await page.waitForTimeout(3000);
});
test('verify checkbox', async ({ page }) => {
    // URL
await page.goto('https://testautomationpractice.blogspot.com/');
const checkbox=page.locator('#monday')
await expect(checkbox).toBeEnabled();
await expect(checkbox).toBeVisible();
await checkbox.click()
await expect(checkbox).toBeChecked();
//verify wednesday checked 
const wedcheckbox=page.locator('#wednesday')
await wedcheckbox.click()
await expect(wedcheckbox).toBeChecked()
await wedcheckbox.uncheck();
await expect(wedcheckbox).not.toBe(true)
 await page.waitForTimeout(3000);
});
test('verify wednesday checkbox selection', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');

    // Select Wednesday
    const wedcheckbox = page.getByLabel('Wednesday');
    await wedcheckbox.check();
    await expect(wedcheckbox).toBeChecked();

    // Select multiple checkboxes
    const days = ['Monday','Tuesday','Wednesday','Thursday'];

    for (const day of days)
    {
        const checkbox = page.getByLabel(day);

        await checkbox.check();
        await expect(checkbox).toBeChecked();
    }

    await page.waitForTimeout(3000);
});
test('verify weekday checkboxes', async ({ page }) => {

    await page.goto('https://testautomationpractice.blogspot.com/');
    // Check Monday, Wednesday, Friday.
    const weekdays = ['Monday', 'Wednesday', 'Friday'];

    for (const day of weekdays) {
      const checkbox = page.getByLabel(day);
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }

    const wedcheckbox = page.getByLabel('Wednesday');
    await wedcheckbox.uncheck();
    await expect(wedcheckbox).not.toBeChecked();

    await page.waitForTimeout(3000);
});