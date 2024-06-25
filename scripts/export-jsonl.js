import fs from 'fs';

const lines = fs
  .readFileSync(path.join(__dirname, '../public/data/operators.md'), 'utf8')
  .split('\n');

const operators = lines
  .filter((line) => line.startsWith('['))
  .map((line) => {
    // const [, category, aliases, description, compatibility] = line.match(/\[(.*)\]\((.*)\)\s*:\s*(.*)\s*\((.*)\)/);
    return {
      category,
      aliases,
      description,
      compatibility,
    };
  });

fs.writeFileSync(
  path.join(__dirname, '../public/data/operators.jsonl'),
  operators.map((operator) => JSON.stringify(operator)).join('\n')
);
