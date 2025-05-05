const fs = require('fs-extra');
const en = require('./public/en.json');

async function main() {
  const items = Object.keys(en);
  for (const item of items) {
    try {
      await fs.writeJson(
        `${process.cwd()}/public/dynamic/en/detail_${item}.json`,
        {
          goodsDetail: en[item].goodsDetail,
        }
      );
    } catch (error) {
      console.error('Error processing item:', error.message); // 处理错误
    }
  }
}

main();
