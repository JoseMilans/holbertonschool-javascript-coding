#!/usr/bin/node

const request = require('request');
const apiUrl = process.argv[2];

request(apiUrl, (error, response, responseBody) => {
  if (error) {
    console.error(error);
  }

  const taskCounts = {};
  const tasks = JSON.parse(responseBody);

  tasks.forEach(task => {
    if (task.completed) {
      taskCounts[task.userId] = taskCounts[task.userId] || 0;
      taskCounts[task.userId]++;
    }
  });

  console.log(taskCounts);
});
