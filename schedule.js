var schedule = require('node-schedule');
var shell = require('shelljs');
var fs = require('file-system');
var documentos = require('./documentos');
var fins = require('./fins');



LLen = documentos.length;

var j = schedule.scheduleJob('29 * * * *', function () {
  for (i = 0; i < LLen; i++) {
    shell.cp('-R', documentos[i], fins);
  }console.log('primeira etapa');

  for (i = 0; i < documentos; i++){
  fs.copyFile(env, fins, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });
}console.log('segunda etapa');
  if (shell.exec('cd ../testeschedule').code !== 0) {
    shell.echo('Error: folder change failed');
    shell.exit(1);
  }else if (shell.exec('git add .').code !== 0) {
    shell.echo('Error: Git add failed');
    shell.exit(1);
  } else if (shell.exec('git commit -am "testando 123"').code !== 0) {
    shell.echo('Error: Git commit failed');
    shell.exit(1);
  } else if (shell.exec('git push').code !== 0) {
    shell.echo('Error: Git push failed');
    shell.exit(1);
  }console.log('I finished')
});

module.exports = j; 