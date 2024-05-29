const { chromium } = require('playwright');

(async () => {
  // Launch the browser with the Chrome executable
  const browser = await chromium.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', // Specify the path to your Chrome executable
    headless: false // Set to true if you want to run in headless mode
  });
  const page = await browser.newPage();

  // Go to the search engine website (Google in this case)
  await page.goto('https://www.google.com');

  // Type the search query and press Enter
  const searchQuery = 'example';
  await page.fill('input[name="q"]', searchQuery);
  await page.press('input[name="q"]', 'Enter');

  // Wait for the results to load
  await page.waitForSelector('h3');

  // Extract and log the results
  const results = await page.evaluate(() => {
    const titles = Array.from(document.querySelectorAll('h3')).map(title => title.innerText);
    return titles;
  });

  console.log('Search results:');
  results.forEach((result, index) => {
    console.log(`${index + 1}. ${result}`);
  });

  // Close the browser
  await browser.close();
})();
