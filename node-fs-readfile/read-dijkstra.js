import { readFile } from 'node:fs/promises';

async function readContent() {
  try {
    const filePath = 'dijkstra.txt';
    const contents = await readFile(filePath, { encoding: 'utf8' });
    console.log(contents);
  } catch (err) {
    console.error(err.message);
  }
}

readContent();
