import { test, expect, Locator } from '@playwright/test';

test("verify the statictable", async ({ page }) => {

    await page.goto("https://testautomationpractice.blogspot.com/");

    const table: Locator = page.locator("table[name='BookTable']");

    await expect(table).toBeVisible();

    // Count rows
    const rows: Locator = page.locator("table[name='BookTable'] tbody tr");

    const rowCount = await rows.count();

    console.log("Number of rows:", rowCount);

    // Count columns
    const columns: Locator = page.locator("table[name='BookTable'] th");

    const columnCount = await columns.count();

    console.log("Number of columns:", columnCount);

    // Print all data
    console.log("Printing all table data...");

    const allRows = await rows.all();

    for (const row of allRows) {
        const rowText = await row.allInnerTexts();
        console.log(rowText.join(" | "));
    }

    // Print books written by Mukesh
    console.log("Books written by Mukesh...");

    const mukeshBooks: string[] = [];

    for (const row of allRows.slice(1)) { // Skip header row

        const rowCells = await row.locator('td').allInnerTexts();

        const book = rowCells[0].trim();
        const author = rowCells[1].trim();

        if (author === "Mukesh") {

            console.log(`Author: ${author} | Book: ${book}`);

            mukeshBooks.push(book);
        }
    }

    console.log("Mukesh books:", mukeshBooks);

    expect(mukeshBooks).toHaveLength(2);

    //printing all prices
    let totalprice=0;
      for (const row of allRows.slice(1)) { // Skip header row

        const rowCells = await row.locator('td').allInnerTexts();
        const price=rowCells[3]
 totalprice=totalprice+parseInt(price)
    await page.waitForTimeout(3000);
      }
      console.log("total price:", totalprice)
   
});