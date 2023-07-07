import fetch from './fetch.js';

// Keep track of app load time so each log message can be timed.
// Log messages should all be approximately 1 second apart.
const startTime = Date.now();
const elapsed = () => `${Math.round((Date.now() - startTime) / 1000)}s -`;

async function throwOnce() {
  // Note: In the `catch` we are logging just `error.message` for illustration
  // purposes. In actual code you will want to log the entire error so that
  // you get the stack trace.
  try {
    const html = await fetch('foo', true);
    console.log(elapsed(), 'throwOnce:', html);
  } catch (error) {
    console.log(elapsed(), 'throwOnce Error:', error.message);
  }
}

async function throwSeveral() {
  try {
    // Note: In the `catch` we are logging just `error.message` for illustration
    // purposes. In actual code you will want to log `error` so that
    // you get the stack trace.
    const html = await fetch('foo1', false);
    console.log(elapsed(), 'throwSeveral1:', html);
    const html1 = await fetch('foo2', true);
    console.log(elapsed(), 'throwSeveral2:', html1);
    const html2 = await fetch('foo3', true);
    console.log(elapsed(), 'throwSeveral3:', html2);
  } catch (error) {
    console.log(elapsed(), 'throwSeveral Error:', error.message);
  }
}

async function throwChained() {
  try {
    const html = await fetch('foo-chain', false);
    console.log(elapsed(), 'throwChained1:', html);
    const html1 = await fetch(html, true);
    console.log(elapsed(), 'throwChained2:', html1);
    const html2 = await fetch(html1, false);
    console.log(elapsed(), 'throwChained3:', html2);
  } catch (error) {
    console.log(elapsed(), 'throwChained Error:', error.message);
  }
}

async function runFetch() {
  await throwOnce();
  await throwSeveral();
  await throwChained();
}

runFetch();
