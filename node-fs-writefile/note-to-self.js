import { writeFile } from 'node:fs/promises';

async function noteToSelf() {
  try {
    const write = process.argv[2];
    const note = `${write}\n`;

    await writeFile('note.txt', note, 'utf8');

    console.log('Success');
  } catch (error) {
    console.error('Error:', error);
  }
}

noteToSelf();
