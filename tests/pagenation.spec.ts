import { test, expect, Locator } from '@playwright/test';

test("verify the pagenation table", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");

    let haspages = true;

    while (haspages) {

        const rows = await page.locator("#example tbody tr").all();

        for (let row of rows) {
            console.log(await row.innerText());
        }
        await page.waitForTimeout(2000);
        const nextbutton = page.locator("button[aria-label='Next']");
        const isdisabled = await nextbutton.getAttribute("class");

        if (isdisabled?.includes("disabled")) {
            haspages = false;
        } else {
            await nextbutton.click();
            await page.waitForTimeout(2000);
        }
    }
});



test.only("verify pagination dropdown table", async ({ page }) => {

    await page.goto("https://datatables.net/examples/basic_init/zero_configuration.html");
    const dropdown: Locator = page.locator("#dt-length-0");
    await dropdown.selectOption({ label: '25' });

    const rows: Locator = page.locator("#example tbody tr");
    const rowCount = await rows.count();
    expect(rowCount).toBe(25);
});