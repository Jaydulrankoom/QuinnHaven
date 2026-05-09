import fetch from 'node-fetch';

async function test() {
  const res = await fetch('http://127.0.0.1:3000/services/kitchen-design');
  const text = await res.text();
  console.log(text.substring(0, 500));
}
test();
