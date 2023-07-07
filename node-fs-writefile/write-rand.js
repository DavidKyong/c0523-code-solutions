import { writeFile } from 'node:fs/promises';

async function writeRandomNumberToFile() {
  try {
    const randomNumber = Math.random();
    const fileContents = `${randomNumber}\n`;

    await writeFile('random.txt', fileContents, 'utf8');

    console.log('Success');
  } catch (error) {
    console.error('Error:', error);
  }
}

writeRandomNumberToFile();
