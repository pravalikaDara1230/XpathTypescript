import{test,expect,Locator} from '@playwright/test';
test("verify the statictables", async({page})=>{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/?utm_source=chatgpt.com")
    const table:Locator=page.locator("table[class='table-display'] tbody ")
    await page.waitForTimeout(3000)
    //count the rows
    const rows:Locator=page.locator("table[class='table-display'] tbody tr")
    const count= await rows.count();
    console.log("numer of rows:",count)
    //count the columns
    const colms:Locator=page.locator("table[class='table-display'] tbody th")
    const counts= await colms.count();
    console.log("numer of colms:",counts)
    //printing all data
    console.log("printing all the data in the table.....")
    const allrows=await rows.all()
    for(let rows of allrows)
    {
const text=await rows.allInnerTexts()
console.log(text.join("|"))
    }
    //Print only the Name column.
    console.log("printing name columns...")
    
    for (const row of allrows) {
        const cells = await row.locator('th').allInnerTexts();
        const instructor = cells.length > 1 ? cells[1] : '';
        //const instructor=cells[1].trim()
        if (instructor === "Rahul Shetty") {
            console.log(`Author: ${instructor}`);
        }
    }
})