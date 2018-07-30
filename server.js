//var j = require('./schedule.js')
var shell = require('shelljs');

const port = 3000
const http = require('http')
const ip = 'localhost'

const server = http.createServer((req, res) => {
  res.end('<h1>Testando o schedule</h1>')
})

server.listen(port, ip, () => {
  //j.runOnDate();
  shell.exec('git add .');
  shell.exec('git commit -am "Auto-commit"');
  shell.exec('git push');
  console.log(`Servidor rodando em http://${ip}:${port}`);
})

