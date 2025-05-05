const fs = require('fs-extra');

// const basic =
//   'https://www.accountboy.com/zh-cn-cny/buy-apple-id.json?version=833';
// const basic2 =
//   'https://www.accountboy.com/en-us-usd/buy-apple-id.json?version=833';

const hot = ['apple-id', 'X', 'tg', 'TK'];

const tabItem = [
  'Steam',
  'Instagram',
  'chatgpt',
  'Google',
  'fb',
  'Netflix',
  'Windows',
  'ytb',
  'Linkedin',
  'gmail',
  'Disney',
  'Discord',
  'google-play-gift-card',
  'itunes-gift-card',
  'razer-gold',
  'nintendo-eshop',
  'apple-goodsLibraryId',
  'shadowrocket-ID',
  'X',
  'tg',
  'Instagram',
  'fb',
  'Google',
  'TK',
  'Discord',
  'douyin',
  'Amazon',
  'vk',
  'gmail',
  'bulk-procurement',
  'outlook',
  'yahoo-email',
  'mail-ru',
  'ytb',
  'Netflix',
  'pixiv',
  'Disney',
  'Spotify',
  'Hbo',
  'Poe',
  'Seeking-Alpha',
  'Financial-times',
  'hulu',
  'office',
  'duolingo-plus',
  'processon',
  'chatgpt',
  'DeepL',
  'midjourney',
  'sora',
  'Windows',
  'apk',
  'Steam',
  'LOL-PBE',
  'battle',
  'S',
  'pubg',
  'GTA5',
  '泰拉瑞亚【steam版】',
  'EPIC',
  'Sword-and-Fairy',
  'Monster-Hunter-World',
  'itunes-gift-card',
  'nintendo-eshop',
  'google-play-gift-card',
  'sim-card-hk',
  'razer-gold',
  'MyCard',
  'DMarket',
  'Spotify-gift-card',
];

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const fetchFn = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (err) {
    console.log(url);
    console.log(err);
    return null;
  }
};

async function main() {
  // window.localCache = {};
  // const arr = ['apple-id', 'X'];
  const arr = [...hot, ...tabItem];
  console.log(arr.length);
  // for (const item of arr) {
  //   try {
  //     const data = await fetchFn(
  //       `https://www.accountboy.com/en-us-usd/buy-${item}.json?version=833`
  //     );
  //     if (data === null) {
  //       console.log(`${item} fetch error`);
  //     } else {
  //       console.log(`${item} fetch done`);
  //       localCache[item] = data;
  //       // await fs.writeJson(
  //       //   `${process.cwd()}/cache-dir/en/detail_${item}.json`,
  //       //   data
  //       // );
  //     }
  //     await sleep(2000);
  //   } catch (error) {
  //     console.error('Error processing item:', error.message); // 处理错误
  //   }
  // }
}

main();
// console.log(process.cwd());

/* ------------------ */
// const hot = ['apple-id', 'X', 'tg', 'TK'];

// const tabItem = [
//   'Steam',
//   'Instagram',
//   'chatgpt',
//   'Google',
//   'fb',
//   'Netflix',
//   'Windows',
//   'ytb',
//   'Linkedin',
//   'gmail',
//   'Disney',
//   'Discord',
//   'google-play-gift-card',
//   'itunes-gift-card',
//   'razer-gold',
//   'nintendo-eshop',
//   'apple-goodsLibraryId',
//   'shadowrocket-ID',
//   'X',
//   'tg',
//   'Instagram',
//   'fb',
//   'Google',
//   'TK',
//   'Discord',
//   'douyin',
//   'Amazon',
//   'vk',
//   'gmail',
//   'bulk-procurement',
//   'outlook',
//   'yahoo-email',
//   'mail-ru',
//   'ytb',
//   'Netflix',
//   'pixiv',
//   'Disney',
//   'Spotify',
//   'Hbo',
//   'Poe',
//   'Seeking-Alpha',
//   'Financial-times',
//   'hulu',
//   'office',
//   'duolingo-plus',
//   'processon',
//   'chatgpt',
//   'DeepL',
//   'midjourney',
//   'sora',
//   'Windows',
//   'apk',
//   'Steam',
//   'LOL-PBE',
//   'battle',
//   'S',
//   'pubg',
//   'GTA5',
//   '泰拉瑞亚【steam版】',
//   'EPIC',
//   'Sword-and-Fairy',
//   'Monster-Hunter-World',
//   'itunes-gift-card',
//   'nintendo-eshop',
//   'google-play-gift-card',
//   'sim-card-hk',
//   'razer-gold',
//   'MyCard',
//   'DMarket',
//   'Spotify-gift-card',
// ];

// const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// const fetchFn = async (url) => {
//   try {
//     const response = await fetch(url);
//     const data = await response.json();
//     return data;
//   } catch (err) {
//     console.log(url);
//     console.log(err);
//     return null;
//   }
// };

// async function main() {
//     window.localCache2 = {};
//   // const arr = ['apple-id', 'X'];
//   const arr = [...hot, ...tabItem];
//   // console.log(arr.length);
//   for (const item of arr) {
//     try {
//       const data = await fetchFn(
//         `https://www.accountboy.com/zh-cn-cny/buy-${item}.json?version=833`
//       );
//       if (data === null) {
//         console.log(`${item} fetch error`);
//       } else {
//         console.log(`${item} fetch done`);
//         window.localCache2[item] = data;
//         // await fs.writeJson(
//         //   `${process.cwd()}/cache-dir/en/detail_${item}.json`,
//         //   data
//         // );
//       }
//       await sleep(2000);
//     } catch (error) {
//       console.error('Error processing item:', error.message); // 处理错误
//     }
//   }
// }

// main();