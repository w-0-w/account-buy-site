const handler = require('serve-handler');
const http = require('http');

const PORT = 3456;

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, {
    // 资源根目录
    public: './build',
    // 目录不能枚举
    directoryListing: false,
    // 页面静态处理
    rewrites: [
      { source: 'detail/**', destination: '/index.html' },
      { source: 'order/**', destination: '/index.html' },
      { source: 'flow/**', destination: '/index.html' },
      { source: 'en-US/**', destination: '/index.html' },
    ],
  });
});

server.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
