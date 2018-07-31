var j = require('./schedule.js')

const port = 3000
const http = require('http')
const ip = 'localhost'

const server = http.createServer((req, res) => {
  res.end('<h1>Testando o schedule</h1>')
})

server.listen(port, ip, () => {
  j.runOnDate();
  console.log(`Servidor rodando em http://${ip}:${port}`);
});