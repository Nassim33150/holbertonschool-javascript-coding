#!/usr/bin/node
const request = require('request');
const url = process.argv[2];

request.get(url, function (err, data, body) {
  if (err) {
    console.log(err);
  } else {
    const tasks = JSON.parse(body);
    const tasksCompleted = {};
    for (const task of tasks) {
      if (task.completed) {
        tasksCompleted[task.userId] = (tasksCompleted[task.userId] || 0) + 1;
      }
    }
    console.log(tasksCompleted);
  }
});
