// Majd Bathesh '207930140' , Hala ali saleh '212684864'
const fs = require('fs');

const files = [
  'file1.txt',
  'file2.txt',
  'file3.txt',
  'file4.txt',
  'file5.txt',
  'file6.txt',
  'file7.txt',
  'file8.txt',
  'file9.txt',
  'file10.txt',
];

const outputFile = 'output.txt';

fs.writeFileSync(outputFile, '');

for (let i = 0; i < files.length; i++) {
  const content = fs.readFileSync(files[i], 'utf8');
  const lines = content.split(/\r?\n/);
  const selectedLines = lines.slice(0, i + 1);

  fs.appendFileSync(outputFile, selectedLines.join('\n') + '\n');
}

console.log('Finished! Check output.txt');

