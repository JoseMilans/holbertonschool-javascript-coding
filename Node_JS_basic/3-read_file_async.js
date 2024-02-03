const fs = require('fs').promises;

async function countStudents(path) {
  try {
    // Async read the file
    const data = await fs.readFile(path, 'utf8');
    // Trim/split data into lines and filter empty lines
    const lines = data.trim().split('\n').filter((line) => line);

    // Skip the header
    const students = lines.slice(1);

    const fieldCounts = {};
    const namesByField = {};

    students.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      // Validate data presence
      if (firstName && field) {
        if (!fieldCounts[field]) {
          fieldCounts[field] = 0;
          namesByField[field] = [];
        }
        fieldCounts[field] += 1;
        namesByField[field].push(firstName);
      }
    });

    const totalStudents = Object.values(fieldCounts).reduce((acc, count) => acc + count, 0);
    console.log(`Number of students: ${totalStudents}`);

    Object.entries(fieldCounts).forEach(([field, count]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${namesByField[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
