import http from 'http';

const options = {
  hostname: 'localhost',
  port: 3000,
  path: '/api/auth/login',
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

const req = http.request(options, (res) => {
  const cookie = res.headers['set-cookie'];
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => {
    console.log('Login Body:', data);
    console.log('Login Set-Cookie:', cookie);
    if (cookie) {
      const checkOptions = {
        hostname: 'localhost',
        port: 3000,
        path: '/api/auth/check',
        method: 'GET',
        headers: {
          'Cookie': cookie[0].split(';')[0]
        }
      };
      const checkReq = http.request(checkOptions, checkRes => {
        let checkData = '';
        checkRes.on('data', chunk => checkData += chunk);
        checkRes.on('end', () => {
          console.log('Check Body:', checkData);
        });
      });
      checkReq.end();
    }
  });
});
req.write(JSON.stringify({ username: 'Quin', password: 'password123' }));
req.end();
