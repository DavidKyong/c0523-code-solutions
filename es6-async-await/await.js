import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function fetchOnce() {
  const html = await fetch('foo/bar.html');
  console.log(elapsed(), 'fetchOne:', html);
}

async function fetchSeveral() {
  const html = await fetch('foo1/bar.html');
  console.log(elapsed(), 'fetchSeveral1:', html);
  const html1 = await fetch('foo2/bar.html');
  console.log(elapsed(), 'fetchSeveral2:', html1);
  const html2 = await fetch('foo3/bar.html');
  console.log(elapsed(), 'fetchSeveral3:', html2);
}

async function fetchChained() {
  const msg1 = await fetch('foo-chain/bar.html');
  console.log(elapsed(), 'fetchChained1:', msg1);
  const msg2 = await fetch(msg1);
  console.log(elapsed(), 'fetchChained2:', msg2);
  const msg3 = await fetch(msg2);
  console.log(elapsed(), 'fetchChained3:', msg3);
}

async function runFetch() {
  await fetchOnce();
  await fetchSeveral();
  await fetchChained();
}

runFetch();
