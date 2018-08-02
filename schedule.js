var schedule = require('node-schedule');
var shell = require('shelljs');
var fs = require('file-system');

var lista = [
  '../../master/.vscode',
  '../../master/componentes',
  '../../master/dados',
  '../../master/.vscode',
  '../../master/componentes',
  '../../master/dados',
  '../../master/db',
  '../../master/dialog',
  '../../master/portal',
  '../../master/public',
  '../../master/security',
  '../../master/server',
  '../../master/service',
  '../../master/social',
  '../../master/utilities',
  '../../master/validation',
  '../../master/watson'];
var env = '../../master/.env';
var app = '../../master/app.js';
var package = '../../master/package.json';

var fim = '../testeschedule';
var fimEnv = '../testeschedule/.env';
var fimApp = '../testeschedule/app.js';
var fimPackage = '../testeschedule/package.json';


LLen = lista.length;

var j = schedule.scheduleJob('38 * * * *', function () {
  for (i = 0; i < LLen; i++) {
    shell.cp('-R', lista[i], fim);
  }console.log('primeira etapa');

  fs.copyFile(env, fimEnv, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });console.log('segunda etapa');

  fs.copyFile(app, fimApp, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });console.log('segunda etapa');

  fs.copyFile(package, fimPackage, (err) => {
    if (err) throw err;
    console.log('.env not copied');
  });console.log('segunda etapa');

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