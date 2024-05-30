import puppeteer from "puppeteer";
import {setTimeout} from "timers/promises";

const browser = await puppeteer.launch({
    headless: false,
    defaultViewport: {width: 1920, height: 1080},
    slowMo: 250,
    userDataDir: "temporary",
    slowMo: 250
});

const page = await browser.newPage();

await page.goto('https://www.google.com/', {waitUntil: 'networkidle2'});
await page.waitForSelector('[class="gLFyf"]')
await page.type('[class="gLFyf"]', 'devconfbd')
await page.click('[type="submit"]')
await page.waitForSelector('h3')
//await page.screenshot({ path: 'google_search.png'});
const searchResults = await page.evaluate( ()=>{
    const titles = Array.from(document.querySelectorAll('h3'))
    return titles.map( title => title.textContent)
});

console.log(searchResults)

await browser.close();
// id="searchbox_input" #searchbox_input
// [class="searchbox_searchButton__F5Bwq iconButton_button__6x_9C"]
// [data-testid="result"] 
// await browser.close();
// }, 10000)