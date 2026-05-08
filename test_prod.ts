import { spawn } from 'child_process';
import http from 'http';

const server = spawn('node', ['dist/server.js'], { env: { ...process.env, NODE_ENV: 'production', PORT: '3001' } });

setTimeout(() => {
  http.get('http://0.0.0.0:3001/robots.txt', (res) => {
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => {
      console.log('Status:', res.statusCode);
      console.log('Response:', data);
      
      http.get('http://0.0.0.0:3001/sitemap.xml', (res) => {
        let data2 = '';
        res.on('data', (chunk) => data2 += chunk);
        res.on('end', () => {
          console.log('Status 2:', res.statusCode);
          console.log('Response 2:', data2.substring(0, 200));
          server.kill();
        });
      });
    });
  });
}, 2000);
