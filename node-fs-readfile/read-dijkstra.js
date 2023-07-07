import { readFile } from 'node:fs/promises';

async function readContent() {
  try {
    const filePath = 'dijkstra.txt';
    const contents = await readFile(filePath, 'utf8');
    console.log(contents);
  } catch (error) {
    console.error(error);
  }
}

readContent();
