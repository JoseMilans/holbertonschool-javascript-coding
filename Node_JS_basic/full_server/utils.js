import fs from 'fs/promises';

const readDatabase = async (path) => {
  try {
    const data = await fs.readFile(path, 'utf8');
    const lines = data.split('\n').filter(Boolean);
    const students = lines.slice(1); // Exclude header

    const fields = students.reduce((acc, curr) => {
      const [firstName,, , field] = curr.split(',');
      if (!acc[field]) acc[field] = [];
      acc[field].push(firstName);
      return acc;
    }, {});

    return fields;
  } catch (error) {
    throw new Error('Cannot load the database');
  }
};

export default readDatabase;
