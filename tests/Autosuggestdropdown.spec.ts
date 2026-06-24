import { test, expect } from '@playwright/test';

test('verify autosuggestdropdown', async ({ page }) => { 
    await page.waitForTimeout(3000);
    const options = page.locator('.s-suggestion');
    const count = await options.count();
    console.log("Number of suggestions:", count);
    // Print all suggestions
    for(let i = 0; i < count; i++)
    {
        console.log(await options.nth(i).textContent());
    }
//SELECT/CLICK ON THE SAMRT PHONE POPTION

for(let i=0;i<count;i++)
{
    const text = await options.nth(i).textContent();

    console.log(text);

    if(text?.includes('smart tv 32'))
    {
        await options.nth(i).click();

        console.log("Desired option selected");

        break;
    }
}
});