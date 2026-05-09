import fetch from 'node-fetch';

async function main() {
  const res = await fetch('http://127.0.0.1:3000/about');
  const text = await res.text();
  console.log("STATUS:", res.status);
  console.log("REDIRECTED:", res.redirected);
  console.log("FINAL URL:", res.url);
}
main();
