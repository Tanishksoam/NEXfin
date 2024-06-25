const puppeteer = require("puppeteer");

async function fetchPageViews() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Replace with your Vercel login URL and credentials
  const loginUrl = "https://vercel.com/login";
  const email = "soamtanishk@gmail.com";
  const password = "Adwit@0909";

  await page.goto(loginUrl);

  // Perform login
  await page.type('input[name="email"]', email);
  await page.click('button[type="submit"]');
  await page.waitForTimeout(3000); // Adjust this delay as needed

  await page.type('input[name="password"]', password);
  await page.click('button[type="submit"]');
  await page.waitForNavigation();

  // Navigate to the Analytics dashboard
  const analyticsUrl = "https://vercel.com/dashboard/analytics";
  await page.goto(analyticsUrl);

  // Wait for the page view count to be visible
  await page.waitForSelector(".page-view-count-selector"); // Replace with actual selector

  // Extract the page view count
  const pageViews = await page.evaluate(() => {
    return document.querySelector(".page-view-count-selector").innerText; // Replace with actual selector
  });

  console.log(`Page Views: ${pageViews}`);

  await browser.close();
}

fetchPageViews().catch(console.error);
