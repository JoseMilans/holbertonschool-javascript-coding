const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf-8');
    const lines = data.trim().split('\n').filter((line) => line !== '');
    // Skip header and remove empty lines
    const students = lines.slice(1);

    const fieldCounts = {};
    const namesByField = {};

    students.forEach((line) => {
      const [firstName, , , field] = line.split(',');
      if (!fieldCounts[field]) {
        fieldCounts[field] = 0;
        namesByField[field] = [];
      }

      fieldCounts[field] += 1;
      namesByField[field].push(firstName);
    });

    const totalStudents = students.length;
    console.log(`Number of students: ${totalStudents}`);

    Object.entries(fieldCounts).forEach(([field, count]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${namesByField[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}
module.exports = countStudents;
