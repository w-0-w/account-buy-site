const handler = require('serve-handler');
const http = require('http');

const PORT = 3456;

const server = http.createServer((request, response) => {
  // You pass two more arguments for config and middleware
  // More details here: https://github.com/vercel/serve-handler#options
  return handler(request, response, {
    public: './build',
    directoryListing: false,
  });
});

server.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
