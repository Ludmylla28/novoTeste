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
  if (shell.exec('git add .').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  } else if (shell.exec('git commit -am "Auto-commit"').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  } else if (shell.exec('git push').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  }
  console.log(`Servidor rodando em http://${ip}:${port}`);
});