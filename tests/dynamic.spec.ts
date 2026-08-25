import{test,expect,Locator} from '@playwright/test';
test("verify the dynamic table",async({page})=>{

    await page.goto("https://practice.expandtesting.com/dynamic-table")
    const dynamictable:Locator=page.locator('table.table tbody')
    await expect(dynamictable).toBeVisible()

    //find the all rows then find number of rows
    const rows:Locator[]= await page.locator('tbody tr').all()
    console.log("print the number of length:",rows.length)
    expect(rows).toHaveLength(5);

    //for chrome process get value from cpu load
     let cpuload = '';

for (const row of rows)
{
    const processName: string = await row.locator("td").nth(0).innerText();

    if (processName === "Chrome")
    {
       // cpuload = await row.locator('td:has-text("%")').innerText();
        // OR
         cpuload = await row.locator("td", { hasText: "%" }).innerText();

        console.log("CPU Load of Chrome:", cpuload); // 2.9%
        break;
    }
}
}
)