import db from '@/database';
import puppeteer from 'puppeteer-extra';
import AdblockerPlugin from 'puppeteer-extra-plugin-adblocker';
import StealthPlugin from 'puppeteer-extra-plugin-stealth';
import { Op } from 'sequelize-cockroachdb';

// watch
// sunglasses
// sandals
// hat
export const searhProduct = async (searchOption) => {
  return new Promise((resolve, reject) => {
    const { searchProduct = 'watch', pageNum = 0 } = searchOption;

    console.info('the function searhProduct called');
    console.log('the searhProduct parameters :', searchOption);

    // puppeteer-extra is a drop-in replacement for puppeteer,
    // it augments the installed puppeteer with plugin functionality.
    // Any number of plugins can be added through `puppeteer.use()`

    // Add stealth plugin and use defaults (all tricks to hide puppeteer usage)
    puppeteer.use(StealthPlugin());

    // Add adblocker plugin to block all ads and trackers (saves bandwidth)
    puppeteer.use(AdblockerPlugin({ blockTrackers: true }));

    // That's it, the rest is puppeteer usage as normal 😊
    puppeteer
      .launch({
        headless: 'new',
        defaultViewport: false,
        userDataDir: './temp',
      })
      .then(async (browser) => {
        const page = await browser.newPage();
        // await page.setViewport({ width: 800, height: 600 });

        // console.log(`Testing adblocker plugin..`);

        const ebayURL = `https://www.ebay.com/sch/i.html?_nkw=${searchProduct}&_sacat=0&_pgn=${pageNum}`;
        await page.goto(ebayURL);
        await new Promise((r) => setTimeout(r, 1000));
        // await page.screenshot({ path: 'temp/ebayScreenshot.png', fullPage: true });

        const productsHolder = await page.$$('#srp-river-results > ul > li');

        const [productSearch, created] = await db.models.productSearch.findOrCreate({
          where: { keywork: searchProduct },
        });

        let productList = [];
        for (let [index, prd] of productsHolder.entries()) {
          let image, title, price, shippingCost, sold, hashCode, productLink;

          try {
            image = await prd.evaluate((el) =>
              el.querySelector('div > div.s-item__image-section > div > a > div > img').getAttribute('src')
            );
          } catch (error) {}
          try {
            title = await prd.evaluate(
              (el) => el.querySelector('div > div.s-item__info.clearfix > a > div > span').textContent
            );
          } catch (error) {}
          try {
            price = await prd.evaluate(
              (el) =>
                el.querySelector(
                  'div > div.s-item__info.clearfix > div.s-item__details.clearfix > div:nth-child(1) > span'
                ).textContent
            );
          } catch (error) {}
          try {
            shippingCost = await prd.evaluate(
              (el) =>
                el.querySelector(
                  'div > div.s-item__info.clearfix > div.s-item__details.clearfix > div:nth-child(3) > span.s-item__logisticsCost'
                ).textContent
            );
          } catch (error) {}
          try {
            sold = await prd.evaluate(
              (el) => el.querySelector('.s-item__dynamic.s-item__quantitySold > span').textContent
            );
          } catch (error) {}
          try {
            hashCode = await prd.evaluate((el) => el.getAttribute('id'));
          } catch (error) {}
          
          try {
            productLink = await prd.evaluate(
              (el) => el.querySelector('.s-item__link').getAttribute('href')
            );
          } catch (error) {}
          
          if (title) {
            productList.push({
              index,
              image,
              title,
              price,
              shippingCost,
              sold,
              hashCode,
              productSearchId: productSearch.id,
              productLink
            });
          }
        }

        // await testStealth(page);

        // console.log(`All done, check the screenshots. ✨`);

        // (A) LOAD REQUIRED MODULES
        // https://www.npmjs.com/package/csv-stringify

        // (C) CREATE CSV FILE
        // let output = stringify(productList, {
        //   header: true,
        //   columns: {
        //     index: 'INDEX',
        //     title: 'TITLE',
        //     price: 'PRICE',
        //     image: 'IMAGE',
        //     shippingCost: 'SHIPPINGCOST',
        //     sold: 'SOLD',
        //   },
        // });
        // fs.writeFileSync('./temp/demoB.csv', output);

        await db.models.productFound.destroy({
          where: {
            hashCode: {
              [Op.in]: productList.map((prd) => prd.hashCode),
            },
          },
        });

        await db.models.productFound.bulkCreate(productList);

        await browser.close();

        console.log('Data downloaded and saved from ebay');
        
        resolve()
      });
  });
};

async function testStealth(page) {
  console.log(`Testing the stealth plugin..`);
  await page.goto('https://bot.sannysoft.com');
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'temp/stealth.png', fullPage: true });
}
