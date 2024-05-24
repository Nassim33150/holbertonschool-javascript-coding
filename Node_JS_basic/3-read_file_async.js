const fs = require('fs').promises;

// Reading a file asynchronously with Node JS

async function countStudents(path) {
  try {
    const studentData = await fs.readFile(path, 'utf8');
    const students = studentData
      .split('\n')
      .filter((student) => student.length > 0)
      .map((student) => student.split(','));

    students.shift();
    console.log(`Number of students: ${students.length}`);
    const filedOfStudy = {};
    students.forEach((student) => {
      if (!filedOfStudy[student[3]]) filedOfStudy[student[3]] = [];
      filedOfStudy[student[3]].push(student[0]);
    });

    Object.keys(filedOfStudy).forEach((key) => {
      console.log(
        `Number of students in ${key}: ${
          filedOfStudy[key].length
        }. List: ${filedOfStudy[key].join(', ')}`,
      );
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
