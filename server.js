//var j = require('./schedule.js')
var shell = require('shelljs');

var gitAdd = new Promise(function (resolve, reject) {
  resolve(shell.exec('git add .'));
  reject(code !== 0);
});
var gitCommit = new Promise(function (resolve, reject) {
  resolve(shell.exec('git commit -am "Atualização 14-08"'));
  reject(code !== 0);
});
var gitPush = new Promise(function (resolve, reject) {
  resolve(shell.exec('git push'));
  reject(code !== 0);
});

const port = 3000
const http = require('http')
const ip = 'localhost'

const server = http.createServer((req, res) => {
  res.end('<h1>Testing the schedule</h1>')
})

server.listen(port, ip, () => {
  //j.runOnDate();
  shell.cd('../Projetos/IBM_Poupatempo/Poupinha')
  gitAdd.then(function (value) {
    console.log('Foi gitAdd');
  });
  gitCommit.then(function (value) {
    console.log('Foi gitCommit');
  });
  gitPush.then(function (value) {
    console.log('Foi gitPush');
  });
  console.log(`Server running on http://${ip}:${port}`);
});