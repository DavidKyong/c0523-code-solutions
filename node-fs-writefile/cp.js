import { readFile, writeFile } from 'node:fs/promises';

async function cp() {
  try {
    const original = process.argv[2];
    const copy = process.argv[3];

    const copying = await readFile(original);
    await writeFile(copy, copying, { encoding: 'utf8' });

    console.log('Success');
  } catch (error) {
    console.error('Error:', error);
  }
}

cp();
