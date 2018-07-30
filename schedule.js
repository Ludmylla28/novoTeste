var schedule = require('node-schedule');
var shell = require('shelljs');
var fs = require('file-system');

var lista = [
  '../Projetos/Poupatempo/master/.vscode',
  '../Projetos/Poupatempo/master/componentes',
  '../Projetos/Poupatempo/master/dados',
  '../Projetos/Poupatempo/master/.vscode',
  '../Projetos/Poupatempo/master/componentes',
  '../Projetos/Poupatempo/master/dados',
  '../Projetos/Poupatempo/master/db',
  '../Projetos/Poupatempo/master/dialog',
  '../Projetos/Poupatempo/master/portal',
  '../Projetos/Poupatempo/master/public',
  '../Projetos/Poupatempo/master/security',
  '../Projetos/Poupatempo/master/server',
  '../Projetos/Poupatempo/master/service',
  '../Projetos/Poupatempo/master/social',
  '../Projetos/Poupatempo/master/utilities',
  '../Projetos/Poupatempo/master/validation',
  '../Projetos/Poupatempo/master/watson'];

var fim = '../Ludy/teste_git/testeschedule';

var env = '../Projetos/Poupatempo/master/.env';
var app = '../Projetos/Poupatempo/master/app.js';
var package = '../Projetos/Poupatempo/master/package.json';
var fimEnv = '../Ludy/teste_git/testeschedule/.env';
var fimApp = '../Ludy/teste_git/testeschedule/app.js';
var fimPackage = '../Ludy/teste_git/testeschedule/package.json';

LLen = lista.length;

var j = schedule.scheduleJob('27 * * * *', function () {

  for (i = 0; i < LLen; i++) {
    shell.cp('-R', lista[i], fim);
  }
  fs.copyFile(env, fimEnv, (err) => {
    if (err) throw err;
    console.log('.env copiado');
  });

  fs.copyFile(app, fimApp, (err) => {
    if (err) throw err;
    console.log('app.js copiado');
  });

  fs.copyFile(package, fimPackage, (err) => {
    if (err) throw err;
    console.log('package.json copiado');
  });

  console.log('Terminei');

  shell.exec('git add .').code !== 0
  shell.echo('Error: Git commit failed');
  shell.exit(1);


});

module.exports = j; 