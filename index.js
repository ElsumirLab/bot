import puppeteer from 'puppeteer';

// 'https://unicorngo.ru/men/footwear?gender=man&_rsc=1rci5'

const url = 'https://unicorngo.ru/men/footwear?gender=man&_rsc=1rci5';

const pars = async (url) => {
  const browser = await puppeteer.launch({ headless: false, slowMo: 300 });
  const page = await browser.newPage();
  await page.goto(url);
  await page.waitForSelector('header');

  const name = await page.evaluate(() => {
    const name = document.querySelectorAll(
      'header + div + div > div > div > div + div > div + div > a'
    );
    console.log('1', name);

    return name;
  });

  console.log('2', name);

  // await browser.close();
};

pars(url);
