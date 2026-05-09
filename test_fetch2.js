import http from 'http';

http.get({
  hostname: '127.0.0.1',
  port: 3000,
  path: '/services/kitchen-design',
  headers: { Accept: '*/*' }
}, (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(res.statusCode, data.substring(0, 500)));
});
