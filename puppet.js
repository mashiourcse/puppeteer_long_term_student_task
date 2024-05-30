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

await page.goto("https://devconfbd.com/");
let selector = "img[alt='guest']";
await page.screenshot({ path: "devconfbd.png"});
await page.waitForSelector(selector);
await page.click(selector);
await setTimeout(2000);
await page.screenshot({ path: "guest.png"});


await browser.close();
// setTimeout( async()=>{

// await browser.close();
// }, 10000)