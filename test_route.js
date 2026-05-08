import http from 'http';

http.get('http://localhost:3000/services/kitchen-design', (res) => {
  let data = '';
  res.on('data', (chunk) => data += chunk);
  res.on('end', () => console.log(res.statusCode, data.substring(0, 500)));
});
