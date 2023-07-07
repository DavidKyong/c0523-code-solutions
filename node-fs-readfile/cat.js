import { readFile } from 'node:fs/promises';

async function cat() {
  try {
    const fileNames = process.argv.slice(2);

    const filePromises = fileNames.map((fileName) =>
      readFile(fileName, { encoding: 'utf8' })
    );
    const fileContents = await Promise.all(filePromises);
    const concatenatedContents = fileContents.join('\n');

    console.log(concatenatedContents);
  } catch (err) {
    console.error('Error:', err.message);
  }
}

cat();
