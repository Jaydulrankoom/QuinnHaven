import https from 'https';

function fetch(url) {
  https.get(url, (res) => {
    if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
      console.log('Redirecting to:', res.headers.location);
      fetch(res.headers.location);
      return;
    }
    let data = '';
    res.on('data', (chunk) => data += chunk);
    res.on('end', () => console.log('STATUS:', res.statusCode, '\nBODY:', data.substring(0, 500)));
  });
}

fetch('https://ais-dev-edroghhefnil2n55fhkec3-159331333816.asia-southeast1.run.app/services/kitchen-design');
