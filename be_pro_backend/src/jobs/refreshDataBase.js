import { searhProduct } from '@/services/ebayDBRefresh';
import { RecurrenceRule, scheduleJob } from 'node-schedule';

// watch
// sunglasses
// sandals
// hat

const rule = new RecurrenceRule();
rule.hour = 22;
rule.minute = 36;
// rule.tz = 'Etc/UTC';

export const jobEbayRefreshDataBase = scheduleJob(rule, async function () {
  console.info('Job Refresh Data Base started ...');
  const listProductNames = ['watch', 'sunglasses', 'sandals', 'hat'];
  for (const pName of listProductNames) {
    await searhProduct({ searchProduct: pName });
  }
  console.info('Job Refresh Data Base end ...');
});
