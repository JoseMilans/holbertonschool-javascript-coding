#!/usr/bin/node

const request = require('request');
const apiURL = process.argv[2];

request(apiURL, (error, response, responseBody) => {
  if (error) {
    console.error(error);
  }

  const taskCounts = {};
  const tasks = JSON.parse(responseBody);

  tasks.forEach(task => {
    if (task.completed) {
      taskCounts[task.userId] = taskCounts[task.userId] ? taskCounts[task.userId] + 1 : 1;
    }
  });

  console.log(taskCounts);
});
